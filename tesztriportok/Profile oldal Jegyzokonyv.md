# Jegyzőkönyv-`Menüpontok`

Az alábbi tesztdokumentum az `Étel` projekthez tartozó `Profil` oldalhoz készült.
2021.11.28-as jegyzőkönyv alapján a Profil oldal hibásan működik, ezt ma javíttam, ebben a dokumentumban tesztelem működését.

## 1. Teszteljárások (TP)


### 1.1. Profil oldal tesztelése kijelentkezve
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Partner éttermeink oldal tesztelése kijelentkezve
    0. lépés: Nyissuk meg a weboldalt
    1. lépés: Írjuk be url-be, hogy : http://localhost:3000/profile
    2. lépés: Ellenőrizzük, hogy az oldalon vagyunk-e. Elvárt kimenet: Kérlek jelentkezz be üzenetet kapjuk 

### 1.2. Profil oldal tesztelése bejelentkezve
- Azonosító: TP-06
- Tesztesetek: TC-01
- Leírás: Partner éttermeink oldal tesztelése bejelentkezve
    0. lépés: Nyissuk meg a weboldalt, jelentkezzünk be
    1. lépés: Írjuk be url-be, hogy : http://localhost:3000/profile
    2. lépés: Ellenőrizzük, hogy az oldalon vagyunk-e. Elvárt kimenet:  http://localhost:3000/profile oldalon vagyunk



## 2. Teszesetek (TC)

### 2.1. Profil oldal tesztelése kijelentkezve

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Profil oldal tesztelése kijelentkezve
- Művelet: írjuk be az URL keresőbe, hogy http://localhost:3000/profile
- Elvárt kimenet: Kérlek jelentkezz be üzenetet kapjuk 

### 2.2. Profil oldal tesztelése bejelentkezve

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Profil oldal tesztelése bejelentkezve
- Művelet: Jelentkezzünk be, majd írjuk be az URL keresőbe, hogy http://localhost:3000/profile
- Elvárt kimenet: http://localhost:3000/profile oldalon találjuk magunkat



## 3. Tesztriportok (TR)


### 3.1. Partner éttermeink oldal tesztesetei kijelentkezve

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Url címnek beírtam, http://localhost:3000/profile
    2. lépés: Helyes működést tapasztaltam

### 3.2. Partner éttermeink oldal tesztesetei bejelentkezve

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Bejelentkeztem
    2. lépés: Url címnek beírtam, hogy http://localhost:3000/profile
    3. lépés: Helyes működést tapasztaltam








    