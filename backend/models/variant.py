class Variant:
    def __init__(self, chrom, pos, ref, alt, info):
        self.chrom = chrom
        self.pos = pos
        self.ref = ref
        self.alt = alt
        self.info = info

    def classify(self):
        if len(self.ref) == 1 and len(self.alt) == 1:
            return "SNV"
        else:
            return "Indel"
