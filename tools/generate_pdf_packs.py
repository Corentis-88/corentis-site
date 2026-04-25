from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle


PAGE_WIDTH, PAGE_HEIGHT = A4
ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
PACKS_DIR = PUBLIC_DIR / "packs"
BRAND_DIR = PUBLIC_DIR / "brand"
IMAGES_DIR = PUBLIC_DIR / "images"

MIDNIGHT = HexColor("#04122B")
DEEP_NAVY = HexColor("#0A1E46")
COBALT = HexColor("#2F7BFF")
ELECTRIC = HexColor("#49A6FF")
ICE = HexColor("#A9D9FF")
NEAR_WHITE = HexColor("#F5F9FF")
STEEL = HexColor("#97A7C3")
PANEL = Color(0.07, 0.15, 0.33, alpha=0.90)
PANEL_HIGHLIGHT = Color(0.09, 0.18, 0.36, alpha=0.96)
PANEL_STROKE = Color(0.12, 0.24, 0.46, alpha=1)
GRID = Color(1, 1, 1, alpha=0.035)
WHITE_LINE = Color(1, 1, 1, alpha=0.08)
WHITE_SOFT = Color(1, 1, 1, alpha=0.05)
EMERALD = HexColor("#7DE0C1")
AMBER = HexColor("#F0BE6C")
ROSE = HexColor("#D8A2C2")

LOGO_LIGHT = BRAND_DIR / "corentis-logo-light.png"
LOGO_MARK = BRAND_DIR / "corentis-mark-light.png"
FIN_IMAGE = IMAGES_DIR / "financial-services-canary-wharf.jpg"
LIFE_IMAGE = IMAGES_DIR / "clinical-lab.jpg"

FONT_BODY = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
FONT_TITLE = "Helvetica-Bold"
STYLES: dict[str, ParagraphStyle]


def register_fonts() -> None:
    global FONT_BODY, FONT_BOLD, FONT_TITLE

    font_candidates = [
        ("CorentisBody", Path("C:/Windows/Fonts/segoeui.ttf")),
        ("CorentisBold", Path("C:/Windows/Fonts/segoeuib.ttf")),
        ("CorentisTitle", Path("C:/Windows/Fonts/seguisb.ttf")),
    ]

    for name, path in font_candidates:
        if path.exists():
            pdfmetrics.registerFont(TTFont(name, str(path)))

    installed = set(pdfmetrics.getRegisteredFontNames())
    if {"CorentisBody", "CorentisBold", "CorentisTitle"}.issubset(installed):
        FONT_BODY = "CorentisBody"
        FONT_BOLD = "CorentisBold"
        FONT_TITLE = "CorentisTitle"


def paragraph_styles() -> dict[str, ParagraphStyle]:
    return {
        "cover_title": ParagraphStyle("cover_title", fontName=FONT_TITLE, fontSize=29, leading=33, textColor=NEAR_WHITE),
        "cover_body": ParagraphStyle("cover_body", fontName=FONT_BODY, fontSize=12.5, leading=19, textColor=Color(0.96, 0.98, 1, alpha=0.84)),
        "page_title": ParagraphStyle("page_title", fontName=FONT_TITLE, fontSize=24, leading=28, textColor=NEAR_WHITE),
        "body": ParagraphStyle("body", fontName=FONT_BODY, fontSize=10.2, leading=15, textColor=STEEL),
        "card_title": ParagraphStyle("card_title", fontName=FONT_BOLD, fontSize=12.4, leading=15, textColor=NEAR_WHITE),
        "card_body": ParagraphStyle("card_body", fontName=FONT_BODY, fontSize=9.3, leading=13.6, textColor=STEEL),
    }


def ensure_output() -> None:
    PACKS_DIR.mkdir(parents=True, exist_ok=True)


def draw_background(pdf: canvas.Canvas, accent: Color) -> None:
    pdf.saveState()
    pdf.setFillColor(MIDNIGHT)
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)
    pdf.setFillColor(Color(0.05, 0.11, 0.24, alpha=1))
    pdf.rect(0, PAGE_HEIGHT * 0.57, PAGE_WIDTH, PAGE_HEIGHT * 0.43, stroke=0, fill=1)
    pdf.setFillColor(accent)
    pdf.circle(82, PAGE_HEIGHT - 92, 128, stroke=0, fill=1)
    pdf.circle(PAGE_WIDTH - 84, PAGE_HEIGHT - 72, 138, stroke=0, fill=1)
    pdf.setStrokeColor(GRID)
    pdf.setLineWidth(0.35)
    for offset in range(0, int(PAGE_WIDTH), 48):
        pdf.line(offset, 0, offset, PAGE_HEIGHT)
    for offset in range(0, int(PAGE_HEIGHT), 48):
        pdf.line(0, offset, PAGE_WIDTH, offset)
    pdf.restoreState()


def draw_photo_cover(pdf: canvas.Canvas, image_path: Path, accent: Color) -> None:
    pdf.drawImage(str(image_path), 0, 0, width=PAGE_WIDTH, height=PAGE_HEIGHT, preserveAspectRatio=True, mask="auto")
    pdf.setFillColor(Color(0.02, 0.07, 0.16, alpha=0.88))
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)
    pdf.setFillColor(accent)
    pdf.circle(PAGE_WIDTH - 86, PAGE_HEIGHT - 86, 128, stroke=0, fill=1)
    pdf.setFillColor(Color(0.01, 0.04, 0.1, alpha=0.46))
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT * 0.34, stroke=0, fill=1)


def draw_logo(pdf: canvas.Canvas, x: float, y: float, width: float) -> None:
    pdf.drawImage(str(LOGO_LIGHT), x, y, width=width, preserveAspectRatio=True, mask="auto")


def draw_mark(pdf: canvas.Canvas, x: float, y: float, width: float) -> None:
    pdf.drawImage(str(LOGO_MARK), x, y, width=width, preserveAspectRatio=True, mask="auto")


def draw_chip(pdf: canvas.Canvas, x: float, y: float, label: str, fill: Color | None = None, text_color=ICE) -> float:
    padding_x = 10
    width = pdf.stringWidth(label.upper(), FONT_BOLD, 8.5) + padding_x * 2
    height = 19
    pdf.saveState()
    pdf.setFillColor(fill or Color(1, 1, 1, alpha=0.04))
    pdf.setStrokeColor(Color(0.66, 0.85, 1, alpha=0.16))
    pdf.roundRect(x, y - height, width, height, 9, stroke=1, fill=1)
    pdf.setFillColor(text_color)
    pdf.setFont(FONT_BOLD, 8.5)
    pdf.drawString(x + padding_x, y - 13.2, label.upper())
    pdf.restoreState()
    return width


def footer(pdf: canvas.Canvas, page_number: int) -> None:
    pdf.setStrokeColor(WHITE_LINE)
    pdf.line(42, 42, PAGE_WIDTH - 42, 42)
    pdf.setFont(FONT_BODY, 8)
    pdf.setFillColor(Color(0.88, 0.92, 0.98, alpha=0.55))
    pdf.drawString(42, 28, "Corentis | hello@corentis.co.uk | United Kingdom")
    pdf.drawRightString(PAGE_WIDTH - 42, 28, f"{page_number:02d}")


def draw_paragraph(pdf: canvas.Canvas, text: str, style_name: str, x: float, y_top: float, width: float) -> float:
    paragraph = Paragraph(text, STYLES[style_name])
    _, height = paragraph.wrap(width, PAGE_HEIGHT)
    paragraph.drawOn(pdf, x, y_top - height)
    return y_top - height


def draw_cover(pdf: canvas.Canvas, title: str, subtitle: str, summary: str, label: str, status: str, accent: Color, image_path: Path | None = None) -> None:
    if image_path:
        draw_photo_cover(pdf, image_path, accent)
    else:
        draw_background(pdf, accent)

    draw_logo(pdf, 42, PAGE_HEIGHT - 112, 172)
    draw_chip(pdf, 42, PAGE_HEIGHT - 132, label, fill=Color(1, 1, 1, alpha=0.03))
    draw_chip(pdf, 42, PAGE_HEIGHT - 159, status, fill=Color(0.19, 0.48, 1, alpha=0.14))

    y = PAGE_HEIGHT - 220
    y = draw_paragraph(pdf, title, "cover_title", 42, y, 348)
    y = draw_paragraph(pdf, subtitle, "cover_body", 42, y - 20, 352)

    pdf.setFillColor(Color(0.08, 0.15, 0.30, alpha=0.86))
    pdf.setStrokeColor(Color(0.66, 0.85, 1, alpha=0.14))
    pdf.roundRect(42, 116, PAGE_WIDTH - 84, 160, 22, stroke=1, fill=1)
    pdf.setFont(FONT_BOLD, 9)
    pdf.setFillColor(ICE)
    pdf.drawString(62, 255, "PACK SUMMARY")
    draw_paragraph(pdf, summary, "body", 62, 236, PAGE_WIDTH - 124)

    pdf.setFont(FONT_BODY, 9)
    pdf.setFillColor(Color(0.95, 0.98, 1, alpha=0.60))
    pdf.drawString(42, 64, "Corentis is building the policy plane for regulated AI.")
    pdf.drawRightString(PAGE_WIDTH - 42, 64, "www.corentis.co.uk")
    footer(pdf, 1)
    pdf.showPage()


def draw_header(pdf: canvas.Canvas, pack_title: str, section_title: str, page_number: int, status_label: str, accent: Color) -> float:
    draw_background(pdf, accent)
    draw_mark(pdf, 42, PAGE_HEIGHT - 64, 26)
    pdf.setFont(FONT_BOLD, 9)
    pdf.setFillColor(Color(0.95, 0.98, 1, alpha=0.62))
    pdf.drawString(75, PAGE_HEIGHT - 49, pack_title)
    draw_chip(pdf, PAGE_WIDTH - 212, PAGE_HEIGHT - 40, status_label)
    pdf.setFont(FONT_TITLE, 25)
    pdf.setFillColor(NEAR_WHITE)
    pdf.drawString(42, PAGE_HEIGHT - 100, section_title)
    pdf.setStrokeColor(WHITE_LINE)
    pdf.line(42, PAGE_HEIGHT - 118, PAGE_WIDTH - 42, PAGE_HEIGHT - 118)
    footer(pdf, page_number)
    return PAGE_HEIGHT - 140


def draw_card(pdf: canvas.Canvas, x: float, y_top: float, width: float, height: float, label: str, title: str, body: str, value: str | None = None, highlight: bool = False) -> None:
    pdf.saveState()
    pdf.setFillColor(PANEL_HIGHLIGHT if highlight else PANEL)
    pdf.setStrokeColor(Color(0.55, 0.78, 1, alpha=0.2) if highlight else PANEL_STROKE)
    pdf.roundRect(x, y_top - height, width, height, 18, stroke=1, fill=1)
    draw_chip(pdf, x + 14, y_top - 12, label, fill=Color(1, 1, 1, alpha=0.03))
    if value:
        right_x = x + width - 14 - (pdf.stringWidth(value.upper(), FONT_BOLD, 8.5) + 20)
        draw_chip(pdf, right_x, y_top - 12, value, fill=Color(1, 1, 1, alpha=0.03), text_color=Color(0.95, 0.98, 1, alpha=0.74))
    content_y = y_top - 42
    content_y = draw_paragraph(pdf, title, "card_title", x + 14, content_y, width - 28)
    draw_paragraph(pdf, body, "card_body", x + 14, content_y - 10, width - 28)
    pdf.restoreState()


def draw_bullet_list(pdf: canvas.Canvas, x: float, y_top: float, width: float, items: list[str], bullet_color=ICE) -> float:
    current_y = y_top
    for item in items:
        wrapped = simpleSplit(item, FONT_BODY, 10.1, width - 18)
        pdf.setFillColor(bullet_color)
        pdf.circle(x + 4, current_y - 7, 2.2, stroke=0, fill=1)
        pdf.setFont(FONT_BODY, 10.1)
        pdf.setFillColor(STEEL)
        line_y = current_y
        for line in wrapped:
            pdf.drawString(x + 14, line_y - 10, line)
            line_y -= 14
        current_y = line_y - 7
    return current_y


def draw_step_row(pdf: canvas.Canvas, x: float, y_top: float, width: float, steps: list[tuple[str, str]], accent_index: int = 1) -> float:
    gap = 12
    card_width = (width - gap * (len(steps) - 1)) / len(steps)
    height = 142
    for index, (title, body) in enumerate(steps):
        left = x + index * (card_width + gap)
        draw_card(pdf, left, y_top, card_width, height, f"0{index + 1}", title, body, highlight=index == accent_index)
        if index < len(steps) - 1:
            mid_y = y_top - height / 2
            start_x = left + card_width + 4
            end_x = left + card_width + gap - 4
            pdf.setStrokeColor(Color(0.55, 0.78, 1, alpha=0.24))
            pdf.setLineWidth(1)
            pdf.line(start_x, mid_y, end_x, mid_y)
            pdf.line(end_x - 4, mid_y + 3, end_x, mid_y)
            pdf.line(end_x - 4, mid_y - 3, end_x, mid_y)
    return y_top - height


def draw_table_block(pdf: canvas.Canvas, x: float, y_top: float, width: float, data: list[list[str]], col_widths: list[float], heading: str, note: str | None = None) -> float:
    draw_paragraph(pdf, heading, "card_title", x, y_top, width)
    if note:
        y_top = draw_paragraph(pdf, note, "card_body", x, y_top - 18, width)
        y_top -= 8
    table = Table(data, colWidths=col_widths, repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), Color(0.19, 0.48, 1, alpha=0.18)),
                ("TEXTCOLOR", (0, 0), (-1, 0), NEAR_WHITE),
                ("FONTNAME", (0, 0), (-1, 0), FONT_BOLD),
                ("FONTNAME", (0, 1), (-1, -1), FONT_BODY),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("LEADING", (0, 0), (-1, -1), 12),
                ("TEXTCOLOR", (0, 1), (-1, -1), STEEL),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [Color(1, 1, 1, alpha=0.03), Color(1, 1, 1, alpha=0.05)]),
                ("GRID", (0, 0), (-1, -1), 0.5, WHITE_LINE),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    _, table_height = table.wrap(width, PAGE_HEIGHT)
    table.drawOn(pdf, x, y_top - table_height)
    return y_top - table_height


def build_investor_pack(pdf_path: Path) -> None:
    accent = Color(0.20, 0.50, 1, alpha=0.10)
    pdf = canvas.Canvas(str(pdf_path), pagesize=A4)
    draw_cover(
        pdf,
        "Investor Overview",
        "A commercially serious view of Corentis as product infrastructure for policy-controlled AI deployment.",
        "This pack compresses the investment case into one readable flow: category need, why now, the financial-services wedge, the product logic, and what exists now versus what is still being validated. It is written to support a serious investor conversation without inventing traction, customers, or maturity.",
        "Investor pack",
        "Current prototype direction",
        accent,
    )

    y = draw_header(pdf, "Investor Overview", "Investment case at a glance", 2, "Investor lens", accent)
    draw_card(pdf, 42, y, 162, 174, "Category need", "AI adoption is becoming a control problem.", "Regulated organisations increasingly see AI value, but rollout slows when policy, approval, escalation, and evidence are handled outside the workflow.")
    draw_card(pdf, 216, y, 162, 174, "Why now", "The commercial pressure is visible.", "McKinsey estimates generative AI could create $200bn-$340bn in annual value for banking, mostly through productivity gains.", value="Timing")
    draw_card(pdf, 390, y, 162, 174, "Early buyer pain", "The first wedge is complaints control.", "The V1 demo shows how a complaint can move from policy to controls, advisor guidance, blocked unsafe actions, escalation, and evidence.", highlight=True)
    y -= 198
    draw_card(pdf, 42, y, 245, 154, "Wedge", "One workflow where cost, risk, and service pressure meet.", "Complaints handling is repeatable, review-heavy, commercially painful, and easy for operations, risk, and compliance teams to understand.")
    draw_card(pdf, 308, y, 245, 154, "Product logic", "Policy Composer is the core product idea.", "Plain-English policy becomes operational controls: what AI may do, when approval is required, when escalation triggers, and what evidence is recorded.", highlight=True)
    footer(pdf, 2)
    pdf.showPage()

    y = draw_header(pdf, "Investor Overview", "From first workflow to wider platform value", 3, "Commercial path", accent)
    draw_card(pdf, 42, y, 250, 176, "Initial wedge", "Start where the operating pain is already visible.", "The first repeatable workflow is one where AI already looks useful, but internal rollout is slowed by approval steps, escalation conditions, and the need for review-ready evidence.", value="Land")
    draw_card(pdf, 303, y, 250, 176, "Why it can convert", "The buyer does not need to be convinced that governance matters.", "The first commercial case is easier to make because review friction, evidence gathering, and internal challenge already exist inside the operating model.", value="Buyer fit")
    y -= 202
    draw_step_row(pdf, 42, y, 511, [("Land", "Win one workflow where approval friction and evidence burden are obvious."), ("Prove", "Show a cleaner path from pilot to governed use."), ("Expand", "Extend the same control layer into adjacent workflows with similar needs.")])
    y -= 172
    draw_card(pdf, 42, y, 511, 114, "Revenue path", "A realistic route from first use case to broader infrastructure adoption.", "The commercial path begins with one workflow brief and expands into neighbouring workflows that need similar control mapping, approval logic, runtime visibility, and evidence reuse.")
    footer(pdf, 3)
    pdf.showPage()

    y = draw_header(pdf, "Investor Overview", "What exists now and what is being validated", 4, "Stage clarity", accent)
    draw_card(pdf, 42, y, 162, 168, "Exists now", "Illustrative workflow surfaces", "The current materials already show control views, evidence framing, workflow diagrams, and review-ready exports.")
    draw_card(pdf, 216, y, 162, 168, "Current focus", "Buyer fit and proof design", "Validation is focused on which workflow lands first and what serious buyers need to see before deployment.")
    draw_card(pdf, 390, y, 162, 168, "Near-term", "Sharper workflow and design-partner learning", "Current work is intended to turn conversations into clearer workflow focus, stronger packs, and a tighter pilot-to-revenue path.", highlight=True)
    y -= 190
    draw_card(pdf, 42, y, 511, 136, "What is being shown honestly", "A serious early-stage company, not invented traction", "Corentis is being presented as an early product company. The pack is designed to make the commercial logic legible while avoiding false signals around live customers, formal approvals, or mature enterprise rollout.")
    footer(pdf, 4)
    pdf.showPage()

    y = draw_header(pdf, "Investor Overview", "Why continue the conversation", 5, "Next step", accent)
    draw_card(pdf, 42, y, 162, 172, "Category", "The need is becoming easier to see", "Governed deployment is starting to look like infrastructure rather than a temporary compliance patch.")
    draw_card(pdf, 216, y, 162, 172, "Company", "The product logic is taking shape", "Corentis already presents a coherent wedge, clear scope, and product-style proof rather than a broad abstract thesis.")
    draw_card(pdf, 390, y, 162, 172, "Conversation", "The next discussion should be specific", "A useful investor conversation is likely to focus on workflow wedge, early buyer, proof requirements, and what turns the first deployment path into recurring revenue.", highlight=True)
    y -= 198
    draw_card(pdf, 42, y, 511, 136, "Closing invitation", "If the category thesis is interesting, the next step is a serious conversation.", "Corentis is building the policy plane for regulated AI. If the question is whether governed deployment becomes a real category need, the next conversation should be about first workflow entry, proof thresholds, and what this can become as product infrastructure.")
    footer(pdf, 5)
    pdf.save()


def build_assurance_pack(pdf_path: Path) -> None:
    accent = Color(0.12, 0.38, 0.92, alpha=0.09)
    pdf = canvas.Canvas(str(pdf_path), pagesize=A4)
    draw_cover(
        pdf,
        "Assurance / Governance Summary",
        "A review-friendly explanation of how Corentis is being shaped to support governed AI deployment.",
        "This pack is intended for assurance readers, public-interest evaluators, governance stakeholders, auditors, and cautious enterprise reviewers. It explains the operational problem Corentis is addressing, how human oversight sits in the workflow, what evidence is intended to look like, and why careful scope is part of the trust case.",
        "Assurance pack",
        "Deliberately careful scope",
        accent,
    )

    y = draw_header(pdf, "Assurance / Governance Summary", "Why governed deployment matters", 2, "Review-friendly summary", accent)
    draw_card(pdf, 42, y, 162, 176, "Deployment problem", "Useful workflows still need visible control.", "As AI moves into more important work, the challenge is no longer only whether a model can produce an output. The challenge is whether the surrounding process remains reviewable and easier to justify later.")
    draw_card(pdf, 216, y, 162, 176, "Assurance gap", "Evidence fragments across teams and systems.", "Without structure, questions about review, escalation, and accountability spread across documents, tools, and inboxes that are difficult to inspect as one record.")
    draw_card(pdf, 390, y, 162, 176, "Why it matters", "Trust depends on operational clarity.", "Governed deployment matters because the ability to explain what happened later is often as important as the output itself.", highlight=True)
    y -= 202
    draw_card(pdf, 42, y, 511, 128, "What Corentis adds", "Control logic, human oversight, and evidence around one workflow.", "Corentis is being shaped to add testing, approval logic, runtime visibility, and review-ready outputs around a workflow so scrutiny does not depend on scattered evidence gathering after the fact.")
    footer(pdf, 2)
    pdf.showPage()

    y = draw_header(pdf, "Assurance / Governance Summary", "Control, review, evidence, accountability", 3, "Signature page", accent)
    draw_step_row(pdf, 42, y, 511, [
        ("Control", "Workflow rules, escalation triggers, and approval conditions are defined before use."),
        ("Review", "Human oversight remains explicit wherever judgement or sign-off is required."),
        ("Evidence", "Exceptions, approvals, and runtime events remain visible in one exportable record."),
    ])
    y -= 170
    draw_card(pdf, 42, y, 245, 146, "Accountability", "The workflow becomes easier to inspect later.", "The practical aim is not abstract trust language. It is a workflow that can be explained, challenged, and evidenced with less reconstruction work.")
    draw_card(pdf, 308, y, 245, 146, "Example oversight flow", "A reviewer can inspect what happened in sequence.", "A serious reviewer should be able to see the use case, the controls applied, where human sign-off happened, what exceptions appeared, and what record remains afterwards.", highlight=True)
    footer(pdf, 3)
    pdf.showPage()

    y = draw_header(pdf, "Assurance / Governance Summary", "What Corentis is and what it is not", 4, "Scope boundaries", accent)
    draw_card(pdf, 42, y, 245, 228, "What Corentis is", "A governance and assurance layer around AI-supported workflows.", "It is a way to make oversight visible, add review gates where they matter, retain runtime events, and produce review-ready outputs that support practical accountability.")
    draw_card(pdf, 308, y, 245, 228, "What Corentis is not", "Not a claim that regulation can be automated away.", "It is not a substitute for human accountability, not a reason to remove important review steps, and not a broad promise that AI should be trusted without careful workflow design.", highlight=True)
    y -= 252
    draw_card(pdf, 42, y, 511, 118, "Why the careful scope matters", "The claim posture is part of the product posture.", "A careful scope is a strength because it keeps the focus on bounded deployment, visible review, and evidence generation rather than overstated claims about autonomy.")
    footer(pdf, 4)
    pdf.showPage()

    y = draw_header(pdf, "Assurance / Governance Summary", "Current product stage and careful claim posture", 5, "Stage clarity", accent)
    draw_card(pdf, 42, y, 162, 172, "Current stage", "Early product direction", "Corentis is being presented at an early stage with a bounded, disciplined claim posture.")
    draw_card(pdf, 216, y, 162, 172, "Exists now", "Illustrative governance views", "The current materials show prototype process logic, sample outputs, and worked examples rather than live customer deployment.")
    draw_card(pdf, 390, y, 162, 172, "Being validated", "What serious reviewers need to see", "Current validation is about oversight logic, workflow fit, evidence requirements, and which bounded use cases provide the clearest value.", highlight=True)
    y -= 198
    y = draw_bullet_list(pdf, 56, y, 470, [
        "Careful scope is part of the trust case, not a limitation to hide.",
        "Human oversight remains central wherever review or escalation is required.",
        "Illustrative examples are labeled clearly so the materials do not imply maturity that is not being claimed.",
    ])
    draw_card(pdf, 42, y - 24, 511, 120, "Closing invitation", "If this pack is useful, the next step is a governance-focused conversation.", "Corentis would be glad to continue the discussion around oversight logic, evidence requirements, workflow boundaries, or the practical questions a serious reviewer would want answered next.")
    footer(pdf, 5)
    pdf.save()


def build_financial_pack(pdf_path: Path) -> None:
    accent = Color(0.14, 0.41, 0.96, alpha=0.12)
    pdf = canvas.Canvas(str(pdf_path), pagesize=A4)
    draw_cover(
        pdf,
        "Financial Services Workflow Brief",
        "A buyer-facing view of how Corentis can sit around AI-enabled operational workflows in financial services.",
        "This brief is designed for operations leaders, complaints owners, transformation managers, risk and compliance stakeholders, and technical readers who need to picture where Corentis fits in the workflow. The worked example in this pack is complaints triage, shown as an illustrative workflow rather than a live customer result.",
        "Workflow brief",
        "Illustrative workflow",
        accent,
        image_path=FIN_IMAGE,
    )

    y = draw_header(pdf, "Financial Services Workflow Brief", "Why this workflow matters", 2, "Operational context", accent)
    draw_card(pdf, 42, y, 162, 176, "Service pressure", "1.85m complaints in 2025 H1.", "FCA data shows UK financial-services complaints remain consistently high, creating pressure for faster, more consistent handling.")
    draw_card(pdf, 216, y, 162, 176, "Cost exposure", "£235.9m redress in 2024 H2.", "Complaint processes can create material redress and remediation pressure when decisions, approvals, or evidence are weak.")
    draw_card(pdf, 390, y, 162, 176, "AI pressure", "$200bn-$340bn banking value potential.", "McKinsey estimates large annual gen-AI value in banking, largely from productivity. The pressure to adopt is real.", highlight=True)
    y -= 202
    draw_card(pdf, 42, y, 511, 128, "What Corentis adds", "A way to move faster without making control invisible.", "Corentis turns policy into operational controls, advisor guidance, review gates, escalation logic, and evidence so operations, risk, and compliance teams can inspect the same workflow record. Sources: FCA complaints data 2025 H1 and 2024 H2; McKinsey, generative AI in banking.")
    footer(pdf, 2)
    pdf.showPage()

    y = draw_header(pdf, "Financial Services Workflow Brief", "How Corentis sits in the workflow", 3, "Signature page", accent)
    draw_step_row(pdf, 42, y, 511, [
        ("Complaint enters workflow", "A case enters triage and an AI-assisted process proposes a category, route, or handling path."),
        ("Corentis applies controls", "Policy checks, explanation requirements, and escalation thresholds sit around the workflow."),
        ("Review gate triggers", "Sensitive or ambiguous cases route to named reviewers for approval, override, or escalation."),
    ])
    y -= 170
    draw_card(pdf, 42, y, 162, 162, "Export", "Evidence is assembled", "Workflow context, approvals, exceptions, timestamps, and control references can be packaged for later review.")
    draw_card(pdf, 216, y, 162, 162, "Operations value", "Less duplicated governance work", "Teams can reuse a clearer control pattern instead of rebuilding evidence manually for each discussion.")
    draw_card(pdf, 390, y, 162, 162, "Risk value", "Better challenge and safer rollout", "Risk and compliance teams get a clearer basis for scrutiny, sign-off, and controlled expansion.", highlight=True)
    footer(pdf, 3)
    pdf.showPage()

    y = draw_header(pdf, "Financial Services Workflow Brief", "Without Corentis and with Corentis", 4, "Workflow detail", accent)
    draw_card(pdf, 42, y, 245, 224, "Without Corentis", "The workflow may still work, but the review record is thin.", "Checks and reviewer expectations often live in scattered process notes. Exceptions can be hard to reconstruct later, and different stakeholders may each need a separate explanation of what happened.")
    draw_card(pdf, 308, y, 245, 224, "With Corentis", "The workflow stays bounded, reviewable, and easier to explain.", "Control checks, named review gates, exception handling, and export-ready evidence sit around the workflow so operations, risk, and compliance teams can inspect the same record.", highlight=True)
    y -= 248
    draw_card(pdf, 42, y, 162, 162, "Checks", "Policy and explanation rules", "Checks can include explanation requirements, vulnerable-customer signals, and escalation thresholds.")
    draw_card(pdf, 216, y, 162, 162, "Escalations", "Human review where it matters", "Named reviewers approve, reject, override, or escalate when the workflow crosses a defined threshold.")
    draw_card(pdf, 390, y, 162, 162, "Exports", "Evidence for later review", "The workflow record can be prepared for governance, complaints oversight, conduct review, or internal assurance.")
    footer(pdf, 4)
    pdf.showPage()

    y = draw_header(pdf, "Financial Services Workflow Brief", "Questions likely teams ask early", 5, "Buyer FAQ", accent)
    faq_rows = [
        ["Question", "Answer"],
        ["Where does Corentis sit?", "Around an AI-enabled workflow rather than in place of the existing model or case-management system."],
        ["What does it log?", "Tests, approvals, overrides, exceptions, escalation triggers, and other review-relevant workflow events."],
        ["What does it export?", "Review-ready evidence packs including control mappings, workflow context, approval history, and monitoring snapshots."],
        ["How should teams start?", "With one workflow walkthrough, usually complaints triage or another review-heavy process where approval friction is already visible."],
    ]
    y = draw_table_block(pdf, 42, y, 511, faq_rows, [150, 361], "Operational questions")
    draw_card(pdf, 42, y - 24, 511, 120, "Closing invitation", "If this workflow fits, the next step is a targeted walkthrough.", "Corentis would be glad to continue with a focused discussion around one operational workflow, the policy checks around it, the review gates it needs, and the evidence your teams would want afterwards.")
    footer(pdf, 5)
    pdf.save()


def build_life_sciences_pack(pdf_path: Path) -> None:
    accent = Color(0.10, 0.48, 0.76, alpha=0.13)
    pdf = canvas.Canvas(str(pdf_path), pagesize=A4)
    draw_cover(
        pdf,
        "Life Sciences / Bounded Use Case Brief",
        "A careful operational brief for life sciences teams evaluating bounded AI workflow support.",
        "This pack is designed for operations, QA, governance, protocol review, and document-heavy review functions. It focuses on protocol-deviation triage as a bounded operational workflow and keeps the non-diagnostic, non-treatment positioning explicit throughout.",
        "Sector brief",
        "Non-diagnostic scope",
        accent,
        image_path=LIFE_IMAGE,
    )

    y = draw_header(pdf, "Life Sciences / Bounded Use Case Brief", "Why bounded operational support matters", 2, "Careful positioning", accent)
    draw_card(pdf, 42, y, 162, 176, "Adoption pressure", "$60bn-$110bn annual value potential.", "McKinsey estimates significant annual gen-AI value across pharma and medical products, making careful adoption a board-level topic.")
    draw_card(pdf, 216, y, 162, 176, "Operational burden", "57% of protocols had a substantial amendment.", "Tufts CSDD found substantial amendments were common, showing how much structured review and documentation work surrounds clinical operations.")
    draw_card(pdf, 390, y, 162, 176, "Cost pressure", "$141k-$535k median direct amendment cost.", "Tufts CSDD reported substantial amendment costs of $141k for Phase II and $535k for Phase III protocols.", highlight=True)
    y -= 202
    draw_card(pdf, 42, y, 511, 128, "What Corentis adds", "Controlled AI support without broad clinical claims.", "Corentis is shaped for bounded operational workflows where review, sign-off, traceability, and evidence matter. It does not claim diagnostic, treatment, or clinical-decision functionality. Sources: McKinsey; Tufts CSDD protocol amendment analysis.")
    footer(pdf, 2)
    pdf.showPage()

    y = draw_header(pdf, "Life Sciences / Bounded Use Case Brief", "Illustrative worked example: protocol-deviation triage", 3, "Bounded workflow", accent)
    draw_step_row(pdf, 42, y, 511, [
        ("Workflow trigger", "Deviation-related information is assembled and an AI-supported process helps structure or summarise the material."),
        ("Controls and oversight", "Corentis applies completeness checks, escalation conditions, and rules about who must review outputs before use."),
        ("Human sign-off", "Named reviewers approve, request changes, or escalate the workflow when it crosses a defined threshold."),
    ])
    y -= 170
    draw_card(pdf, 42, y, 245, 144, "Why this is useful", "Review work becomes easier to organise.", "The workflow can support triage and summarisation while preserving the distinction between assistance, sign-off, and regulated judgement.")
    draw_card(pdf, 308, y, 245, 144, "What remains afterwards", "A review-ready record", "Approval history, exceptions, supporting materials, and traceability metadata can be retained for QA or governance review.", highlight=True)
    footer(pdf, 3)
    pdf.showPage()

    y = draw_header(pdf, "Life Sciences / Bounded Use Case Brief", "In scope and out of scope", 4, "Signature page", accent)
    draw_card(pdf, 42, y, 245, 220, "What Corentis is", "A governance layer around bounded operational workflows.", "It is intended to add review discipline and evidence generation around document-heavy processes and protocol-related operations rather than replace scientific or clinical judgement.")
    draw_card(pdf, 308, y, 245, 220, "What Corentis is not", "Not a diagnostic, treatment, or clinical decision product.", "It is not a claim that sensitive workflows should run without human sign-off, and not a substitute for regulated judgement or medical review.", highlight=True)
    y -= 244
    draw_card(pdf, 42, y, 511, 118, "Why this boundary is reassuring", "The scope is intentionally operational.", "That careful positioning helps life sciences teams evaluate the product on realistic terms: bounded workflow support, visible oversight, and review-ready evidence in contexts where caution is appropriate.")
    footer(pdf, 4)
    pdf.showPage()

    y = draw_header(pdf, "Life Sciences / Bounded Use Case Brief", "What cautious adoption can look like", 5, "Operational confidence", accent)
    draw_card(pdf, 42, y, 162, 172, "Testing", "Checks before use", "Scenario checks, completeness review, and workflow logic can be attached before live use.")
    draw_card(pdf, 216, y, 162, 172, "Review", "Human sign-off remains visible", "Named reviewers stay central wherever the workflow requires judgement or escalation.", highlight=True)
    draw_card(pdf, 390, y, 162, 172, "Evidence", "Review-ready outputs", "Approval history, exceptions, and supporting materials can be exported for governance or QA review.")
    y -= 198
    draw_card(pdf, 42, y, 511, 132, "Closing invitation", "If this bounded approach feels relevant, the next step is a careful discussion.", "Corentis would be glad to continue with a scoped conversation around one operational workflow, the review structure around it, and the evidence a cautious life sciences team would want to inspect before moving further.")
    footer(pdf, 5)
    pdf.save()


def build_evidence_pack(pdf_path: Path) -> None:
    accent = Color(0.16, 0.46, 1, alpha=0.12)
    pdf = canvas.Canvas(str(pdf_path), pagesize=A4)
    draw_cover(
        pdf,
        "Sample Evidence Pack",
        "A prototype-style sample export showing how Corentis could package workflow controls, review history, and evidence for later scrutiny.",
        "This sample is deliberately labeled as illustrative. It is intended to show the kind of structured export Corentis is being built to produce, not to imply live customer deployment, production metrics, or finished enterprise maturity.",
        "Sample export",
        "Illustrative prototype output",
        accent,
    )

    y = draw_header(pdf, "Sample Evidence Pack", "Workflow console summary", 2, "Signature page", accent)
    draw_card(pdf, 42, y, 162, 152, "Workflow", "Complaints triage oversight export", "Illustrative review pack for an AI-assisted complaints workflow in a regulated operational environment.", value="Sample")
    draw_card(pdf, 216, y, 162, 152, "Owner", "Customer operations and conduct oversight", "The workflow owner is shown as a named operational function with escalation support from risk and review stakeholders.", value="Illustrative")
    draw_card(pdf, 390, y, 162, 152, "Pack status", "Ready for governance review", "Pack assembled after pre-deployment testing, review-gate activity, and runtime monitoring.", highlight=True)
    y -= 178
    draw_card(pdf, 42, y, 245, 152, "Export format", "PDF and JSON", "The pack is framed as a reviewable PDF with supporting structured export metadata.")
    draw_card(pdf, 308, y, 245, 152, "Record window", "14-day review window", "Illustrative monitoring and approval period covering one bounded workflow phase.")
    footer(pdf, 2)
    pdf.showPage()

    y = draw_header(pdf, "Sample Evidence Pack", "Workflow summary and operating context", 3, "Structured overview", accent)
    summary_rows = [
        ["Field", "Value"],
        ["Use case", "AI-assisted complaints triage in a regulated service workflow"],
        ["Primary owner", "Customer operations"],
        ["Oversight functions", "Conduct review, risk, complaints governance"],
        ["Decision posture", "Human approval required for escalated cases"],
        ["Pack purpose", "Illustrative sample export for governance and assurance review"],
    ]
    y = draw_table_block(pdf, 42, y, 511, summary_rows, [150, 361], "Workflow summary", "This page is designed to show how a serious export could open with context rather than raw event data.")
    draw_card(pdf, 42, y - 24, 511, 120, "Interpretation note", "The structure is intended to be review-ready at first glance.", "A governance or compliance reader should be able to see the workflow purpose, responsible function, oversight posture, and pack status without reconstructing context from later pages.")
    footer(pdf, 3)
    pdf.showPage()

    y = draw_header(pdf, "Sample Evidence Pack", "Control mapping and rule references", 4, "Mapped controls", accent)
    control_rows = [
        ["Control area", "Applied rule", "Why it matters"],
        ["Escalation", "Cases with vulnerable-customer indicators must route to a named reviewer.", "Sensitive cases require visible human review before progression."],
        ["Explanation", "Recommendation must include an explanation field before approval can be granted.", "Supports challenge, reviewability, and internal governance."],
        ["Override logging", "Manual override must capture reviewer, timestamp, and rationale.", "Maintains accountability and later evidence reuse."],
        ["Export readiness", "Workflow record must retain control references and event timestamps.", "Supports governance, audit-facing review, and assurance reuse."],
    ]
    draw_table_block(pdf, 42, y, 511, control_rows, [110, 190, 211], "Mapped controls", "Illustrative mapping for one workflow record.")
    footer(pdf, 4)
    pdf.showPage()

    y = draw_header(pdf, "Sample Evidence Pack", "Approval history and exception timeline", 5, "Review events", accent)
    approval_rows = [
        ["Timestamp", "Event", "Owner", "Result"],
        ["2026-04-10 09:12", "Workflow testing signed off", "Workflow owner", "Approved"],
        ["2026-04-11 11:48", "High-sensitivity case reviewed", "Named reviewer", "Override recorded"],
        ["2026-04-12 14:27", "Escalation threshold crossed", "Conduct review", "Escalated"],
        ["2026-04-12 16:03", "Final release for monitored use", "Workflow owner", "Approved"],
    ]
    y = draw_table_block(pdf, 42, y, 511, approval_rows, [108, 183, 110, 110], "Approval history")
    exception_rows = [
        ["Exception type", "Recorded handling"],
        ["Explanation field missing", "Workflow paused until reviewer supplied required rationale."],
        ["Vulnerable-customer indicator", "Case routed automatically to the escalation path."],
        ["Manual override", "Reason and approver retained in export metadata."],
    ]
    draw_table_block(pdf, 42, y - 24, 511, exception_rows, [175, 336], "Exception history")
    footer(pdf, 5)
    pdf.showPage()

    y = draw_header(pdf, "Sample Evidence Pack", "Test, runtime visibility, and metadata", 6, "Prototype output", accent)
    test_rows = [
        ["Scenario type", "Coverage", "Outcome"],
        ["Prompt variants", "12 checks", "No blocking failures. Explanation field remained mandatory in final export."],
        ["Edge cases", "8 checks", "Escalation path triggered correctly for high-risk wording."],
        ["Fallback behaviour", "6 checks", "Workflow paused as designed when policy conditions failed."],
        ["Reviewer routing", "4 checks", "Named approval gate surfaced correctly in the workflow record."],
    ]
    y = draw_table_block(pdf, 42, y, 511, test_rows, [120, 95, 296], "Illustrative test coverage")
    y -= 24
    draw_card(pdf, 42, y, 162, 160, "Monitoring window", "14-day sample period", "Illustrative view of overrides, alerts, and review activity during a bounded monitoring period.")
    draw_card(pdf, 216, y, 162, 160, "Alerts surfaced", "2 policy alerts", "Alerts are shown as sample event counts, not live operational metrics.")
    draw_card(pdf, 390, y, 162, 160, "Overrides", "1 recorded override", "Any manual change is retained with approver and rationale for later inspection.", highlight=True)
    y -= 186
    metadata_rows = [
        ["Field", "Value"],
        ["Pack status", "Illustrative prototype output"],
        ["Generated for", "Governance and assurance review"],
        ["Format", "PDF with supporting JSON export path"],
        ["Prepared by", "Corentis sample export system"],
        ["Export date", "2026-04-20"],
    ]
    y = draw_table_block(pdf, 42, y, 511, metadata_rows, [160, 351], "Export metadata", "Included to show the intended pack structure.")
    draw_card(pdf, 42, y - 24, 511, 118, "Closing invitation", "If this export shape is useful, the next step is a more specific evidence discussion.", "Corentis would be glad to continue with a conversation about oversight requirements, export design, approval history, and the evidence standards a serious reviewer would want to inspect in practice.")
    footer(pdf, 6)
    pdf.save()


def main() -> None:
    register_fonts()
    global STYLES
    STYLES = paragraph_styles()
    ensure_output()

    build_investor_pack(PACKS_DIR / "corentis-investor-overview.pdf")
    build_assurance_pack(PACKS_DIR / "corentis-assurance-governance-summary.pdf")
    build_financial_pack(PACKS_DIR / "corentis-financial-services-workflow-brief.pdf")
    build_life_sciences_pack(PACKS_DIR / "corentis-life-sciences-bounded-use-case-brief.pdf")
    build_evidence_pack(PACKS_DIR / "corentis-sample-evidence-pack.pdf")
    print("Generated Corentis PDF packs in public/packs/")


if __name__ == "__main__":
    main()
