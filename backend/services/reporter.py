from collections import defaultdict
from models.gene import Gene


def generate_report(variants):
    gene_dict = defaultdict(lambda: Gene("Unknown"))
    for variant in variants:
        gene_name = variant.info.get("GENE", "Unknown")
        if gene_name not in gene_dict:
            gene_dict[gene_name] = Gene(gene_name)
        gene_dict[gene_name].add_variant(variant)

    gene_summary = [
        {
            "gene": gene.name,
            "variant_count": gene.variant_count()
        } for gene in gene_dict.values()
    ]

    mutation_types = defaultdict(int)
    for variant in variants:
        mutation_types[variant.classify()] += 1

    return {
        "mutation_types": mutation_types,
        "gene_summary": gene_summary
    }
