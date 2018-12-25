# Medical history taking app

## Encje:

- Pacjent
  - *Pacjent* ma badania lekarskie (różne daty)
- Badanie lekarskie
  - Przeprowadzone u *Pacjenta*
  - Ma *datę i czas zatwierdzenia*
  - Przynależą do niego rekordy, które są wyświetlane i generowane przez aplety, a przynależą do sekcji i podsekcji
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

