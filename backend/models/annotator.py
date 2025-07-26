from fastapi import APIRouter, UploadFile, File
import shutil
import os
from services.parser import parse_vcf
from services.reporter import generate_report

router = APIRouter()

@router.post("/upload")
async def upload_vcf(file: UploadFile = File(...)):
    temp_path = f"temp_{file.filename}"
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    variants = parse_vcf(temp_path)
    report = generate_report(variants)

    os.remove(temp_path)
    return report
