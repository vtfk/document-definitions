# Standard brevmal

Standard brevmal for Vestfold og Telemark fylkeskommune

## Frontmatter attributter

```yaml
address:
  name: Navn Navnesen
  street: Adresseveien 58
  city: 0128 OSLO
info: # Hvis en verdi ikke blir sendt med, vises den ikke i lista, med mindre noe annet er spesifisert.
  sector: "[Sektor/ seksjonsnivå]" # Uthevet sektor-felt over informasjonen
  our-date: "[yyyy-mm-dd]" # ISO-formattert dato. Datoen blir formattert som den skal. Standard verdi om ingen er angitt: dagens dato
  your-date: "[yyyy-mm-dd]" # ISO-formattert dato. Blir formattert.
  our-reference: "[Vår referanse]" # Saks- og dokumentnummer
  your-reference: "[Deres referanse]"
  our-caseworker: "[Saksbehandler]"
  paragraph: "Offl. § 13 jf. fvl. §13 (1)" # Unntatt offentlighet-paragraf.
footer:
  postal-address: | # Postadresse. Bruk pipeline for å skrive flere linjer. Standardverdi:
    Postboks 2844
    2702 Skien
  visiting-address: | # Visitor address. Standardverdi:
    Torggata 18, Skien
    Svend Foyns gate 9, Tønsberg
  phone: 815 49 300 # Sentralbord. Standardverdi: 35 91 70 00
  email: e-postkort@vtfk.no # Epostadresse. Standardverdi: post@vtfk.no
  orgnr: 821 227 062 # Standardverdi: 821 227 062
  url: vtfk.no # Uthevet URL ved siden av sidetall. Standardverdi: vtfk.no
  page-numbers: true # Skal sidetall vises? Standardverdi er true.
```
