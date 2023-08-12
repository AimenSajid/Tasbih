import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
/*const duas = [
    {
        'name':'DUROOD-E-IBRAHIMI',
        'value':'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ ❁ اللَّهُمَّ بَارِكَ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ'
    },
    {
        'name':'SUBHANALLAH',
        'value':'سُبْحَانَ ٱللَّٰهِ'
    },
    {
        'name':'DUROOD-E-TUNAJJINA',
        'value':'اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ❁وَتَقْضِى لَنَا بِهَا جَمِيعَ الْحَاجَاتِ❁وَتُطَهِّرُنَا بِهَا مِنْ جَمِيعِ السَّيِّئَاتِ❁ وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ ❁ وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ ❁ مِنْ جَمِيعِ الْخَيْرَاتِ ❁ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ'
    },
    {
        'name':'ALHAMDULILLAH',
        'value':'ٱلْحَمْدُ لِلَّٰهِ'
    },
    {
        'name':'ALLAHU AKBAR',
        'value':'اللّٰهُ أَكْبَر'
    },
    {
        'name':'KALMA TAYYAB',
        'value':'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ'
    },
    {
        'name':'SURAH IKHLAAS',
        'value':'قُلۡ هُوَ ٱللَّهُ أَحَدٌ❁ٱللَّهُ ٱلصَّمَدُ❁لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ❁وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ'
    },
    {
        'name':'ASTAGHFIRUALLAH',
        'value':'أستغفر الله '
     },
    {
        'name':'RABBI ZIDDNI ILMA',
        'value':'ربِّ زِدْنِي عِلْماً'
    },
]*/
const appSettings = {
    databaseURL: "https://digital-tasbih-78295-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)

const database =getDatabase(app)

const duasDB = ref(database, "duas")

export{duasDB, database}