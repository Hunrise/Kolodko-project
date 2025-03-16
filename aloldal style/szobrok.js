document.addEventListener("DOMContentLoaded", function () {
    const szoborSelect = document.getElementById("szoborSelect");
    const szoborKep = document.getElementById("szoborKep");
    const szoborLeiras = document.getElementById("szoborLeiras");
    
    const szobrok = {
        szobor1: {
            kep: "kepek/szob1.jpg",
            leiras: " Kolodko Mihály, az ungvári születésű szobrászművész, 2017 júniusában újabb miniszoborral gazdagította Budapest utcáit. A Muppet Show-ból ismert Brekit ábrázoló alkotás a Szabadság téren, a Hütte kávézóval szemben, a park egyik vaskerítésének tövében található. Elhelyezése nem véletlen: a szobor a Magyar Televízió egykori székháza közelében kapott helyet, utalva arra, hogy a népszerű bábműsor egykor innen került a magyar nézők otthonaiba. Az apró bronzszobor hamar a városlakók és turisták kedvencévé vált, azonban többször is megpróbálták eltulajdonítani. Kolodko Mihály ezért megerősítette a rögzítését, hogy Breki továbbra is mosolyt csalhasson az arra járók arcára. Ez a miniszobor is jól példázza Kolodko művészetének lényegét: apró alkotásaival nemcsak a város arculatát gazdagítja, hanem a közös kulturális emlékeket is feleleveníti, szoros kapcsolatot teremtve a helyszín és a mű mondanivalója között"
        },
        szobor2: {
            kep: "kepek/szob2.jpg",
            leiras: "Kolodko Mihály, az ungvári születésű szobrászművész, 2019 szeptemberében újabb miniszoborral gazdagította Budapest utcáit. A Holdjáró névre keresztelt alkotás a V. kerületi Hold utca és Aulich utca sarkán található, egy betongömb tetején elhelyezve. A bronzszobor egy integető asztronautát ábrázol, aki holdjárójával mintha éppen felfedezné a várost. Ez a mű több szempontból is különleges. Egyrészt személyes jelentőséggel bír az alkotó számára, hiszen Kolodko családjával először a Hold utcában talált otthonra, amikor Ukrajnából Magyarországra költöztek. Másrészt tisztelgés Pavlics Ferenc előtt, aki magyar származású mérnökként az Apollo-program keretében részt vett a holdjáró járművek tervezésében. Az általa kifejlesztett különleges kerekek lehetővé tették, hogy a járművek a Hold felszínén is üzemképesek maradjanak"
        },
        szobor3: {
            kep: "kepek/szob3.jpg",
            leiras: "Kolodko Mihály, az ismert gerillaszobrász, 2019 novemberében egy vörös csillagos usánkát ábrázoló miniszobrot helyezett el Budapesten, a Szabadság téren. Az alkotás a Szovjetunióra utaló szimbólumként került a tér északi oldalára, a Szabadság tér 15. számú épület kapujával szemben, a kerítés tetejére. Röviddel a szobor elhelyezése után egy országgyűlési képviselő baltával eltávolította azt, majd a Dunába dobta, mivel úgy vélte, hogy az usánka a diktatórikus rendszer szimbóluma. Válaszul Kolodko 2020 januárjában egy új miniszobrot helyezett el ugyanazon a helyen: egy díszpárnán nyugvó baltát. Ez az alkotás egyszerre utal az előző szobor megsemmisítésére és a művész szellemes reakciójára a történtekre."
        },
        szobor4: {
            kep: "kepek/szob4.jpg",
            leiras: "A Skála Kópé a 1980-as évek ikonikus magyar reklámfigurája volt, aki a Skála-Coop áruházlánc hirdetéseiben tűnt fel. A kedves, mosolygós karakter szívét a vásárlóknak ajánlotta, amit a híres szlogen is tükrözött: „Én vagyok a Skála Kópé, szívem a vásárlóké!” A reklámfilmek sikeréhez hozzájárult, hogy azokat a nyolcszoros cannes-i díjnyertes Sas István rendezte. 2022 áprilisában Kolodko Mihály szobrászművész új miniszobrot avatott Budapesten, amely a Skála Kópét ábrázolja. A szobor a Nyugati téren, az egykori Skála Metró áruház bejáratával szemben, egy virágágyás szélén helyezkedik el. A bronz miniatűr különlegessége, hogy a figura mellkasán kívül dobogó piros szív található, utalva a régi szlogenre."
        },
        szobor5: {
            kep: "kepek/szob5.jpg",
            leiras: "A Halott mókus egy apró szobor, amely Kolodko Mihály ukrán-magyar szobrászművész munkája, és Budapest belvárosában található. A szobor egy mókust ábrázol, aki a földön fekve, kezében pisztolyt tart, ezzel a mű a művész ironikus, szarkasztikus stílusát tükrözi. Az alkotás egy rejtélyes, akár bűntényt is sugalló történetet sejtet, amelyben a mókus halálát öngyilkosságként tálalják. A szobor egy városi gerillaművészeti projekt része, és az apró műalkotások sorába illeszkedik, amelyek Budapestre jellemzőek."
        },
        szobor6: {
            kep: "kepek/szob6.jpg",
            leiras: "A usánka szobor Kolodko Mihály gerillaművészeti alkotása, amely egy politikai és társadalmi kommentárt képvisel. Az első verziója 2019 novemberében a Szabadság téren kapott helyet, és egy fiatal férfit ábrázolt, aki usánkát visel, miközben ironikus módon a politikai tájat kritizálja. Az alkotást a Mi Hazánk képviselője, dr. Fülöp Erik letépte és a Dunába dobta. Kolodko a szobor újbóli kihelyezésével válaszolt, ezzel erősítve a művészeti kommentárt és a szabadság melletti állásfoglalását."
        },
        szobor7: {
            kep: "kepek/szob7.jpg",
            leiras: "Kolodko Mihály, a neves gerillaszobrász, 2020 novemberében újabb miniszobrot helyezett el Budapesten. A Harmincad utca 6. szám alatti épületre, az egykori Brit Nagykövetség falára került Mr. Bean mackója, a híres brit komikus, Rowan Atkinson által megformált karakter ikonikus plüssállata. Ez a szobor tisztelgés a brit kultúra előtt, és emléket állít a brit diplomáciai képviseletnek, amely 70 éven át működött ezen a helyszínen. A miniszobor elhelyezése nemcsak a brit kultúra előtt tiszteleg, hanem a brit diplomáciai képviselet előtt is, amely 70 éven át működött ezen a helyszínen. A szobor a brit nagykövetség épületére került, amely a Harmincad utca 6. szám alatt található."
        },
        szobor8: {
            kep: "kepek/szob8.jpg",
            leiras: " Kolodko Mihály, a neves gerillaszobrász, 2014-ben elhelyezte a Búvár és a kulcs miniszobrot a Dohány utca 53. szám alatt, a New York Kávéház közelében. A kis bronzszobor egy tűzcsap tetején ülő búvárt ábrázol, aki a mellette lévő kulcsot őrzi. Ez a kulcs a legenda szerint a New York Kávéház nyitásához szükséges, és a szobor a kávéház történetéhez kapcsolódik. A történet szerint Molnár Ferenc, a híres író, a kávéház 1894-es megnyitásakor a kulcsot a Dunába dobta, hogy a kávéház mindig nyitva álljon a vendégek előtt. A szobor ezt a hagyományt idézi meg, és tiszteleg a New York Kávéház előtt, amely Budapest egyik legismertebb kávéháza."
        }
    };
    
    szoborSelect.addEventListener("change", function () {
        const selectedSzobor = szoborSelect.value;
        if (szobrok[selectedSzobor]) {
            szoborKep.src = szobrok[selectedSzobor].kep;
            szoborLeiras.textContent = szobrok[selectedSzobor].leiras;
            szoborKep.classList.remove("d-none");
        } else {
            szoborKep.classList.add("d-none");
            szoborLeiras.textContent = "";
        }
    });
});
