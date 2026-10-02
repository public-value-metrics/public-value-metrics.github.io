# Sozialkapitalkennzahlen

Sozialkapitalkennzahlen quantifizieren die Netzwerke, das Vertrauen und die zivilgesellschaftliche
Teilhabe, die Gemeinschaften und Institutionen erlauben, effizient zu funktionieren — das
"Bindegewebe", das auf keiner Bilanz eine Zeile hat, aber Kosten und Reibung sichtbar senkt, wenn es
vorhanden ist, und sichtbar erhöht, wenn es fehlt. Die moderne Rahmung stammt von Robert Putnams
"Bowling Alone" (2000), das bindendes Kapital (Bindungen innerhalb einer ähnlichen Gruppe) von
überbrückendem Kapital (Bindungen über verschiedene Gruppen hinweg) unterschied; das britische
Office for National Statistics hat seither ein ständiges Indikatorenset aufgebaut, um es national
zu verfolgen.

## Warum das wichtig ist

Putnams zentrale empirische Behauptung — dokumentiert durch rückläufige Mitgliedschaft in
US-Bürgervereinigungen, Kirchgang und Gewerkschaftsbeteiligung im späten 20. Jahrhundert — war, dass
Sozialkapital Ergebnisse vorhersagt, mit denen sich die konventionelle Ökonomie schwertut: weniger
Kriminalität, besseres Kinderwohlergehen, wirksamere Kommunalverwaltung, schnellere wirtschaftliche
Erholung nach Schocks. Bindendes Kapital (starke Bindungen innerhalb einer eng verbundenen Gruppe)
ist gut für gegenseitige Unterstützung, kann aber zu Abschottung erstarren; überbrückendes Kapital
(schwächere Bindungen über verschiedene Gruppen hinweg) ist das, was typischerweise mit Zugang zu
Chancen, Informationsfluss und institutionellem Vertrauen korreliert. Das ONS nahm dies ernst genug,
um ein nationales Indikatorrahmenwerk zu bauen — seine Reihe "Social Capital in the UK"
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
verfolgt vier Säulen: persönliche Beziehungen, soziale Netzwerkunterstützung, zivilgesellschaftliches
Engagement sowie Vertrauen und kooperative Normen, jede aufgebaut aus etablierten Erhebungsfragen
(Community Life Survey, Understanding Society). Für digitale Dienste des öffentlichen Sektors ist
Sozialkapital doppelt relevant: Es ist sowohl ein Ergebnis, das manche Programme aufzubauen
versuchen (Finanzierung von Gemeinschaftsresilienz, soziale Verschreibung), als auch ein
Eingabewert, der bestimmt, wie gut ein Dienst tatsächlich angenommen wird — ein Dienst, der in eine
vertrauensstarke, gut vernetzte Gemeinschaft eingeführt wird, verbreitet sich durch Mundpropaganda
auf eine Weise, wie es ein identischer Dienst in einem vertrauensarmen Gebiet nicht tut.

## Die Berechnung

```
Vier-Säulen-Rahmenwerk des ONS (Indikatoren, illustrativ):

Persönliche Beziehungen:        % mit jemandem, auf den sie sich in
                                  einer Krise verlassen können
Soziale Netzwerkunterstützung:  % die sich bei Bedarf Geld von
                                  Freunden/Familie leihen könnten
Zivilgesellschaftliches
  Engagement:                    % die sich in den letzten 12 Monaten
                                  ehrenamtlich engagiert oder
                                  zivilgesellschaftlich gehandelt haben
Vertrauen und kooperative
  Normen:                        % die zustimmen "den meisten
                                  Menschen kann man vertrauen"

Es wird kein einzelner ONS-Gesamtwert veröffentlicht — die Säulen
werden absichtlich getrennt berichtet, weil eine Aggregation zu einem
Index verbergen würde, welche spezifische Säule schwach ist.

Putnams Aufteilung bindend/überbrückend (Rahmenwerk, keine Formel):
  bindendes Kapital ≈ Dichte der Bindungen innerhalb einer homogenen
                       Gruppe
  überbrückendes Kapital ≈ Häufigkeit/Stärke der Bindungen über
                       verschiedene Gruppen hinweg
```

## Beispielrechnung

**Sozialkapital-Momentaufnahme einer Nachbarschaft**: Eine Community-Life-Survey-artige Befragung
eines lokalen Gebiets findet, dass 78 % jemanden haben, auf den sie sich in einer Krise verlassen
können (persönliche Beziehungen), 61 % sich bei Bedarf Geld leihen könnten (Netzwerkunterstützung),
24 % sich im vergangenen Jahr ehrenamtlich engagierten (zivilgesellschaftliches Engagement) und
41 % zustimmen "den meisten Menschen kann man vertrauen" (Vertrauen und Normen) — gegenüber
nationalen Durchschnittswerten von etwa 85 %, 70 %, 30 % bzw. 45 % (illustrativ, gegen das aktuelle
ONS-Bulletin kalibrieren). Das Gebiet liegt bei jeder Säule unter dem Index, am schärfsten jedoch
bei Vertrauen (41 % vs. 45 % national, eine Lücke von 4 Punkten) und zivilgesellschaftlichem
Engagement (24 % vs. 30 %, eine Lücke von 6 Punkten) — was zivilgesellschaftliches Engagement, nicht
Vertrauen, als das größte relative Defizit kennzeichnet, das gezielte Investition wert ist (etwa ein
Gemeinschaftszuschussprogramm), statt einer generischen "Vertrauen aufbauen"-Initiative.

**Bindend vs. überbrückend, Servicedesign**: Ein Beschäftigungsprogramm in einer eng verbundenen
Gemeinschaft findet, dass sich Überweisungen innerhalb der Gemeinschaft schnell verbreiten (hohes
bindendes Kapital: die Nachricht verbreitet sich binnen Tagen), aber das Programm hat Schwierigkeiten,
Anwohnende außerhalb dieses Netzwerks zu erreichen (niedriges überbrückendes Kapital: die Nutzung
außerhalb der Kerngemeinschaft ist nach Monaten nahe null). Die implizierte Lösung ist nicht "mehr
Marketing", sondern gezielt überbrückende Bindungen aufzubauen — Partnerschaften mit Organisationen
*außerhalb* des bestehenden Netzwerks, da bindendes Kapital allein ein Problem des überbrückenden
Kapitals nicht lösen kann.

## Bezug zur Softwareentwicklung

- Digitale Plattformen, die gegenseitige Hilfe, Ehrenamt oder Gemeinschaftszuschüsse vermitteln
  (ein "lokaler Verbinder"-Dienst etwa), bauen buchstäblich Infrastruktur für überbrückendes
  Kapital; ihre Erfolgskennzahl sollte die Netzwerkvielfalt geknüpfter Verbindungen sein, nicht
  nur die Transaktionszahl — siehe [Government as a Platform](../government-as-a-platform/) für
  das breitere Muster von Infrastruktur, auf der andere Wert aufbauen.
- Wo die Theorie des Wandels eines Programms ausdrücklich Sozialkapital als Ergebnis anvisiert (ein
  Gemeinschaftsresilienz-Fonds, ein Dienst zur sozialen Verschreibung), sollten seine
  [Theorie des Wandels](../theory-of-change/) und sein [Wirkungsmodell](../logic-model/) die
  spezifische Säule benennen (Vertrauen, zivilgesellschaftliches Engagement, Netzwerkunterstützung),
  die sie zu bewegen erwarten, statt eines undifferenzierten "Gemeinschaft aufbauen"-Ergebnisses,
  das sich nicht gegen die ONS-Basislinie messen lässt.
- Sozialkapitalindikatoren sind eine nützliche Fairnesslinse neben dem [Index der Mehrfachbenachteiligung](../index-of-multiple-deprivation/):
  Ein Gebiet kann einkommensbenachteiligt, aber sozial reich sein, oder umgekehrt, und beides weist
  auf sehr unterschiedliche Interventionen hin.

## Fallstricke

- **Die vier ONS-Säulen zu einem Gesamtwert verdichten** — das ONS tut dies absichtlich nicht;
  eine einzelne Zahl verbirgt, welche spezifische Säule eine niedrige Ablesung antreibt, und
  Mittelung verdeckt eine Gemeinschaft, die vertrauensstark, aber zivilgesellschaftlich
  unengagiert ist, gegenüber einer, die das Gegenteil ist.
- **Annehmen, Sozialkapital sei immer gut** — dichtes bindendes Kapital in einer abgeschotteten
  Gruppe kann sich aktiv gegen externe Institutionen (einschließlich staatlicher Dienste) sperren;
  Putnams eigene Analyse behandelt Bindung und Überbrückung als unterschiedliche Güter mit
  unterschiedlichen, manchmal widerstreitenden Effekten.
- **Erhebungsbasierte Sozialkapitalmaße als Echtzeit-Betriebskennzahl verwenden** — die zugrunde
  liegenden Erhebungen (Community Life Survey, Understanding Society) laufen jährlich oder
  seltener; behandeln Sie Sozialkapitaldaten als langsam sich verändernden Kontextindikator, nicht
  als etwas, das ein Dienst-Dashboard wöchentlich aktualisieren kann.

## Quellen

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
