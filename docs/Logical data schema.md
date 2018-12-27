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



## Struktura

1. Mhta-frontend
   1. Wyświetla wszystko
   2. Ładuje sekcje, podsekcje i aplety (razem z ich komponentami) z mhta-medicalstructure
   3. Używa mhta-model do obsługi stanu
2. Mhta-medicalstructure
   1. Określa sekcje, podsekcje i definiuje aplety zdefiniowane na podstawie apletów generycznych
   2. Ładuje dane logiczne oraz wizualne komponenty apletów z mhta-applets
   3. Używa mhta-model do obsługi stanu
3. Mhta-applets
   1. Określa aplety generyczne, definiuje ich logikę oraz komponenty wizualne (kompilowane osobno)
   2. Kompiluje komponenty graficzne razem z logiką do modułu commonjs /src/mhta-applets.commonjs2.js
   3. Kompiluje logikę to /src/*.ts
4. Mhta-model
   1. Definiuje model danych używany przez pozostałe moduły