# Medical history taking app

## Encje:

- Pacjent
  - *Pacjent* ma badania lekarskie (różne daty)
- Badanie lekarskie
  - Przeprowadzone u *Pacjenta*
  - Ma *datę i czas zatwierdzenia*
  - Jest przeprowadzone wg *schematu badania*, co oznacza, że ma statycznie zdefiniowane (wg schematu) *sekcje*, które mają *podsekcje*, które mają *aplety*, które produkują *rekordy*
- Schemat badania
  - Zawiera ściśle zdefiniowane *sekcje* z wybranymi *podsekcjami* (a nawet wybranimi *apletami*)
  - Możliwy jest "schemat niestandardowy", który umożliwia wybieranie *sekcji* i ich *podsekcji* z listy
- Sekcja z podsekcjami
  - Ma zdefiniowane ściśle *podsekcje*, które nie są odrębnymi jednostkami, tylko logicznym uporządkowaniem apletów
  - Ma statycznie zdefiniowane *podsekcje* z *apletami*
- Aplet
  - Należy do *sekcji* w obrębie *podsekcji*
  - Wyświetla kontrolki na podstawie których generuje *rekord*
  - Aplety są generyczne (parametryzowane) i sekcje mogą posiadać aplety o własnym *typie* i określonych parametrach
- Rekord
  - Reprezentuje dane generowane przez jeden *aplet*
  - Przynależy do określonego *badania lekarskiego*
  - (nie ma zdefiniowanej przynależności do sekcji, bo to jest określone statycznie w sekcjach)

