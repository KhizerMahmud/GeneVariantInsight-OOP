class Gene:
    def __init__(self, name):
        self.name = name
        self.variants = []

    def add_variant(self, variant):
        self.variants.append(variant)

    def variant_count(self):
        return len(self.variants)
