# README.md

# 🧬 GeneVariantInsight

An interactive, full-stack bioinformatics application for analyzing and visualizing genetic variant data from VCF files. Built using FastAPI (backend) and React + Tailwind CSS (frontend), it applies object-oriented principles and integrates with external annotation APIs.

---

## 🚀 Features

- Upload and parse `.vcf` files
- Classify mutation types (SNV vs Indel)
- Visualize variant frequency by mutation type and gene
- Annotate variants using public APIs (ClinVar/Ensembl-ready)
- Clean architecture with reusable OOP models
- Modern, science-themed UI with responsive design

---

## 🧱 Tech Stack

| Layer        | Stack                             |
|--------------|------------------------------------|
| **Frontend** | React, Tailwind CSS, Recharts      |
| **Backend**  | FastAPI, Pysam, Python OOP         |
| **Data**     | VCF file format                    |
| **Dev Tools**| Axios, Vite, Docker (optional)     |

---

## 🗂️ Folder Structure

```
gene_variant_insight/
├── backend/        # FastAPI app and OOP models
├── frontend/       # React UI with science theme
├── data/           # Sample VCF files
├── README.md
└── docker-compose.yml (optional)
```

---

## 🧪 Sample VCF

`data/sample.vcf`:
```
##fileformat=VCFv4.2
##source=GeneVariantInsightSample
##INFO=<ID=GENE,Number=1,Type=String,Description="Gene name">
#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO
1       879317  .       G       A       .       PASS    GENE=TP53
2       476415  .       T       C       .       PASS    GENE=BRCA1
3       345676  .       A       AT      .       PASS    GENE=EGFR
1       234555  .       G       T       .       PASS    GENE=TP53
X       123456  .       C       CG      .       PASS    GENE=MYC
```

---

## ⚙️ Getting Started

### 📦 Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 💻 Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

Make sure FastAPI is running on `http://localhost:8000` and the frontend is configured to use that endpoint.

---

## 📸 Screenshots

### Upload and Process
![upload](./screenshots/upload.png)

### Mutation Type Chart
![chart](./screenshots/chart.png)

> You can generate screenshots after running the full app locally.

---

## 👨‍💻 OOP Design Principles
- `Variant` and `Gene` classes encapsulate bioinformatics logic
- Strategy pattern used for annotation
- Modular services for parsing and reporting
- Easy-to-extend architecture

---

## 📬 API Endpoint
```
POST /upload
Accepts: VCF file
Returns: JSON report with mutation summary and gene data
```

---

## 📜 License
MIT

---

## ✍️ Author
Khizer Mahmud – [github.com/KhizerMahmud](https://github.com/KhizerMahmud)


