import pysam
from models.variant import Variant

def parse_vcf(file_path):
    vcf = pysam.VariantFile(file_path)
    variants = []
    for record in vcf.fetch():
        variant = Variant(
            chrom=record.chrom,
            pos=record.pos,
            ref=record.ref,
            alt=record.alts[0],
            info=dict(record.info)
        )
        variants.append(variant)
    return variants
