
/**
 * Generates an array of dummy song objects for generic albums.
 * This function is used for years where custom song data is not provided.
 * @param {string} albumId - The ID of the album.
 * @param {string} titlePrefix - A prefix for the song titles.
 * @param {number} numSongs - The number of songs to generate.
 * @returns {Array<object>} An array of song objects with placeholder URLs.
 */
function generateSongs(albumId, titlePrefix, numSongs = 5) {
    const songs = [];
    // This is the placeholder URL for songs in GENERIC movie years (e.g., 2022 and below).
    // REPLACE WITH YOUR ACTUAL CLOUDINARY AUDIO URLS FOR GENERIC SONGS
    const genericSongUrl = "https://res.cloudinary.com/ruthwik/video/upload/v1753617289/Nuvvunte_Chaley_iknwxj.mp3";

    for (let i = 1; i <= numSongs; i++) {
        songs.push({
            id: `${albumId}-song${i}`,
            title: `${titlePrefix} (Song ${i})`,
            artist: `Generic Artist ${Math.floor(Math.random() * 5) + 1}`,
            duration: `3:${Math.floor(Math.random() * 50) + 10}`,
            url: genericSongUrl
        });
    }
    return songs;
}
// --- CUSTOM MOVIE DATA FOR SPECIFIC YEARS (2025, 2024, 2023) ---
const customYearAlbumsData = {

    2025: [

        {
            "id": "movie-2025-OG",
            "title": "OG",
            "actors": "Pawan Kalyan, Priyanka Mohan",
            "year": 2025,
            "imageUrl": "https://res.cloudinary.com/ruthwik/image/upload/v1754333862/OG_xqehr0.jpg",
            "songs": [
                {
                    "id": "2025-OG-song1",
                    "title": "Fire Storm",
                    "artist": "Simbu, SS Thaman, Deepak Blue",
                    "duration": "4:06",
                    "url": "https://res.cloudinary.com/ruthwik/video/upload/v1754333498/Fire_Storm_t4zfnx.mp3",
                    "lyrics": `Class In the fire
There will come a leader
OJAS Gambheera

Hold your breath and fear
Dragons coming near
OJAS Gambheera

alalika kadalaka bhayapadele
kshanakshanamoka thala thegi padele
pralayamu edurugaa nilabadele
meti dhaatiki lokam hadale
ranamuna yamudika kanapadele
durusugaa nuvvu charachaku thodale
padunugaa thega virigenu medale
rakkasi daarula rudhiram porale..

Fire its coming
Feel the fire its burning
Can you take it higher higher
Storm is coming
Heat it up
ye OJAS Gambheera hain

paga ragilina fire-u
kalabadithe gundelo fear-u
paga ragilina fire-u
modaledithe migalare evaru
paga ragilina fire-u
kasi pudithe shatruve shiver-u
paga ragilina fire-u
thanu nippu kalla puli pogaru

he pattukocche vichchukatthi
mattubette muttadinchi
puttenanta praana bheethi
bhayame bhayapade..
netthuroudi vetu kotha
kattubaatu leni veta
pattubatti kottedanta
marana tharuname..

he pattukocche vichchukatthi
mattubette muttadinchi
puttenanta praana bheethi
bhayame bhayapade..
netthuroudi vetu kotha
kattubaatu leni veta
pattubatti kottedanta
marana tharuname..

Darega sono hai kare
Wa miraida
Kare wa tensai wan
Tacchi haida
Kare wa tomera renai makenai
Yakuza no shi
Daare samurai
Darega sono hai kare
Wa miraida
Kare wa tensai wan
Tacchi haida
Kare wa tomera renai makenai
Yakuza no shi
Daare samurai

Rappa baba bappara
Rappa bayya
Rappa baba bappara
Rappa bai
Rappa baba bappara
Pappa bayya
Rappa bappa
Rappa baba bayyaaa
Rappa baba bappara
Rappa bayya
Rappa baba bappara
Rappa bai
Rappa baba bappara
Pappa bayya
Rappa bappa
Rappa baba bayyaaa

Fire fire no liar liar
Rise like the sun
Over his empire
Fire fire no liar liar
Breathe like a dragon
only spit the hell fire
If you cross him
You better pray
You are going down in flames
Enemies better watch what they say
You know his name
You know his name

he pattukocche vichchukatthi
puttenanta praana bheethi
he pattukocche vichchukatthi
mattubette muttadinchi
puttenanta praana bheethi
bhayame bhayapade..
netthuroudi vetu kotha
kattubaatu leni veta
OG OG OG
You better remember the name
paga ragilina fire-u…
paga ragilina fire-u…
Rappa baba bappara
Rappa bayya
paga ragilina fire-u
kalabadithe gundelo fear-u
paga ragilina fire-u
modaledithe migalare evaru
paga ragilina fire-u
kasi pudithe shatruve shiver-u
paga ragilina fire-u
thanu nippu kalla puli pogaru
OJAS Gambheera`
                },
                {
                    "id": "2025-OG-song2",
                    "title": "Hungry Cheetah",
                    "artist": "Thaman S",
                    "duration": "0:39",
                    "url": "https://res.cloudinary.com/ruthwik/video/upload/v1754333469/Hungry_Cheetah_vqotsr.mp3",
                }
            ]
        },

        // Mirai
        {
            id: 'movie-2025-Mirai',
            title: "Mirai",
            actors: "Teja Sajja, Ritika Nayak",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753623010/Mirai_taqimy.jpg",
            songs: [
                {
                    id: "2025-Mirai-song1",
                    title: "Vibe Undi",
                    artist: "Armaan Malik",
                    duration: "3:33",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/Vibe_Undi_ibj6bi.mp3",
                    lyrics: `O pori dildaaru vayyarive
Nee choopu talvaarutho koyyake
God emo neeku naaku raasuntade
Mana jodi okataite mad untade

Vibe undi baby
Vibe undi le
Ee globe nupe vibe undile
Vibe undi baby
Vibe undi le
Ee globe naape vibe undile

Vere planetta
Intha andam yetta
Naaketta paddavule

Kallo duetta
Sweety chakkletta
Naa fate maarindile

Steppulu vesinde
Dinak dina Kothaga naa gunde
Dappulu kottinde
Dinaku dina
Pakkana nuvvunte

Nee peru tattoo la raayinchanaa?
Mana pair-e hit pair-e cheseyanaa?

Vibe undi baby.. Vibe undi baby

Vibe undi baby
Vibe undi le
Ee globe nupe vibe undile
Vibe undi baby
Vibe undi le
Ee globe naape vibe undile`
                },
            ]
        },

        // Andhra King Taluka
        {
            id: 'movie-2025-AndhraKingTaluka',
            title: "Andhra King Taluka",
            actors: "Ram Pothineni, Bhagyashri",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621991/Andhra_King_Thaluka_tir6cr.jpg",
            songs: [
                {
                    id: "2025-AndhraKingTaluka-song1",
                    title: "Nuvvunte Chaley",
                    artist: "Ram Pothineni, Vivek-Mervin, Anirudh Ravichander",
                    duration: "4:06",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1753617289/Nuvvunte_Chaley_iknwxj.mp3",
                    lyrics: `Oka chooputo naalone puttinde…
Edo vintagaa gundelo cheerinde…
Nuvvevaro naalo ani adigaane…
Taanegaa premani thelipinde…

Parichayam ledaani adigaa premante..
Kalisangaa ikapai manamegaa ande
Vethikina dorakani artham premade
Adi neekento oka maatalo cheppaale..

Nuvvunte Chaley…

Nuvvunte Chaley…
Nuvvunte Chaley…

Maatalatho cheppamante cheppalene
Bhaavamedo bhaashalake andanande
Ademito kudurugaa undalene nuvvunte..
Adigithe ademito ardhamkaade
Ninna monna naalo unnaa neene kaade
Puttindante neetho pone podhe premanthe..

Daareleni oorine adigaanugaa
Nuvvegaa daarini naaku chooputhundi
Kammukunna mabbulo vethikaanugaa
Are gaali vaanai nannu taakuthundi

Naake teliyani naalo yuddhamaa.. lolona sandhramaa..
Lede ponguthunnade inkedoo…
Peru ledhugaa inthe maata raadhugaa
Anthe oppukomari vinthele…

Nuvvunte Chaley…

Maatalatho cheppamante cheppalene
Bhaavamedo bhaashalake andanande
Ademito kudurugaa undalene nuvvunte..
Adigithe ademito ardhamkaade
Ninna monna naalo unnaa neene kaade
Puttindante neetho pone podhe premanthe..

Oo.. Oo.. Oo.. Oo.. (Nuvvunte Chaley)…
Oo.. Oo.. Oo.. Oo.. (Nuvvunte Chaley)…

Nuvvunte Chaley…`
                },
            ]
        },

        // Coolie
        {
            id: 'movie-2025-Coolie',
            title: "Coolie",
            actors: "Rajinikanth, Nagarjuna, Shruti Haasan",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619908/Coolie_ds8hd8_bh4zm4.jpg",
            songs: [
                {
                    id: "2025-Coolie-song1",
                    title: "Monica",
                    artist: "Subhalakshini, Anirudh Ravichander",
                    duration: "3:08",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1752472686/Monica_la5qy8.mp3",
                    lyrics: `Monica Bellucci egire vachindi
Kadale kadam tokke sunamiye techindi
Monica Bellucci taggadee energy
Adire andaalunna thufaanu le ammaadee

Takkuna choosindo high pulse body
Hoyale chepalake nerpinchule
Kalake kalarese jilebi lady
Salt touch chesthe sweet avvune

Monica…
My dear Monica
Love you Monica
Babymma Monica
Kichchu kichchu maa
Chikku chikka maa
Monica
Love you Monica
Babymma Monica
Kichchu kichchu maa
Chikku chikka maa

Hey jum jum jum.. taaku
Jummada jumma jum.. taaku
Jum jum jum.. taaku
Jummada jumma jum.. taaku
Laka laka laka laka laka laka laka
Jum jum jum.. taaku
Jummada jumma jum
Vachchi aaduko

Najarana pattukova nayagaram vethakava
Nanu neeve hattukora hattukora
Oka maatu kalavava
Matthu ekki tiragava
Paruvaale pattuveera pattuveera

Poye time vasthe edchi aravadde
Pooja aatallo innocent kaane vaddu
Sagame kokunte nijamu maatodde
Paduchu kaalamlo decency lene ledoy

Moone eruppeeke andaala raani
Manasu paipaine padabaakila
Inume cherukayye boppaayi laari
Bhasha cheyi padithe maarenila

Monica…
My dear Monica
Love you Monica
Babymma Monica
Kichchu kichchu maa
Chikku chikka maa
Monica
Love you Monica
Babymma Monica
Kichchu kichchu maa
Chikku chikka maa

Hey jummudu jummudu jum.. taaku
Jumma jumma jumma jum.. taaku
Jummudu jummudu jum.. taaku
Jumma jumma jumma jum.. taaku
Hey jumma jumma jumma jumma
Jumma jumma jumma jumma..
Jummudu jummudu jum.. taaku
Vachchi aadukora

Jum jum jum
Ikkadiki ra Monica

Monica… My dear
Laka laka laka laka laka laka laka
Jummudu jummudu jum.. taaku

Monica… My dear
Laka laka laka laka laka laka laka
Jumma jumma jumma jum.. taaku` },
                {
                    id: "2025-Coolie-song2",
                    title: "Chikitu",
                    artist: "T Rajhendher, Anirudh Ravichander, Anirvu",
                    duration: "4:41",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1753291780/Chikitu_lzukwb.mp3",
                    lyrics: `Hey! Poraa Rey
Sound danchu
Devaa aataade
Hey! Vinraarey
Enti doubtu
Medadu tinamaake

Hey! Evvannainaa kanukko
Hey! Jillalanni naavipo
Hey! Thammee koncham thattukko
Coolie vaalaa telusuko

Morige noru jadisi nakkale
Manaki baasu manamele
Enemy dosthu evvado iddharlo
Vaduluthaamaa.. Shirte madatheddhaamaa!

Hey! Poraa Rey
Sound danchu
Devaa aataade

Hey chikit, chikit, chikit-chik
Chikit, chikit, chikit-chak
Chikit-chik, chikit-chak
Chikit, chikit, chikit vibe

Chikit, chikit, chikit-chik
Chikit, chikit, chikit-chak
Chikit-chik, chikit-chak
Chikit, chikit, chikit vibe

Oddaddu naatho saradaalu
Paadetti chestha thiranaalu
Simhaala veta.. naa hobby beta
Ne pette rules vinukoraa
Nuvvattaa follow ayyipo raa
Pettaali saangoo
Katteyi baangoo

Hey hey! Evvannainaa kanukko
Hey! Jillalanni naavipo
Hey! Thammee koncham thattukko
Coolie vaalaa telusuko

Morige noru jadisi nakkale
Manaki baasu manamele
Enemy dosthu evvado iddharlo
Vaduluthaamaa.. Shirte madatheddhaamaa!

Hey! Poraa Rey
Sound danchu
Devaa aataade

Hey chikit, chikit, chikit-chik
Chikit, chikit, chikit-chak
Chikit-chik, chikit-chak
Chikit, chikit, chikit vibe

Chikit, chikit, chikit-chik
Chikit, chikit, chikit-chak
Chikit-chik, chikit-chak
Chikit, chikit, chikit vibe

Shirte madatheddhaamaa!
Poraa….`
                },
                {
                    id: "2025-Coolie-song3",
                    title: "Power House",
                    artist: "Anirudh Ravichander",
                    duration: "3:24",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1753291798/Power_House_ozmxvd.mp3",
                    lyrics: `Young Man, Young Man, Young Man
Forever Man
Young Man, Young Man, Young Man
Forever Man
Young Man, Young Man, Young Man
Forever Man
Young Man, Young Man
Young!

Arangam Athiratumae
Whistle’U Parakatumae Now
Karangal Osaratumae
Take Over Ottumothamae Now

Kolantha Siripula Face Than
Imaya Mala Pola Mass Than
Manasa Parikira Craze Than
Genz Unna Pathi Pesutham

Coo Coo Coolie Power House’Ae
Ennaikum Koraiyatha Movusu’Ae
Un Mela Elasungalukum
Perusugalukum Podusungalukum
Paamaranukum Kumarigalukum
Loves’Ae

Coo Coo Coolie Power House’Ae
Ennaikum Koraiyatha Movusu’Ae
Un Mela Elasungalukum
Perusugalukum Podusungalukum
Paamaranukum Kumarigalukum
Loves’Ae

Love’U Love’U Love’U
Love Love Love..
Love’U Love’U Love’U
Love Love Love..

Elasungalukum Perusugalukum
Love’U Love’U Love’U
Podusungalukum
Paamaranukum
Love’U Love’U Love’U
Elasungalukum Perusugalukum
Love’U Love’U Love’U
Paamaranukum Kumarigalukum
Loves’Ae

Young Man, Young Man, Young Man
Forever Man
Young Man, Young Man, Young Man
Forever Man
Young Man, Young Man, Young Man
Forever Man
Young Man, Young Man, Young Man
Forever Man

Thotta Current Ah
Ketta Paiyan Da
Paththa Vachitiyea Paratta

Coolie Nadaka
Roomba Silika
Aalu Shot’Ovea Meatta Iruka

Un Energy Inga Enai Yethuda
No Way
Evanum Thoda Mudiyathu Da
Suyambu Sarithiram Paaruda
Sirikum Erimalai Thana Da

Pa Pa Paratta Power House’Ae
Gaantha Kannu Rendum Ravusu’Ae
Un Mela Elasungalukum
Perusugalukum Podusungalukum
Paamaranukum Kumarigalukum
Love’U Love’U Love’U

Pa Pa Paratta Power House’Ae
Gaantha Kannu Rendum Ravusu’Ae
Un Mela Elasungalukum
Perusugalukum Podusungalukum
Paamaranukum Kumarigalukum
Love’U Love’U Love’U

Thalaivan Erangatumae
Saritham Eluthatumae
Now
Malaikal Odhungatumae
Now
Ulagam Ularutumae
How

Arangam Athiratumae
Whistle’U Parakatumae Now
Karangal Osaratumae
Take Over Ottumothamae Now`
                },
            ]
        },

        // Junior
        {
            id: 'movie-2025-Junior',
            title: "Junior",
            actors: "Genelia Deshmukh, Sreeleela, and Kiriti Reddy",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/Junior_d56zhl_oltlum.jpg",
            songs: [
                {
                    id: "2025-Junior-song1",
                    title: "Lets Live This Moment",
                    artist: "Jaspreet Jasz",
                    duration: "4:06",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1752299677/Lets_Live_This_Moment_tvuzb4.mp3",
                    lyrics: `Roju unde gantalu twenty four e
Baby nuvvu e moodulo unna adi maradule
No time no time antoo parugulu chaale
Baby my time my time antoo enjoy karle

Eppudo October lo vacche Dasara kosam
Ippudi Sankranti moode miss avvakey
Eppudo mondey tecche stress tension kosam
Ippudi weekend vibe waste chayake

Let’s live this moment
Let’s live this moment
Let’s love this moment
Let’s love this moment

Let’s live this moment
Let’s live this moment
Let’s love this moment
Let’s love this moment

Panchuality ki modale Suryude
Nimishamaina eppudu latuga raadule
Time table assalu marchade marchade
Akkade aagipoyadule


Hey gaali vaatunellu meghame meghame
Speedu chooste vaayu vegame vegame
Unna chotunaassalu undade undade
Bhoominantha chutti vastundile

Hey sun laga statula untava
Cloudalle enjoy chestava
Ee rideu kaavalani ne gundene adagave

Let’s live this moment
Let’s live this moment
Let’s love this moment
Let’s love this moment

Let’s live this moment
Let’s live this moment
Let’s love this moment
Let’s love this moment

Vana chinukule chitapata chitapata
Nelajarite patapata patapata
Godugu chatuke vellake takataka
Aadinivvu ontipaina tarikita

Ho tirigiraanide paisane pandaga
Ranguleyyave danike ninduga
Gnapakalu enta goppavo teepivo
Pondalenivadike telsuga

Ee manasu o tella pustakame
Nimpendukundo oka jeevitame
Ee roju ka roju o page nimpadame…

Let’s live this moment
Let’s live this moment
Let’s love this moment
Let’s love this moment

Let’s live this moment
Let’s live this moment
Let’s love this moment
Let’s love this moment`  },
                {
                    id: "2025-Junior-song2",
                    title: "Viral Vayyari",
                    artist: "Haripriya, DSP",
                    duration: "4:24",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1752299709/Viral_Vayyari_yh26cj.mp3",
                    lyrics: `Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari

Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari

Instagram-lo naa following-u
Choosaav ante mind blowing-u
Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari

Followers andariki nene darling-u
Nenemi chesina full-u trending-u
Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari

Ey naa post taste-emo yamma tempting-u
Eppudosthadantu youth anta waiting-u
Vai vai vai vai vai vai viral
Upload chesaaka download kosam
Chinna pedda theda leka anta fighting-u
Vai vai vai vai vai vayyari

That’s why why why why
Why why why I am viral vayyari

Viral vayyari neene
Vaisochchina anubombuni
Viral vayyari neene
Vaisochchina anubombuni

Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari

Ee muthyaala muggesthe
Neekintha reach ochchinda da da da…
Muthyamantha tattoo vesthe
Naakinta craze vachchindi dhi dhi dhi…

Kotha kotha vante chesi
Overnight star ayyava va va vaareva…
Kurra gundelona mantetti
Top of the town ayyanu nu nu nu…

Oora mass-u stepulesthe
Pichcha peaks annara
Vollu viruchukunte chaalu
Rachcha maxu annaru

Ee paddhatiga unnannaluu…
Moddhu anukoni vadilesaaru…
Haddhulu ne raddhanaka…
Vaddhanna chesesaaru…

Ha ha em chesesaruu…?
Viral… oho!

Viral vayyari neene
Vaisochchina anubombuni
Viral vayyari neene
Vaisochchina anubombuni

Ee vacchaaka ee craze vayyari em chesaave ve ve eve…
Naa fans kosamani inkoncham baruvekkaanu nu nu nu…
O papa epudaina troll aithe feel ayyavaa va va va va…
Ehh ayyanni mamule choododdani fix ayyanu nu nu nu…

Taggamannaa taggadanṭa neepaaina maa benge
Tappu ledu tappadanṭa aa maatrame craving-e
Naalona em daagunna…
Mee choopulu vetikedokate…
Andukane entoddanna…
Egabadi tegha kaanichchaare…

Ha ha em kaanichchaaru…?
Viral… oho!

Viral vayyari neene
Vaisochchina anubombuni
Viral vayyari neene
Vaisochchina anubombuni

Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari

Vai vai vai vai vai vai viral
Vai vai vai vai vai vayyari… ha` },
            ]
        },

        // Koyila
        {
            id: 'movie-2025-Koyila',
            title: "Koyila",
            actors: "Alekhya Harika",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/Koyila_kskse5.jpg",
            songs: [
                {
                    id: "2025-Koyila-song1",
                    title: "Koyila",
                    artist: "Vijaibulganin",
                    duration: "3:52",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1753642263/Koyila_oxk1i8.mp3",
                    lyrics: `Chakkanaina chikkanaina chukkalanti koyila
Chakkeralanti ukkirilanti mukkeralanti koyila
Jakkanaina chekkaleni chekkilunna koyila
Ekkadikelthe akkadikochchi chikkukupotha koyila

Antukunna prema nippu aaradu
Kanti meeda niddaremo vaaladu
Koyila hoy koyila
Koyila hoy koyila

Pongutunna picchi prema aagadu
Daachamante chinni gunde chaaladu
Koyila hoy koyila
Koyila hoy koyila

Nuvvu lekapothe dikkutochadu
Challagaali kooda itu veechadu
Ee maanasika evariki ivvadu
Ninnu vadili ekkadiki velladu

Naa prema emo oohalaki andadu
Neeku thappa evariki chendadu
Koyila hoy koyila
Koyila hoy koyila

Chakkanaina chikkanaina chukkalanti koyila
Chakkeralanti ukkirilanti mukkeralanti koyila
Jakkanaina chekkaleni chekkilunna koyila
Ekkadikelthe akkadikochchi chikkukupotha koyila

Kaata kattukunna nee kannule
Chetulona jallene vennile
Moota katti daachukuntaanule o o…

Mudda banthi laanti, nee navvule
Jarutunte erakuntaanule
Danda laga allukuntaanule o o…

Nuvvunte chaale kade
Inkedi vaddu kade
Antaa ishtam nuvvu kade o o…

Naa praanam neede kade
Nee dhyaanam naadi kade
Arudaina prema kade
Nijanga manade

Nuvvu andamainaa andamainaa aadapillave
Kotha aashalevo reputhunna agnipullave

Chakkanaina chikkanaina chukkalanti koyila
Chakkeralanti ukkirilanti mukkeralanti koyila
Jakkanaina chekkaleni chekkilunna koyila
Ekkadikelthe akkadikochchi chikkukupotha koyila

Antukunna prema nippu aaradu
Kanti meeda niddaremo vaaladu
Koyila hoy koyila
Koyila hoy koyila

Pongutunna picchi prema aagadu
Daachamante chinni gunde chaaladu
Koyila hoy koyila
Koyila hoy koyila

Nuvvu pakkana unte choopu thippadu
Entha tittukunna gani tappadu
Nuvvu dooram unte naaku nachadu
Thannukocche edupemo aagadu

Neeku naaku raasi undi maradu
Maripothe oopiriki aadadu

Chakkanaina chikkanaina chukkalanti koyila
Chakkeralanti ukkirilanti mukkeralanti koyila
Jakkanaina chekkaleni chekkilunna koyila
Ekkadikelthe akkadikochchi chikkukupotha koyila

Hoyila hoy koyila
Koyila hoy koyila
Koyila hoy koyila
Koyila hoy koyila

Koyila hoy koyila
Koyila hoy koyila

Chakkanaina chikkanaina chukkalanti koyila
Chakkeralanti ukkirilanti mukkeralanti koyila
Jakkanaina chekkaleni chekkilunna koyila
Ekkadikelthe akkadikochchi chikkukupotha koyila`
                },
            ]
        },

        // kingdom
        {
            id: 'movie-2025-kingdom',
            title: "Kingdom",
            actors: "Vijay Devarakonda, Bhagya Shri Borse",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619924/Kingdom_thr099_mk6wse.jpg",
            songs: [
                {
                    id: '2025-kingdom-song1',
                    title: "Hridayam Lopala",
                    artist: "Anirudh Ravichander, Anumita Nadesan",
                    duration: "2:14",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750762769/Hridayam_Lopala_c5361q.mp3",
                    lyrics: `Edo edo gammattula enti kala.. enti kala
Edo edo ayentalaa upongae ala.. munchae nila
Evaipu pone poni veele leni daare idaa.. ayina agae podu kadaa..
Cheppaleni ishtameedaa ishtameedaa enti kadaa

Cheekatla daarullo nee choope o nippae
Dookeshaa anduttlo emundi naa tappae
Tootaalaa varshanaa puvvedō poosenaa
Lōkamke chaatenaa…..
Hrudayam lopala.. kadhanam jarigenaa..

Hrudayam lopala.. kadhanam jarigenaa..
Hrudayam lopala… kadhanam jarigenaa..

Edo edo gammattula enti kala.. enti kala
Edo edo ayentalaa upongae ala.. munchae nila
Evaipu pone poni veele leni daare idaa.. ayina agae podu kadaa..
Cheppaleni ishtameedaa ishtameedaa enti kadaa

Cheekatla daarullo nee choope o nippae
Dookeshaa anduttlo emundi naa tappae
Tootaalaa varshanaa puvvedō poosenaa
Lōkamke chaatenaa…..
Hrudayam lopala.. kadhanam jarigenaa..`

                }
            ]
        },

        // Hari Hara Veera Mallu
        {
            id: "movie-2025-hhvm",
            title: "Hari Hara Veera Mallu",
            actors: "Pawan Kalyan, Nidhhi Agerwal",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619916/Hari_Hara_Veera_Mallu_fri362_gt0w1f.jpg",
            songs: [
                {
                    id: "2025-hhvm-song1",
                    title: "Maata Vinaali",
                    artist: "Pawan Kalyan",
                    duration: "2:36",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750689750/Maata_Vinaali_oaju1l.mp3",
                    lyrics: `Vinaali
Veera Mallu maata chepte.. vinaali..

Appanna Subbanna.. kottu

Maata vinaali gurudaa maata vinaali
Maata vinaali manchi maata vinaali…
Uttadi gaadu maata tattarapadaka…
Chittamulona chinna oddikundaali…
Maata vinaali gurudaa maata vinaali…
Maata vinaali manchi maata vinaali…

Eetamaanu illu gaadu…
Taatimaanu taavu gaadu…
Eetamaanu illu gaadu…
Taatimaanu taavu gaadu…
Tagilinodu mogudu gaadu
Tagaramu bangaaru gaadu… anduke…
Maata vinaali gurudaa maata vinaali
Maata vinaali manchi maata vinaali…

Aaku leni adivilo naa….
Arere… mekalanni meyavachchu…
Saddu leni konalona…
Kondaa chaariya koolavachchu…
Maata daati pote
Marmamu teliyakapote
Maata daati pote
Marmamu teliyakapote

Pogarubothu taaguru poyi
Kondanu taakinattu… anduke…
Maata vinaali gurudaa maata vinaali…
Maata vinaali manchi maata vinaali…

Maata vinaali gurudaa maata vinaali…
Maata vinaali manchi maata vinaali…`
                },
                {
                    id: "2025-hhvm-song2",
                    title: "Kollagottinadhiro",
                    artist: "Mangli, Rahul Sipligunj, Ramya Behara, Yemini Ghantasala",
                    duration: "4:31",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750689757/Kollagottinadhiro_zgwidh.mp3",
                    lyrics: `Kora Kora Meesalatho, Kodama Kodama Adugulatho
Kontey Kontey Chenukulatho, Kolimilanti Magatimitho
Sarasara Vacchinaadu Chicchara Pidugantivaadu
Edo Edo Thalachinaadu Evvarino Vethikinaadu
Evaranta… Evaranta… Evarevaranta
Evaranta Evaranta Evarevarevarevaranta

Kondapalli Endi Bomma
Kola Kallatho Chusindamma
Teeyateeyani Teynelakomma
Teeyani Teraley Teesindamma

Vajrala Jilugulunna
Rathnala Yelugulunna
Kempulla Ompulunna
Mohareela Merupulunna..
Naa Paidi Gundeylona Edi Puttinchi
Mariginchi Mariginchi Kariginchi Kariginchi

Kollagottinaadiro…..Kollagottinaadiro
Kollagotti Naa Gundeyney Mulleygattinaadiro
Kollagottinaadiro…..Kollagottinaadiro
Mulleygattinaadiro…Mulleygattinaadiro…

Narinnanno.. Narinnanno.. Narinnanno….
Narinna Narinnanno..

Ayyayyayyo Ayyayyayyo….
Aa Chinnadi.. Inkemi Chesindayyo
Ayyayyayyo Ayyayyayyo….
Aa Kurradi.. Aa Mantram Esindayyo..

Kannulaloni Kaatuka Megham
Seekati Naapai Silikindey
Maatalathoney Melikeysinde
Marmam Edo Daasindey

Aadavaalla Manasu Adavilantidani
Eragani Santodiva
Antha Amayakudiva
Padusupilla Teeru Pattusikkadani Pasigattalenodiva
Votti Shontikommuva…
Letha Ennapoosava…..

Are Meesala Roshala Monaganni Pattesi
Pasivanni Chesesi Pasaredo Poosesi…

Kollagottinaadiro…..Kollagottinaadiro
Kollagotti Naa Gundeyney Mulleygattinaadiro
Kollagottinaadiro…..Kollagottinaadiro
Mulleygattinaadiro…Mulleygattinaadiro…

Narinnanno.. Narinnanno.. Narinnanno….
Narinna Narinnanno..O

Hoy hoy hoy
Hoy hoy hoy hoy
Hoy hoy hoy
Hoy hoy hoy hoy

Oopiriloni Aaviripavanaaley
Viriviga Lekhaley Visireney
Uppena Laaga Pongey Pourushamey
Sogasuku Sankela Veseyney

Cheekuchintha Leni Vaadi Chittam Dochavey
Parahushaar Poragadni Paagal Chesavey
Daaredayina Davvedayina Needayi Untaney
Pereydaina Teeredayina Penimiti Antaney
Addeddedde….

Kollagottinaadiro…..Kollagottinaadiro
Kollagotti Naa Gundeyney Mulleygattinaadiro
Kollagottinaadiro…..Kollagottinaadiro
Mulleygattinaadiro…Mulleygattinaadiro…

Narinnanno.. Narinnanno.. Narinnanno….
Narinna Narinnanno..O

Narinnanno.. Narinnanno.. Narinnanno….
Narinna Narinnanno..O`
                },
                {
                    id: "2025-hhvm-song3",
                    title: "Asura Hananam",
                    artist: "Kaala Bhairava, Sai Charan Bhaskaruni, Airaa Udupi",
                    duration: "4:08",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750689745/Asura_Hananam_vtkdrm.mp3",
                    lyrics: `Vajradehaaya

Raudra Raadheya

Badru Roopaya

Bhadrakaaleeya

Daksha Deekshaaya

Ugra Vyaagraaya

Tripuranaashakaaya

Kshipra Dagdhaaya

Pranaminchu bhairavam
Gaganamaina bhuvanamainaa
Dhadharillu Rauravam
Nishini cheelchu kshidhru dalle
Udbhavinchu aayudham
Rakshakainaa shikshakainaa
Chochukellu ranadhvanam
Dhimita dhimita dhimita yodha
Dhimita dhimita dhimita krodha
Dhimita dhimita dhimita shodha
Dhimi dhimi dhimi dhimi dhimi dhimi

Samara shankharavamalle
Gheenkarrinchu aagraham
Vairamaina shauryamainaa
Mrogu marana mrudangam
Joolu dulupu simhamalle
Humkarinchu paurusham
Vyuhamaina yuddamaina
Eguru vijaya pataakam
Dhimita dhimita dhimita mahita
Dhimita dhimita dhimita avita
Dhimita dhimita dhimita ajita
Dhimi dhimi dhimi dhimi dhimi dhimi

Ghora kroora mrugamumalle
Vembadinchu aakrosham
Shatruvaina mrutyuvainaa
Mokarillu prataapam
Veera dheera shoorudalle
Vijrumbinchu mahogram
Mandhanainaa mandhinainaa
Kummukellu mahoksham
Raaraa asurule musurukogaa
Raaraa busalaane visirive raa
Raaraa ahithule kasurukogaa
Raaraa shirassule turimive raa
Dhimita dhimita dhimita ghaata
Dhimita dhimita dhimita khyaata
Dhimita dhimita dhimita daata
Dhimi dhimi dhimi dhimi dhimi dhimi

Nivurunodile nippuravvara
Khadamu tokke khadgadhaariraa
Barilo dooke karkashunduraa
Dhikkulanni bikkadilluraa
Pogaru vidani madhagajam
Bedhiri adire mujjagam
Padunugunna ankusham
Gurinni geluchu ambakam
Bharatamata nudutiraata
Maarchu dheemasam`
                },
                {
                    id: "2025-hhvm-song4",
                    title: "Taara Taara",
                    artist: "Lipsika Bhashaym, Aditya Iyengar",
                    duration: "4:06",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750689762/Taara_Taara_fhqytu.mp3",
                    lyrics: `Pothunte Nuvvala Ala
Bazaar Mottham Goley Gola
Kopamga Nuv Choododdala
Pelaboye Firangila!

Em Kaavaloy Pilla
Merusthunnav Thalaa Thala
Entho Cheppu Thamari Vela
Mohareela? Varahaalaa?

Taara Taara Naa Kallu
Vennela Pootha Naa Ollu
Aakasanni Enthakani
Vela Kadatharu!

Taara Taara Naa Kallu
Vennela Pootha Naa Ollu
Aakasanni Enthakani
Vela Kadathaaru!

Chemata Chukka Paditeyy
Vajramanukuntaaru!
Vaddhaku Vacchi Nilabaditeyy
Thadabadathaaru!

Ballem Baanam Kante
Nadumu Padhunaindoyi
Kavachamunna Gundekaina
Gaayaalavththayi

Pedavi Kosam Padavulu
Naabhiki Naalugu Oollu
Arpisthaamantunnaaru
Ee Nawaabulu!

Taara Taara Naa Kallu
Vennela Pootha Naa Vollu
Aakasanni Enthakani
Vela Kadathaaru 

Kanti Choopuloni Nigha
Panti Kinda Pedavi Sega
Sogasula Sirulu Bhaga
Rammani Cheppaka Chebuthundaga

Kaatu Veyi Okkotiga
Reguthondi Vayasu Thega
Ghaatuga Unnadi Poga
Raguluthondi Bhaga Bhaga!

Kallu Ollu Kaadabba
Mohabbat Ka Jazba
Velam Vesi Daanni Evaru Konalerabba!

Aasha Maashi Kaadabba
Ee Kanne Shobha
Vela Kanna Viluva Thelisinodenabba`
                },
                {
                    id: "2025-hhvm-song5",
                    title: "Hari Hara Veera Mallu BGM",
                    artist: "M M Keeravani",
                    duration: "1:02",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750689721/Hari_Hara_Veera_Mallu_sta0lg.mp3"
                }
            ]
        },


        // kanappa
        {
            id: 'movie-2025-kannappa',
            title: "Kannappa",
            actors: "Manchu Vishnu, Mohan Babu, Prabhas, Kajal Aggarwal",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619921/Kanappa_l4obdx_httbki.jpg",
            songs: [
                {
                    id: '2025-kannappa-song1',
                    title: "Shiva Shiva Shankara",
                    artist: "Vijay Prakash",
                    duration: "5:15",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750659159/Shiva_Shiva_Shankara_r1wxfh.mp3",
                    lyrics: `Telivi kannu terusukundayyaa
Shivalingamayyaa
Manasu ninnu telusukundayyaa
Maaya gantalu teeyaa

Telivi kannu terusukundayyaa
Shivalingamayyaa
Manasu ninnu telusukundayyaa
Maaya gantalu teeyaa

Mannu minnu kaanaraaka jarigipaaye paata batuku
Unna ninnu levvanukuntaa midisipaditinintavaraku
Nee dayani vibhoodigaa puyyaraa naa ontiki
Nannimkokka naandigaa moodeyyi nee gaatiki
Ee janumu punyamo ninnu cherukuntiraa… aa

Shiva Shiva Shankara
Saamba Shiva Shankara
Harom Hara Harahara
Neelakantaaraa

Swarnamukhee tadupulonunna bandaraayilona
Lingamayya neeve naaku dochinaavugaa
Daarenta … kommulu Shiva shoolaale
Mabbulo… geetalu nee naamaale

Lokamantaa naaku Shivamayame
Yaada choodu nee anubhavame
Omkaaramu palikinavi pilla gaalule…

Endina ee gundelu vennela cheruvaayeraa
Ninnati naa velitiini nee daya cheripindiraa
Shiva Shivayyanu peruku penavesukuntiraa…. aa

Shiva Shiva Shankara
Saamba Shiva Shankara
Harom Hara Harahara
Neelakantaaraa

O.. Konda vaagu neellu neeku laalapoyaanaa..
Adivi malle pooladandaa alakarinchanaa
Naa inti… chanti biddavu nuvvu
Mupoddu… neeto navvula koluvu

Duppi maamsamide neeku techinaa
O Shivayya .. ippa tene undi vindu cheyanaa
Ninnu saakutaa konasagutale bratuku podugunaa… aa

Endaku jadivaanaku tattukuni ettuntivo
Chali manchuku vila vila aa paatu paditivo
Ika nee goodu needa cheligadu neneraa….

Kaasta mundu kanapadunte kaadumallayya
Aasti paastulannii neevee karigipothaayaa
Emainaa… neeku nyaayamgundaa
Ee paina.. ninnu vadiledumdaa

Ettagattano tala tirigi
Mogasina tapamantaa karigi
Shivayya nee sigamudilo sinkukuntiraa… aa

Baammanee idilinchina.. kasurutoo kariginchina
Shulamutho podichina.. paamulu karippinchina
Ninnodilithe naa perika tinnade kaaduraa… aa

Shiva Shiva Shankara
Saamba Shiva Shankara
Harom Hara Harahara
Neelakantaaraa

Harahara Harahara Harahara Harahara Harane Shivane
Hara Hara Shankara
Shiva Shiva Shankara
Shankara Shankara Shiva Shiva Shankara

Hara Hara Shankara
Shiva Shiva Shankara
Shankara Shankara Shiva Shiva Shankara

Hara Hara Shankara
Shiva Shiva Shankara
Shankara Shankara Shiva Shiva Shankara
Shankara… Shiva Shankara
Shiva…. Shiva…. aa`
                }
            ]
        },

        // kubera
        {
            id: 'movie-2025-kuberaa',
            title: "Kuberaa",
            actors: "Dhanush, Nagarjuna, Rashmika Mandanna",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619892/Kubera_oj0vnu_gl4fth.jpg",
            songs: [
                {
                    id: '2025-kuberaa-song1',
                    title: "Poyiraa Mama",
                    artist: "Dhanush",
                    duration: "4:23",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750761097/Poyiraa_Mama_bpb5ts.mp3",
                    lyrics: `Eyy One day hero nuvve friend
Nee Kosame Dappul Soundu
Assal Thaggak Atneundu
Mokkutharu Kaallu Rendu
Ninne chusthunnadi Chudu
Uru Motham Devudi laga
One way lona nuv vellina aapar Ninnu Andarilaga
Radham Meedha Nuvve Alaagaa
Dusukuveltha Unte Abbo Yamagaa
CM PM Yedure Vachinaa
Nuvu Salam Kotte Pane Ledugaa
Mundarlaagaa Antha Easy Gaa
Ninne Kalusukolerugaa
Neetho Photo Digalanna
Chacche Thantha Panauthindigaa
Ooo O O O O O….
Poyiraa Poyiraa Poyiraa Poyiraa Maavaa
Are Raajaa Lagaa Darjagaa Poyiraa Maavaa
Poyiraa Poyiraa Poyiraa Poyiraa Maavaa
Are Raajaa Lagaa Darjagaa Poyiraa Maavaa

Chusthu Choosthune Marindi
Nee Range Eerojunaa
Ninne Andukovali Anukunte
Saripodhe Ye Nichena
Sommulaina Sokulaina Thalonchava Nee Mundara
Ninne Kone Aisa Paisa Ee Lokam Lo Yadundhira
Ninne Thitti Galla Patti Sathayinche Saare Ledu Raa
Ooo Ooo……
Poyiraa Poyiraa Poyiraa Poyiraa Maavaa
Are Raajaa Lagaa Darjagaa Poyiraa Maavaa
Poyiraa Poyiraa Poyiraa Poyiraa Maavaa
Are Raajaa Lagaa Darjagaa Poyiraa Maavaa

Neethoti Matladi Gelichet Damme Eeda Ledevadiki
Swargam Arey Nee Jebulo Undi Badhe Ledu Yenatiki
Aeroplane Rockettu Nee Kaalla Kindhe Yegaralsindi
Yenthodaina thale Yethi Ala Ninnu Chudalsindhe
Thala Rathane Cheripi malla Raasesuko Neeke Nachindhe..
Ooo Ooo Ooooo……
Poyiraa Poyiraa Poyiraa Poyiraa Maavaa
Are Raajaa Lagaa Darjagaa Poyiraa Maavaa
Poyiraa Poyiraa Poyiraa Poyiraa Maavaa
Are Raajaa Lagaa Darjagaa Poyiraa Maavaa`
                },
                {
                    id: '2025-kuberaa-song2',
                    title: "Anaganaga Kadha",
                    artist: "Hyde Karty, Karemullah",
                    duration: "3:22",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750761095/Anaganaga_Kadha_stpiwj.mp3",
                    lyrics: `Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..

Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..

Namme vaadini ammeyadam….
Mokkevaadini tokkeyadam..
Dorikevaadini docheyadam..
Tala vanchevaadini muncheyadam..

Yugaala nundi..
Jarugutunna katha..
Yugaantamainaa maariponi katha..

Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..

Vantena kattedokadu..
Daanni daate vaadimkokadu..
Nichchena vesedokadu…
Paipikekke vaadimkokadu..
Munduku teesuku vellevaadini akkaditone aapadam..
Ettuku mosuku vellevaadini lothulalone unchadam..

Pedala nettuti marakalu antani peddala siri undaa!??
Beedala kannula neetini tudavani kathalaku artham undaa..?!?

Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..

Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..

Leni vaadiki noti aakali..
Unnavaadiki notla aakali..
Notiki telusunu vaddu vaddu..
Notlaku teliyadu haddu paddu..

Balahinudiki aashe untadi..
Balavantudiki atyaashuntadi..

O.. Aashaku bratuke saripoddi..
Oka bratuke saripoddi..
Atyaashe andari bratukulato aata aadukuntadi..

Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..

Anaganaga katha..
Anaganaganaga katha..
Andariki telisina katha..
Kaani ante teliyani katha..`
                },
                {
                    id: '2025-kuberaa-song3',
                    title: "Pippi Pippi Dum Dum Dum",
                    artist: "Indravathi Chauhan",
                    duration: "3:47",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750761096/Pippi_Pippi_Dum_Dum_uhdmdr.mp3",
                    lyrics: `Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Namaste Girl!

Pippi Pippi Dum Dum
Pippi Pippi Dum Dum

Are You Ready To Dance?

Twinkle Twinkle Little Star
Single Life Is Super Yaar!
Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum

Always Happy Always High
Like A Diamond In The Sky
Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum

Twinkle Twinkle Little Star
Single Life Is Super Yaar!
Always Happy Always High
Like A Diamond In The Sky

Follow This Golden Rule
You Will Be A Happy Soul
Full-Time Party Feel
Come On Come On Take Control!

Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Don’t Want To Waste Your Time
Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Don’t Do This Crime

We Have Just One Life
Pippi Pippi Dum Dum Dum
Why Do You Want To Walk
On The Edge Of A Knife?

Pippi Pippi Dum Dum Dum
So Fake Only Headache
Never-Ending Serial Life Of A Wife

Freedom Gone Gone Boredom On On
Kingdom Not Your Own
Don’t Fall Into The Danger Zone

Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Don’t Want To Waste Your Time
Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Don’t Do This Crime

Kitchen Is A Big Silly Place
Pippi Pippi Dum Dum Dum
Travel The World It Is Bright And Nice
Pippi Pippi Dum Dum Dum

No Cage At Any Age
Enjoy Life In Every Phase
Instagram Reels Snapchat Filters
Better Timepass Than Silly Relationships

Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Don’t Want To Waste Your Time
Pippi Pippi Dum Dum Dum
Pippi Pippi Dum Dum Dum
Don’t Do This Crime`
                },
                {
                    id: '2025-kuberaa-song4',
                    title: "Naa Koduka",
                    artist: "Sinduri Vishal",
                    duration: "4:45",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750761097/Naa_Koduka_dlw5la.mp3",
                    lyrics: `Paccha Pacchani Chellallo
Pooseti Puvvula Taavullo
Navvulu Erutuu Nadicheddaamu
Chetulu Pattuko Naa Kodukaa

Kadupuna Ninnu Dachukuni
Needalle Ninnu Antukuni
Kalise Vuntaa Yeppatiki
Nee Chethini Vadhalanu Naa Kodukaa

Padhilanga Nuvvu Nadavaale
Padi Kaalaalu Nuvvu Bathakaale
Chandamaama Ku Chebutunna
Ninnu Challaga Choosthadi Naa Kodukaa

Akalitho Nuvvu Pasthunte
Nee Dokkalu Yendi Poyera
Chettu Chettu Ki Chebutunna
Nee Kadupu Nimpamani Naa Kodukaa

Nidduraleka Nuvvunte
Nee Kannulu Yerraga Maarera
Neeli Mabbutho Chebutunnaane
Jolapaadamani Naa Kodukaa

Manishiki Manishe Dooramura
Idi Maaya Lokapu Dharmamura
Badilo Cheppani Paatham Idi
Naa Batike Nerchuko Naa Kodukaa

Thidithe Vaallake Thagilenu
Ninnu Kottina Chetulu Virigenu
Oddika Nerchi Oorchukunundu
Opikathoti Naa Kodukaa

Raallu Rappala Dhaarulu Neevii
Adugulu Padi Lammoka Kodukaa
Metthati Kaallu Oththuku Potaayi
Choosuku Naduvura Naa Kodukaa

Chukkalu Dikkulu Nesthulu Neeku
Chakkaga Batuku O Kodukaa
Okkani Vanukoni Digulaipoku
Pakkani Untaa Naa Kodukaa

Paanamu Needi Pittala Toṭidi
Ucchula Padaku O Kodukaa
Mulla Kampalo Goodu Katteti
Nerputho Yedagara Naa Kodukaa

Ye Dhaarilo Nuvvu Pothunna
Ye Gandam Neeku Eduraainaa
Ye Keedu Ennadu Jaragadu Neeku
Amma Deevenidi Naa Kodukaa

Ee Dikkulu Neetho Kadilenu
Aa Chukkali Dishti Theesaane
Ee Gaali Dhooli Sokadu Ninnu
Amma Deevenidi Naa Kodukaa

Ee Pidugula Chappudu Vinabadina
Aa Bhoochchodiki Nuvvu Bhayapadina
Ye Cheekati Ninné Cheyadulera
Amma Deevenidi Na Koduka
Amma Deevenidi Na Koduka`
                }
            ]
        },

        // mass jathara
        {
            id: 'movie-2025-mass_jathara',
            title: "Mass Jathara",
            actors: "Ravi Teja, Sree Leela",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619894/Mass_Jathara_dxomsg_vbo39e.jpg",
            songs: [
                {
                    id: '2025-mass_jathara-song1',
                    title: "Tu Mera Lover",
                    artist: "Bheems Ceciroleo",
                    duration: "4:17",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660978/Tu_Mera_Lover_ofwddq.mp3",
                    lyrics: `Tu Mera Lover Lover Lover
Main Tujhko Diya Flower
Tu Mera Lover Lover Lover
Pettave Chevilo Cauliflower

Neelaga Nachchalede
Gicchalede Evvaru
Chokkale Chimpukore
Naaku Laaga Andaru

Nuvvemo Tulasi Kota
Lona Koncham Ganja Flavour
Mee Babu Ninnu Minchi
Inka Pedda Lofer

Paikemo Scotch Bottle Laaga Nuvvu Super
Nee Mindu Chudabothe Cheapu Liquor
Naa Gonthu Kostheve Donga Teacher

Hey.. Tu Mera Lover Lover Lover
Main Tujhko Diya Flower
Tu Mera Lover Lover Lover
Pettave Chevilo Cauliflower

Ososi Jinka Paruge Thakinka
Nee Teega Laagi Pattesa Donka
Neelanti Pilla Unte Prati Jilla
Kolleru Godaa Tellarekalla

Ninnenni Bandaboothulu
Thittukunna Thappu Ledhe
Naa Usure Neeku Thagili
Zindagi Lo Pelli Kaadhe

Nee Kosam Padichastunte
Naa Kantlone Thaaralni
Kottav Kaade

Tu Mera Lover
Tu Mera Lover

Tu Mera Lover Lover Lover
Main Tujhko Diya Flower
Tu Mera Lover Lover Lover
Pettave Chevilo Cauliflower

Nee Andam Chusi Ne Padipoledhe
Edho Oohinchi Love Cheyyaledhe
Abbayilantha Cheddollem Kaadhe
Ammayantha Manchollu Kaadhe

Nuvvatte Kallaloki
Kellu Petti Choodamake
Nee Meedha Kopamantha
Thaggipothe Navvamake

Nattintlo Kaalu Petti
Rammantunte Nakketto
Tosav Kaade

Tu Mera Lover Lover Lover
Main Tujhko Diya Flower
Tu Mera Lover Lover Lover
Pettave Chevilo Cauliflower`
                }
            ]
        },


        // Single 
        {
            id: "movie-2025-single",
            title: "#Single",
            actors: "Sree Vishnu, Ketika Sharma, Ivana",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619902/Single_qmbouf_wze8hj.jpg",
            songs: [
                {
                    id: "2025-single-song1",
                    title: "Sirrakaindhi Single Bathuku",
                    artist: "Rahul Sipligunj",
                    duration: "3:32",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581120/Sirrakaindhi_Single_Bathuku_blgeqj.mp3",
                    lyrics: `Jaanie Jaanie Yes Papah
Jagamantaa Jantalehga Nenu Tappaa
Nene Number One Erripappaa
Preminchaanantameh Pedda Tappaa?
Endi Naakikarmani Rammanteh Pommani
Zindagee Poortigaa Debbaipoyeneh
Kooralo Karehpaaku Rebbahipoyeneh

Sirraakaindi Single Bratuku
Eheh Leneh Ledu Asuku Basuku
Sirraakaindi Single Bratuku
Ika Mandu Glaaseh Company Manaku

Enakki Dirigi Choosukunteh Lekkaa
Eheh Coffee Shopu Kharchulanni Bokkaa
Gundeleni Gummaalu Showcaselo Bommalu
Nammukunna Naabotodiki Chevilo Puvvulu
Ammoh Veella Action Antee Kattulu Leni Factioneh
Ee Kaalapu Laila Antee Majnu Kaina Tensioneh
A L O V E Gubey Guyyi
Bakkachikki Poye Bachelor Baahubali

Sirraakaindi Single Bratuku
Eheh Leneh Ledu Asuku Basuku
Sirraakaindi Single Bratuku
Ika Mandu Glaaseh Company Manaku

Jaanie Jaanie Yes Papah
Jagamantaa Jantalehga Nenu Tappaa
Endi Naakikarmani Rammanteh Pommani
Zindagee Poortigaa Debbaipoyeneh
Kooralo Karehpaaku Rebbahipoyeneh
Kooralo Karehpaaku Rebbahipoyeneh`
                },
                {
                    id: "2025-single-song2",
                    title: "Shilpi Yevaro",
                    artist: "Yazin Nizar",
                    duration: "3:00",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581103/Shilpi_Yevaro_dfp6ky.mp3",
                    lyrics: `AI kuda oohinchaleduga
Intandanni em cheppina
Am I falling into the love ani status pettana
Headphones emo nee chevulapaina
Music nalo modhalaiyena
First love song sittings evo nalo jarigena
Shilpi evaroyi shilpam venuka
Telupu chirunama ne selfie digutha

Showroomullo showcase piecesu
Shockayeti andanniva
Ninnu touch chesi black and white lu
Rainbowlavvava
Nee pedavullo aa cute mataki
Bookai undipoynila
Entandanga first love tracke
Take off ayyega
Shilpi evaroyi shilpam venuka
Telupu chirunama ne selfie digutha`
                },
                {
                    id: "2025-single-song3",
                    title: "Prema Ishq Kadhal",
                    artist: "Karthik, Sinduri Vishal",
                    duration: "2:36",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581036/Prema_Ishq_Kadhal_cd3v7r.mp3",
                    lyrics: `
Prema Ishq Kadhal Naa Life Alone-Aa
Track-E Inkemchaave
Thought-E Day And Night-U
The Mind Alone-Aa Psyche Pottinchave
Ni Baby Wifi Laa Nanuchitt-U Muttisindhey
Gidhili Boom-Alley Chiti-Chusey
Nuve Kavisthave
Love You 24/7
Love You You're My Heaven
Nuve Dilecchavugada
Heart-Lo Vibration

Love You 24/7
Love You Hell And Heaven
Ninnin Preminch Dakhu
Akhirle Reason

Prema Ishq Kadhal Naa Life Alone-Aa 
Track-E Inkemchaave

Saa Re Ma Pa Ga Saa Ni Pa Ma Ga Saa
Saa Ni Pa Ma Ga Saa Ni Pa Ma Ga Saa
Saa Re Pa Ma Ga Saa Ni Pa Ma Ga Saa
Ni Saa Gaa Ma Pa Ni Saa Ga Ni Saa Ga Ma Paa 
Saa Ni Pa Ma Ga Saa Ni Pa Ma Ga Saa

Chhiruniffey Chikkile Ginthe Phidithey 
Ye Mataaro
Eehaaye Indhe-Dho Bangundhey
Wheatheruche Vicchuni Eehug-U Each-I


Dil Kamchhutte Ee-Feeling Inkunnchhun Bagundhey
Khaali Kunnamgaru Alone Velluthuvu Naam 
Minded Rewind I Neeyou Hello Ne Drama Undhey

Love You 24/7
Love You You're My Heaven
Nuve Dilecchavugada
Heart-Lo Vibration

Love You 24/7
Love You Hell And Heaven
Ninnin Preminch Dakhu
Akhirle Reason

Prema Ishq Kadhal Naa Life Alone-Aa 
Track-E Inkemchaave`
                }
                /*
                 {
                     id: "2025-single-song4",
                     title: "Naenaenaa Idhi Naenaenaa",
                     artist: "Vishal Chandra Shekhar",
                     duration: "1:56",
                     url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581018/Naa_Kanti_Paapallona_abjbcf.mp3"
                 },
                 {
                     id: "2025-single-song5",
                     title: "Naa Kanti Paapallona",
                     artist: "Chinmay",
                     duration: "1:56",
                     url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581013/Naenaenaa_Idhi_Naenaenaa_yjm7ty.mp3"
                 }
                 */
            ]
        },

        // hit third case
        {
            id: 'movie-2025-hit',
            title: "HIT-3",
            actors: "Nani, Srinidhi Shetty",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619917/Hit_Third_Case_lzhah7_ylqgps.jpg",
            songs: [
                {
                    id: '2025-HIT-song1',
                    title: "Prema Velluva",
                    artist: "Sid Sriram, Nutana Mohan",
                    duration: "4:06",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750658735/Prema_Velluva_qrajto.mp3",
                    lyrics: `Dooke naapai… ivaale… prema velluva…

Pagale navaipuki nadiche kalavaa
Padutoo egire Alavaa…
Manase ninnu choodani okkate godava
Kannule ippude chadivaa…

Venta vacchaave.. vembadinchaave
Oopiraalle maaraave nede neeve…
Nammi teeraale.. kala kaade
Peruke nennunnale praanam neede…

Evarevvarani vetikinaa…
Kanulaki tanu dorikeenaa…
Marichaanika deninaaina…
Nee valana…

Telusaa tholisaarigaa manase gelichaa
Yeppudu edute nilichaa…
Kopam marichaanugaa idi nee mahima
Nijame nuvvu naa sagamaa…

Prema velluva prema uppena prema sandadi…
Prema velluva prema uppena prema sandadi…

Aato ito etainaa
Aduge jarige mela mellagaa
Marintha okkatokkatigaa cherenaa
Manalo maname kalise vidhamaa

Geetha geesale.. vechichoosale
Ninnu minchi naakinkaa Thodantu dorukuna
Aappalenule.. aagalenu le
Choopalenule.. cheppalenule
Daachalenu neneninkaa naalo prema… aa

Evarevvarani vetikinaa…
Kanulaki tanu dorikeenaa…
Marichaanika deninaaina…
Nee valana…

Prema velluva prema uppena prema sandadi…
Prema velluva prema uppena prema sandadi…`
                },
                {
                    id: '2025-HIT-song2',
                    title: "Abki Baar Arjun Sarkaar",
                    artist: "Anurag Kulkarni",
                    duration: "4:00",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750658577/Abki_Baar_Arjun_Sarkaar_fsm1dz.mp3",
                    lyrics: `Vetu vesinaa Veta saagele
Geetha geesinaa kotha maaruna nede
Maatu vesina aapadhe idhe
Yaada dhaagina aapalerule… Hey Hey

Alajade egasene
Bhayamalaa bigisene
Anakuve aapalenidhi vegame

Sahaname eragani guname
Samarame niluvadhe chude
Nadumane mruthyuvocchinaa vyardhame

Ab ki baar… Arjun Sarkaar
Ab ki baar… Arjun Sarkaar… Heyyy heyyy

Sathru mookale … Oo oo
Maruva lerule… Oo oo
Gurthukocchule… Oo oo
Pralaya roopame kalalona

Varadha theerune… Oo oo
Parugu aagadhe… Oo oo
Marana saasanam… Oo oo
Vethiki raasinatte

Rudhirapu marakale
Cheragani metikale
Alasinaa dhaadi aagane aagadhe

Naranaram urakale niyamam
Vadhalani naijame chude
Thappuke siksha ivvadam thadhyame

Ab ki baar… Arjun Sarkaar… Eyy Eyyy Eyy
Ab ki baar… Arjun Sarkaar… Heyy heyyyy

Ithadi oravadi chivariki yamudiki bhayame
Antaru thelisina manushulu narakamu nayame
Enthentha adigina manasika karagani guname
Pattenu nijamuni bayatiki laagaga kshaname

Manushulalo kalavade
Manasulane gelavade
Kalabadithe viduvade
Thonakade benakade

Dharmamune vadhalade
Venakaduge veyade
Karthavyam maravade
Katinamee asurude
Ab ki baar… Arjun Sarkaar
Ab ki baar… Arjun Sarkaar… Heyy Heyyy`
                },
                {
                    id: '2025-HIT-song3',
                    title: "Thanu",
                    artist: "Anirudh Ravichander",
                    duration: "4:08",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750658820/Thanu_avdw41.mp3",
                    lyrics: `Thana kosame naa, pogare mari anigeynaaa
Thana kosame naa, parugey ika aaageynaaa
Thanathone Lokamaaaaaaa ah ah
Thanathone premaaaaaaa

Thanathonena
Thanu naadena
Nijama thanu naa needena?
Thathonena
Thanu naadena
Thana navve naaaaaa……Manasuki thagunaaaaa
Thanathonenaaaa
(Madi thana pani thanu mariche)
Thanu naadena
(Adi nijamani thanuvariche)
Thana navve naaaa….Manasuki thagunaaaaa

Thana kosame…naa…kanule vechundenaaa..
Thana kosame…naa…pedave palukaapenaaa..

Thanu nanu taake ah teere….
Thapananu theerchese choode
Thanu nanu choostunteyyy…
Thana choope manasunu thaakitheyyy….
Mechale thanane
Thanathone adugey
Anuvanuvu thanakey
Thanavalaney Prati kshanameyyyy heyyy

Thanathonena
Thanu naadena
Nijama thanu naa needena?
Thanathonenaaaa
(Madi thana pani thanu mariche)
Thanu naadena
(Adi nijamani thanuvariche)
Thana navve naaaa….Manasuki thagunaaaaa
(Nijamaaaaa)
Thanathonenaaaa
(Madi thana pani thanu mariche)
Thanu naadena
(Adi nijamani thanuvariche)
Thana navve naaaa….Manasuki thagunaaaaaa`
                },
                {
                    id: '2025-HIT-song4',
                    title: "Poratame 3.O",
                    artist: "Karthik, Sanvi Sudeep",
                    duration: "2:55",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750658671/Poratame_3.O_yihrso.mp3",
                    lyrics: `Dharmame nedila odithe
Darunam darule veedite
Entala chindina netthurinka tappulede
Matatho aaguna tappadinka cheyyi nuvve.. hey

Poratame poratame poratame…
Poratame poratame poratame…

Nirbheeti nindeeti neechulni varinchedikkade
Karkota dushtulni himsachi dandichi dookude

Yuddham thathyam ayina antha kauravulaina
Rendo vaipundi ekaika arjunuder
Dharmam paksham unte raktham evvadidaina
Enta parinchu himse avuna

Mechukoda lokamantha jarugutunna oocha kota
Vaddu aapakinka mruthuratha kalupu cheeda erivetha
Dhamme vala chhedinche souryam cherununte
Rakshinche kasithone sadhinchodde

Poratame poratame poratame…
Poratame poratame poratame…`
                }
            ]
        },

        // Arjun son of vyjayanthi
        {
            id: 'movie-2025-asov',
            title: "Arjun s/o Vyjayanthi",
            actors: "Kalyan Ram, Vijaya Shanthi, Saiee M Manjrekar",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619906/Arjun_Son_of_Vyjayanthi_icbr1s_ycmyow.jpg",
            songs: [
                {
                    id: '2025-asov-song1',
                    title: "Naayaldhi",
                    artist: "Nakash Aziz, Sony Komanduri",
                    duration: "3:39",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580817/Nayaaldhi_y15tmn.mp3"
                },
                /*
                {
                    id: '2025-asov-song2',
                    title: "Muchataga Bandhaale",
                    artist: "Haricharan",
                    duration: "3:56",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580823/Muchataga_Bandhaale_ugoify.mp3"
                }
                */
            ]
        },

        // Jack
        {
            id: 'movie-2025-Jack',
            title: "Jack",
            actors: "Siidu Jonnalagadda, Vaishnavi Chaitanya",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619918/Jack_mjmixs_lxypk6.jpg",
            songs: [
                {
                    id: "2025-Jack-song1",
                    title: "Kiss",
                    artist: "Javed Ali, Amala Chebolu, Suresh Bobili",
                    duration: "3:50",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580890/Kiss_de63zc.mp3",
                    lyrics: `Ee Ayya Ayya Ee Ee Ayya Ayya
Ee Ee Ayya Ayya Ee Ayya Ayya Ee

Ee Ayya Ayya Ee Ee Ayya Ayya
Ee Ee Ayya Ayya Ee Ayya Ayya Ee

Bhagya nagaram antha manade manade
Nee badha theerusthane padave padave
Jantai podamande pedave pedave
Dhuniyaatho paniledhinka padave padave

Hey muddu mudduga muddhivvamandiga
Muddu gummila unnapatuga
Muddu pettadam emanta thelika
Chuttu pakkalanta undaga

Intikelli pettukundamante
Neeku naaku inka pelli avvale
Unna chote tipputhunnaventoi
Privacy ki leva bestu place-u le

Vennupusa dhaka vanukocchela
Ichukundam ghatu mudde
Tondaroddhu baga gurthundela
Yenchukundam romantic chote

Bhagya nagaram antha manade manade
Nee badha theerusthane padave padave

Smoking cheyaga smoke zone undiga
Kiss ki lede kiss zone
Alcohol ke undile wine bar
Muddu ki lede single spot 

Aarogyam chedagotthe bad habits ke nelavunde
Stress antha pogotte pedavulakenti ibbande

Bhagya nagaram antha manade manade
Nee badha theerusthane padave padave

Ee Ayya Ayya Ee Ee Ayya Ayya
Ee Ee Ayya Ayya Ee Ayya Ayya Ee

Ee Ayya Ayya Ee Ee Ayya Ayya
Ee Ee Ayya Ayya Ee Ayya Ayya Ee

Ooristunnade vedhistunnade
Oohala ninda nee mudde
Jaaga ledhani jaage cheyake
Pranam pothunnatunde

Adharale arigela ivvalani unde chumma
Moodantha chedirala vankalu cheputaventamma

Bhagya nagaram antha manade manade
Nee badha theerusthane padave padave

Ee Ayya Ayya Ee Ee Ayya Ayya
Ee Ee Ayya Ayya Ee Ayya Ayya Ee

Ee Ayya Ayya Ee Ee Ayya Ayya
Ee Ee Ayya Ayya Ee Ayya Ayya Ee`
                },
                {
                    id: "2025-Jack-song2",
                    title: "Pablo Neruda",
                    artist: "Benny Dayal",
                    duration: "3:27",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580939/Pablo_Neruda_zfs4mx.mp3",
                    lyrics: `Ae uppenalu choodakarla
Thana utsaham choosthe chaladaa..
Ae adbhutamu choodakarla
Tana poraatam choosthe chaladaa..

Ae padhakam bedisi kottinaa
Tanu vaese lekka tappinaa
Malli sarikotha vyoohamai Adugaestaadugaa…

Ae tappulu enni chaesinaa
Thana vaalle vekkirinchinaa
Ae whitener cherapalaeni
O pere gaa…

Pablo Neruda…
Pablo Neruda…
Pablo Neruda…
Ae uliki longani raayi ithadaa

Pablo Neruda…
Pablo Neruda…
Pablo Neruda…
Ae oohaki andani nijamithadaa

Thanu adugulu vaese prati gathukula daari
Thana dookudu choosi pakkaaku jarigi chotivvadaa
Penu alajadi raepe nadi alalanu vanchi
Edureedhuthu velli thana lakshyaanne chedincheydaa
Jabulu kottae vaallaki jai kodathaadoy aa teliviki
Baikulu dochae bachuki shishudu ee chalaaki..

Bookish knowledge baruvani 
Thana rubbish panule guruvani
Tappula nunche kothavi kanipettestuntaadu..

Pablo Neruda…
Pablo Neruda…
Pablo Neruda…
Ae uliki longani raayi ithadaa

Pablo Neruda…
Pablo Neruda…
Pablo Neruda…
Ae oohaki andani nijamithadaa`
                },
            ]
        },

        // Mad Square
        {
            id: 'movie-2025-MadSquare',
            title: "Mad Square",
            actors: "Narne Nithin, Sangeeth Shobhan, Sri Gouri Priya Reddy",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619893/Mad_Square_irqsmy_wxzxya.jpg",
            songs: [
                {
                    id: "2025-MadSquare-song1",
                    title: "Balu Gani Intilona",
                    artist: "Raghu Kunche",
                    duration: "2:27",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580821/Balu_Gani_Intilona_kdswyw.mp3",
                    lyrics: `Tara dandanakar rakkattakkar rakkattakkar rakkattakkara
Dandanakar rakkattakkar rakkattakkar rak
Dandanakar rakkattakkar rakkattakkar rakkattakkara
Dandanakar rakkattakkar rakkattakkar rak

Aa Balugani abba Balugani
Abbabba Balugani intilona banthulata
Balcony loki pothe genthulata

Dandanakar rakkattakkar rakkattakkar rakkattakkara
Dandanakar rakkattakkar rakkattakkar rak

Ehe Seenugani inti mundu sindhulata
Sandhuloki pothe yama muddulata

Dandanakar rakkattakkar rakkattakkar rakkattakkara
Dandanakar rakkattakkar rakkattakkar rak

Kodi koose daaka kodi punjulata
Gaddi vaamu kada taadu bongaram aata
Dimmadirigi poyela raatiri poota
Kalisi aadukundama bommalata
Tellaredaka idenanta aata paata mata veta

Tara dandanakar rakkattakkar rakkattakkar rakkattakkara
Dandanakar rakkattakkar rakkattakkar rak
Dandanakar rakkattakkar rakkattakkar rakkattakkara
Dandanakar rakkattakkar rakkattakkar rak

Aa Balugani intilona banthulata
Balcony loki pothe genthulata
O Seenugani inti mundu sindhulata
Sandhuloki pothe yama muddulata

Ye Balugani intilona banthulata
Balcony loki pothe genthulata
Seenugani inti mundu sindhulata
Sandhuloki pothe yama muddulata hoy`
                },
                {
                    id: "2025-MadSquare-song2",
                    title: "Laddu Gaani Pelli",
                    artist: "Bheems Ceciroleo, Mangli",
                    duration: "4:09",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580887/Laddu_Gaani_Pelli_eudwz4.mp3",
                    lyrics: `Aakesuko vakesuko
Lavangala moggesuko
Salakunte vanesuko
Nachchinaka dinnesuko

Maa laddu gani pelli
Ye sudha sakkkannivadu
Godekki dukkanodu
Kattilanti porilanu
Kannetti sudanodu
DP-le marchanodu
BP-ne penchukodu
Yama freshu piece maa vodu

Laddu gaadu maa laddu gaadu
Mama laddu gani pelli
Ika choosuko lolli lolli

Maa laddu gani pelli
Evadu aaputado dinthalli

Lighting-e kottanodu
Dating-e cheyyanodu
Iddaru muggurunaina line lo pettani vadu
First kissu telvanodu
Last pub gunjanodu maakenudku panikiradule

Maa pelli pilla
Maa pelli pilla
Maa pelli pilla Pooja till teenmaru bandh bhaja

Are are are
Maa pelli pilla Pooja dhimithattuvva puttuwataja oy..

Veedu poddhugale levangane pothadu gymu
Veenikasale padadu brandy whiskey rummu
Paisa kharchu pettanodu
Raatiraite bayatapodu veedo jemmu

Atlana! Idi pubulo untadi friday nightu
Beauty parlour ke nelaku rendu lakshalu pettu
Heels choodu reels choodu
Galli bayata fans choodu
O my jodu
Insta followers choodu

Hey pilla thoti pelli gaani
Kalipesi thalipeste nelake result vastadi
Poyyimeeda…
Poyyimeeda giraka daani buggapatti koraka
Ehe..

Valla ayya chooste uraka
Ne dorakanante doraka
Ehe..

Poyyimeeda giraka daani buggapatti koraka
Valla ayya chooste uraka
Ne dorakanante doraka`
                },
                {
                    id: "2025-MadSquare-song3",
                    title: "Swathi Reddy",
                    artist: "Bheems Ceciroleo, Swathi Reddy UK",
                    duration: "3:51",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580865/Swathi_Reddy_dxwsim.mp3",
                    lyrics: `Jamachettuku kaasthay jama kayalo
Jama kayalo (jama kayalo)
Mamidi chettuku kaasthay mamidi kayalo
Mamidi kayalo (mamidi kayalo)

Are malle chettuku poosthay malle puvvulo
Malle puvvulo (malle puvvulo)
Banthi chettuku poosthay banthi puvvulo
Banthi puvvulo (banthi puvvulo)

Jadalona pedatharu malle chendulu
Medalona vestharu poola dandalu
Mudiripothoo untayi bendakayalu
Moju penchuthuntayi mulakkayalu

Edevainaa gaani evaremanna gaani
Nene nene nene Dee Dee Dee

Naa mudduberu (ha nee muddu peru)
Naa mudduberu pettukunna Swathi Reddy
Ne muttukunte baggumandi pachcha endugaddi

Nee mudduberu baagunde Swathi Reddy
O muddu pettukuntame vachchi ekku bandi

Neeku name untadi
Naaku fame untadi
Neeku figure untadi
Maaku pogaru untadi ey ey ey

Thiragani desham ledu
Eyyani vesham ledu
Nadawani khandam ledu
Pettani dandam ledu.. (ay baboy)

Naa mudduberu (ha nee muddu peru)
Naa mudduberu pettukunna Swathi Reddy
Ne muttukunte baggumandi pachcha endugaddi

Swathi Reddy...
Nee mudduberu baagunde Swathi Reddy
O muddu pettukuntame vachchi ekku bandi

Vasthunna vasthunna vasthunna
Naa mudduberu naa mudduberu naa mudduberu
Naa mudduberu pettukunna Swathi Reddy
Ne muttukunte baggumandi pachcha endugaddi

Cell kemo signal untadi
Pelli kemo laggam untadi
Hey pilla kemo siggu untadi
Daanni gillanamo lolli pedathadi
Lolli lolli..

Naake lendi thondara endi
Rechchipoye rojinkaa mundu mundu unnadi
Nike Mundi badhala bandi dorakinamo
Jajjinaka jamayipothadi

Naa mudduberu (vachindayya vayyaari)
Naa mudduberu abbabbabbabba bba..
Naa mudduberu pettukunna Swathi Reddy
Ne muttukunte baggumandi pachcha endugaddi

Nee mudduberu baagunde Swathi Reddy
O muddu pettukuntame vachchi ekku bandi…..

Pachcha endugaddi
Vachchi ekku bandi`
                },
                {
                    id: "2025-MadSquare-song4",
                    title: "Konte Konte",
                    artist: "Rohini Sorrat",
                    duration: "2:46",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580860/Konte_Konte_ix7t5h.mp3",
                    lyrics: ``
                },
                {
                    id: "2025-MadSquare-song5",
                    title: "Vaccharroi",
                    artist: "Bheems Ceciroleo",
                    duration: "3:02",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580923/Vaccharroi_jh7fjo.mp3",
                    lyrics: `Hey vachaarro mallochaarro
Veellaku haarathi pattandro
Daarilo bharaath kottandro
Hey they are back
To come and rock
Multiplex lo kooda
Mass madness choodandro
Desham mottham dosthaananta DJ pettalro
Illu chillar lekkalu choosi meeru city kottalro

Ye eskoondra memes
Are cheskoondra reels
Raaskoondra headlines 
Idi mad kaadu Mad Max

Hey vachaarro mallochaarro
Veellaku haarathi pattandro
Daarilo bharaath kottandro
Hey they are back
To come and rock
Multiplex lo kooda
Mass madness choodandro
Desham mottham dosthaananta DJ pettalro
Illu chillar lekkalu choosi meeru city kottalro

Ye eskoondra memes
Are cheskoondra reels
Raaskoondra headlines
Idi mad kaadu Mad Max
Max Max Max`
                },
            ]
        },

        // robinhood 
        {
            id: 'movie-2025-Robinhood',
            title: "Robinhood",
            actors: "Nithin, Sree Leela",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619898/Robinhood_z8r4zo_awyt8b.jpg",
            songs: [
                {
                    id: '2025-Robinhood-song1',
                    title: "One More Time",
                    artist: "GV Prakash Kumar, Vidya Vox",
                    duration: "3:17",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750872889/One_More_Time_w8xdfm.mp3",
                    lyrics: `Look isthe chaale Jaanu
Lucky ga feel avutanu
Kick ocche touch isthava
One more time one more time
Thaggailaa kanipisthanu
Hug isthe ice avutanu
Lag vaddu icche inka
One more time one more time

Idivarakennadu mari lene ledu emiti varasa
Chanuvuga thaakina mari kopam raadu thedaane choosa
Suluvuga naccharanna ninne nedu marele bahusha
Kuduruga undade oka chote veedu

Thang tharikita dim dim naa
Siggu vadili ika antunna
Thang tharikita dim dim naa
One more time one more time
Thang tharikita dim dim naa
Haddu cherape antunna
Thang tharikita dim dim naa
Tharikita tharikita tha

Look isthe chaale Jaanu
Lucky ga feel avutanu
Kick ocche touch isthava
One more time one more time
Thaggailaa kanipisthanu
Hug isthe ice avutanu
Lag vaddu icche inka
One more time one more time

Jaa O Jaane Jaa lovely rage ah
Nee body beauty package ah
Jaa O Jaane Jaa chooste freeze ah
Nee valla sleepy damage ah

Day lonu bhoomi meeda stare nuvvanta
Night ayina needa laaga neetho nenunta
Naa dream kotakemo queen eh nuvvanta
Nenemo crown leni king eh ayipothe

Pogarutho thagganu ani naake peru ledule kodava
Padanani ooragaa ninu choosesaanu ittay nacchaavaa
Idivarakennadu mari lene ledu emitii godava
Kuduruga undava oka chote nuvvu

Thang tharikita dim dim naa
Siggu vadili ika antunna
Thang tharikita dim dim naa
One more time one more time
Thang tharikita dim dim naa
Haddu cherape antunna
Thang tharikita dim dim naa
Tharikita tharikita tha

Look isthe chaale Jaanu
Lucky ga feel avutanu
Kick ocche touch isthava
One more time one more time
Thaggailaa kanipisthanu
Hug isthe ice avutanu
Lag vaddu icche inka
One more time one more time`
                },
                {
                    id: '2025-Robinhood-song2',
                    title: "Wherever You Go",
                    artist: "Armaan Malik",
                    duration: "2:35",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750872862/Wherever_You_Go_sxufpz.mp3",
                    lyrics: `Goochee babu nuvvu guchchi guchchi choododde
Little heart mari gichchi povodde
Love you Rashna antu nee vente paddane
90's kid ne nenele

First look lo all out ye
Energy adagada ninnu boost ye
Amul baby la kiss isthe
Taste needi best ye
Gold medal ne ivvochche
Switch kaanule nammochche
Pattu lantide nee touch ye
Lux soap mechche

Wherever you go
I follow
Wherever you go
I follow
Wherever youver you go
I follow be o u o...
Wherever you go
I follow
Wherever you go
I follow
Wherever you go
I follow be

Fresh juice bebey
Naa fruity beauty neevele
Mounth tough bebey
Ceat lagane
Base thand bebey
Nee thumbs up thumbs up nenele
Swaad zindagi ka
Nee dairy milk neevele

Jodi emo so strong
Untame so long
Fevicol la bond manadenamma
Age emo santoor
Craze eh nee sontooru
Cheyyinka pyaar eh bomma
Aa perk tintavu
Light ayipothavu
Naa heart weight penchesthavu
I love you awake avuthavu
Dimaak needeleve
Wherever you go
I follow
Wherever you go
I follow
Wherever you go
I follow be o u o

Wherever you go
I follow
Wherever you go
I follow
Wherever you go
I follow be`
                },
                {
                    id: '2025-Robinhood-song3',
                    title: "Adhi Dha Surprisu",
                    artist: "Anurag Kulkarni, Neeti Mohan",
                    duration: "4:04",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750873469/Adhi_Dha_Surprisu_hipith.mp3",
                    lyrics: `Many Many Days Ago
Mamidipallilo Rathiri Thagilade
Paike Yegabade Samayam Lo
Panta Digubadi Raledannade
Adigane Vadinadigane
Aa Panta Yedho Chupinchade
Vari Kdhe Mirape Kadhe
Cheruku Kadhe Vadu Penchina Panta Ganjaye
Adhi Dha Surprisu Adhi Dha Surprisu
Adhi Dha Surprisu Adhi Dha Surprisu

Jublee Hills Lo Oka Posh Pub Lo
Oka Class Kurrade yama Flash Ayyade
Chinni Annade Nannu Minni Annade
Konchem Dooramunnade
Yentho Gouravinchade
Thana Vente Rammannade
Thanu Vellake Nenu Vellane
Vadiki Jodi Kadhantu
Vadi Dady tho Munni Ni Pinni Gaa Marchade
Adhi Dha Surprisu Adhi Dha Surprisu
Adhi Dha Surprisu Adhi Dha Surprisu

Buli Buli Buggala Boy Friend
Bengaluru Lona Kalisada
Hand Yesthe Second hand Ayyentha
Handsome Gaa Unde Vade
Vadi Wallet Lo Oka Ammayi
Photo Theesane Velidheesane
Model Kadhe Girl Friend Kadhe
Mari Yevaru Ante
Adhi Surgery Mundhu Vadene

Adhi Dha Surprisu

Adhi Dha Surprisu
Are Kottina Lottery Expiry Ayithe
Adhi Dha Surprisu
Dhachina Notlu Radhaithe
Adhi Dha Surprisu
Apple Phone Ki Apple Pandu Vasthe
Adhi Dha Surprisu
Kunda Biriyani Lo Kunde Bagunte
Adhi Dha Surprisu`
                }
            ]
        },

        // Court
        {
            id: 'movie-2025-CourtStateVsANobody',
            title: "Court - State Vs. A Nobody",
            actors: "Priyadarshi, Harsh Roshan, Sridev",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619910/Court_wixqud_zmtieb.jpg",
            songs: [
                {
                    id: "2025-CourtStateVsANobody-song1",
                    title: "Premalo",
                    artist: "Anurag Kulakarni & Sameera Bharadwaj",
                    duration: "5:25",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580878/Premalo_thpt3h.mp3",
                    lyrics: `Vela vela vennelantha
Meedha vaali velugunantha
Moyamante nenu entha.. Arere…

Chinni gunde unnadhentha
Haayi nimpi gaalinantha
Oodhamante oopirentha.. Arere…

Kallu rendu pusthakaalu
Bhasha leni aksharaalu
Choopulone ardhamayye.. Anni maatalu…

Mundhu leni aanavaalu
Leniponi kaaranaalu
Kotha kotha onamaalu.. Enni maayalu…

Kathalenno cheppaaru
Kavithalni raasaaru
Kaalaalu dhaataaru
Yuddhaalu chesaaru
Premalo.. Thappu ledhu premalo..

Kathalenno cheppaaru
Kavithalni raasaaru
Kaalaalu dhaataaru
Yuddhaalu chesaaru
Premalo.. Thappu ledhu premalo..

Vela vela vennelantha
Meedha vaali velugunantha
Moyamante nenu entha.. Arere…

Aakaasham thaakaali ani undha
Naatho raa chupisthaa aa saradhaa
Nelanthaa chuttese veelundhaa
Emundhi premisthe saripodhaa

Aha mabbulanni kommalai
Poolavaana pampithe
Aa vaana peru prema le
Dhaani ooru manamu le
Ye manasuni yemadagaku ye rujuvini.. Oh.. Anthe.. Oh..

Kathalenno cheppaaru
Kavithalni raasaaru
Kaalaalu dhaataaru
Yuddhaalu chesaaru
Premalo.. Thappu ledhu premalo..

Enthunte entantaa dhooraalu
Rekkallaa ayipothe paadhaalu
Unnaayaa bandhinchi dhaaraalu
Oohallo untunte praanaalu

Are ningi loni chukkale
Kindhakochi cherithe
Avi neeku edhuru nilipithe
Undipova ikkade
Jaabili itu cherenu porapaatuna ani.. Oh.. Inthe.. Oh..

Kathalenno cheppaaru
Kavithalni raasaaru
Kaalaalu dhaataaru
Yuddhaalu chesaaru
Premalo.. Thappu ledhu premalo..

Vela vela vennelantha
Meedha vaali velugunantha
Moyamante nenu entha.. Arere…

Chinni gunde unnadhentha
Haayi nimpi gaalinantha
Oodhamante oopirentha.. Arere…

Kallu rendu pusthakaalu
Bhasha leni aksharaalu
Choopulone ardhamayye.. Anni maatalu…

Mundhu leni aanavaalu
Leniponi kaaranaalu
Kotha kotha onamaalu.. Enni maayalu…

Kathalenno cheppaaru
Kavithalni raasaaru
Kaalaalu dhaataaru
Yuddhaalu chesaaru
Premalo.. Thappu ledhu premalo..

Kathalenno cheppaaru
Kavithalni raasaaru
Kaalaalu dhaataaru
Yuddhaalu chesaaru
Premalo.. Thappu ledhu premalo..`
                },

            ]
        },

        // Mazaka
        {
            id: 'movie-2025-Mazaka',
            title: "Mazaka",
            actors: "Sundeep Kishan, Ritu Varma",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619897/Mazaka_sd42jj_mpn8f9.jpg",
            songs: [
                {
                    id: "2025-Mazaka-song1",
                    title: "Sommasilli Pothunnave",
                    artist: "Revanth",
                    duration: "2:54",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581035/Sommasilli_Pothunnave_c3dut1.mp3",
                    lyrics: `Sommasilli pothunnave
O Chinna Ramulamma
Chemmagilli muddiyyave
Choopinchave naapai prema

Sommasilli pothunnave
O Chinna Ramulamma
Chemmagilli muddiyyave
Choopinchave naapai prema

Nalla nallani kallatho
Naajooku nadumutho nannagame jestive
Gunde gaalilo theluthu
Aaratalaaduthu nee ollo ne vaalene

Suttu dippukunnave
O Chinna Ramulamma
Semata sukkoole theeseyyake
Nee seera konguke mudiveyyave..

Jonna senu kaada
Saddi buvva laaga kammani nee maatale
Yeti paruguloni naatu padawallagaa
Kadile nee adugule..

Koneti neellalo weligeti deepallo
Nee soopule unnave
Nee vaipe choosthunna nee kosam chasthunna
O saari choodave..

Pattukunta nee chethine
Enni janmalaina viduvane
Kattukove nee kongune
Nuduti kunkamlaa nenuntane..

Sommasilli pothunnave
O Chinna Ramulamma
Chemmagilli muddiyyave
Choopinchave naapai prema

Nalla nallani kallatho
Naajooku nadumutho nannagame jestive
Gunde gaalilo theluthu
Aaratalaaduthu nee ollo ne vaalene

Suttu dippukunnave
O Chinna Ramulamma
Semata sukkoole theeseyyake
Nee seera konguke mudiveyyave..`
                },
                {
                    id: "2025-Mazaka-song2",
                    title: "Pagili",
                    artist: "Mahalingam, Sahithi Chaganti, Prabha",
                    duration: "3:36",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580939/Pagili_dn8zqd.mp3",
                    lyrics: `Hey Pagili Hey Pagili Hey Pagili Pagili Pagili
Pagilipoyetattu DJle Pettinchedhama… Aa… Aa
Pagale Hey Pagale Hey Pagale Pagale
Hey Pagale Chukkalu Techchi Discole Adinchedhama… Aa… Aa

Pattu Panche Etti Kattane Pillo
Kattu Jaarakunda Dopey Kuchchillu
Daddarillipoyetattu Adedham Vidhullo
Mogutunna Maasu Beatuki… I.. I

Hey Pagili Hey Pagili Hey Pagili Pagili Pagili
Pagilipoyetattu DJle Pettinchedhama… Aa… Aa
Pagale Hey Pagale Hey Pagale Pagale
Hey Pagale Chukkalu Techchi Discole Adinchedhama… Aa… Aa

Hey Kottu Kottu Kottu Kottu
Hey Adi Adi Atta Kottu
Hey Kottu Kottu Pagiletattu
Hey Ooru Vaada Eela Vesetattu

Tella Tolu Ammai Talupu Golleme Veseyyi
Tingarodi Tondara Chootte Teenmare Ee Reyi
Neelikalla Bujjai Nela Meeda Parupeyyi
Patte Mancham Kollu Pattu Tappettunnaayi

Okkati.. Rendu Mudu Ratrulle
Kottukuni Attarle Chedhdham Raaye Jatharle
Okkati Rendu Naati Pillalne
Kandam Cricket Teamalle Day Night Sixerlle…. E.. E

Hey Pagili.. Hey Pagili..

Hey Pagili Hey Pagili Hey Pagili Pagili Pagili
Pagilipoyetattu DJle Pettinchedhama… Aa… Aa
Hey Pagale Hey Pagale Hey Pagale Pagale
Hey Pagale Chukkalu Techchi Discole Adinchedhama… Aa… Aa

Pattu Panche Etti Kattane Pillo
Kattu Jaarakunda Dopey Kuchchillu
Daddarillipoyetattu Adedham Vidhullo
Mogutunna Maasu Beatuki… I.. I

Hey Pagili Hey Pagili Hey Pagili Pagili Pagili
Pagilipoyetattu DJle Pettinchedhama… Aa… Aa
Hey Pagale Hey Pagale Hey Pagale Pagale
Hey Pagale Chukkalu Techchi Discole Adinchedhama… Aa… Aa`
                },
                {
                    id: "2025-Mazaka-song3",
                    title: "Bachelors Anthem",
                    artist: "Dhanunjay",
                    duration: "3:23",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580988/Bachelors_Anthem_wnxk1c.mp3",
                    lyrics: `Hey status single-eh ayyo
Partner dorakatle ayyo
Ontari muchchatle ayyo. Ayyayo

Cooking tappatle ayyo
Washing nacchatle ayyo
Duppatlu nindatle ayyo ayyayo

Ennaalli age baaru ekaantam
Bharya leni baagotham
Paadu shani em jestam

Still memu bachelors-e
Jodu paadu lene lede
Inka memu bachelors-e
Eedu jodu jaade lede

Still memu bachelors-e
Pilla peechu oose lede
Hey inka memu bachelors-e
What to say

Jodu paadu lene lede
Eedu jodu jaade lede
Pilla peechu oose lede

Aakaleste muddalu petti
Muddulu pette pilledi
Late goste thalupulu theeyani thingari bulledi

Sunday poota taanu nenu
Santhaku poye thrill edi
Holiday ki solo tripu etla elleli

Birthday-lu vachchi pothunnayi
White hairs thongi choosthunnayi
Kannetti inka naa face vanka
Choodadu ye ammayi

Janta lenno kalla mundunnayi
Nannu choosi navvukuntunnay
Paadu yavvanam pandi poyelope
Moguda naa sannayi

Still memu bachelors-e
Jodu paadu lene lede
Inka memu bachelors-e
Eedu jodu jaade lede

Still memu bachelors-e
Pilla peechu oose lede
Hey inka memu bachelors-e
What to say

Jodu paadu lene lede
Eedu jodu jaade lede
Pilla peechu oose lede`
                },
                {
                    id: "2025-Mazaka-song4",
                    title: "Baby Maa",
                    artist: "Leon James",
                    duration: "3:28",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750580979/Baby_Maa_mvt5op.mp3",
                    lyrics: `బెడ్ లైట్ అయినా లేని
చీకటి లైఫ్ లోకి
ఫ్లడ్ లైటల్లే వచ్చావే
బేబీ నువ్వే..

మట్టి రోడ్ అయినా లేని
మారుమూల ఊరిలోకి
రింగ్ రోడ్ వేసుకు వచ్చావే
బేబీ నువ్వే..

సో సో గానే సాగే
సోలో సోలో జిందగీలో
సోల్-మెట్ నువ్వైపోయావే…

లో లో నాలో నాలో
ఎంతో లోగా ఉండే నన్నే
ఫ్లో లో లవ్ దింపవే…

హే బేబీ మా బేబీ మా ఒంటరి సున్నా నేనమ్మా
బేబీ మా బేబీ మా పక్కన వనే నువ్వమ్మా
బేబీ మా బేబీ మా ఇట్టా సెటైపోదామా
లవే లైఫ్ అందమా
లవ్ కి లైఫ్ ఇద్దామా

బేబీ మా బేబీ మా ఒంటరి సున్నా నేనమ్మా
బేబీ మా బేబీ మా పక్కన వనే నువ్వమ్మా
బేబీ మా బేబీ మా ఇట్టా సెటైపోదామా
లవే లైఫ్ అందమా
లవ్ కి లైఫ్ ఇద్దామా

పెళ్లి చేసుకుని మా ఇంటికొస్తే
అసలు లైఫ్ ఎలా ఉంటుంది తెలుసా?

కిచెనే రెస్టారెంటు
బాల్కనీ కాఫీ షాపు
ఇంట్లో ప్రతి చోటు లవ్ స్పాటు..

షవరే వాటర్ ఫాలు
టీవీయే సినిమా హాలు
ఇంట్లో బెడ్ రూమ్ కానిది ఏ చోటు

మారేటి మారేటి ఎవ్రి డేటు
మనం వెళ్ళాలి డేటు
అది ఫస్ట్ టైం అయినట్టు

ప్రతి రోజు ప్రేమికుల రోజైనట్టు ..
బ్రతికేద్దాం మనం నూరేళ్ళపాటు

హే బేబీ మా బేబీ మా ఒంటరి సున్నా నేనమ్మా
బేబీ మా బేబీ మా పక్కన వనే నువ్వమ్మా
బేబీ మా బేబీ మా ఇట్టా సెటైపోదామా
లవే లైఫ్ అందమా
లవ్ కి లైఫ్ ఇద్దామా

బేబీ మా బేబీ మా ఒంటరి సున్నా నేనమ్మా
బేబీ మా బేబీ మా పక్కన వనే నువ్వమ్మా
బేబీ మా బేబీ మా ఇట్టా సెటైపోదామా
లవే లైఫ్ అందమా
లవ్ కి లైఫ్ ఇద్దామా

బెడ్ లైట్ అయినా లేని
చీకటి లైఫ్ లోకి
ఫ్లడ్ లైటల్లే వచ్చావే
బేబీ నువ్వే..

మట్టి రోడ్ అయినా లేని
మారుమూల ఊరిలోకి
రింగ్ రోడ్ వేసుకు వచ్చావే
బేబీ నువ్వే..`
                },
            ]
        },

        // laila
        {
            id: 'movie-2025-Laila',
            title: "Laila",
            actors: "Viswak Sen, Akanksha Sharma",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619892/Laila_ze8igv_vhwjht.jpg",
            songs: [
                {
                    id: '2025-Laila-song1',
                    title: "Sonu Model",
                    artist: "Narayanan Ravishankar, Reshma Shyam",
                    duration: "4:30",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750872867/Sonu_Model_trgchl.mp3",
                    lyrics: `Aaja Sonu bhai
Bhai bhai Sonu model
Model model Sonu model

Hey whistle whistle whistle nuvvu kodathav whistle-u
Pagulu pagulu pagulu prathi center pagulu
Hey thirugu thirugu thirugu mee dimmalu thirugu
Are maa Sonu style-e veru

Hey chinna pedda theda ledu aallu
Entertainment full-u
O mukka thini cheyye vesthe veedu
Full beautiful avuthade veedu

Ye manchode pillode soggaade
Full countrylo ledammo ee breed asalu
Vachchado galleelo poreele full gili ayipotharo
Hey touch me Sonu

Hey bhale bhale gillele
Bhale bhale gillele
Boss prathi scene-u climax-e le

Bhale bhale gillele
Bhale bhale gillele
Sonu muttukunte feel-e vere

Model model Sonu model
Model Sonu model
Model model Sonu model
Model Sonu model

Trendy guntadu veedu dilluluntadu (Sonu)
Chanti pillawadi laaga penches kuntaru (Sonu)
Pedda guntadu kaani madatha pedathadu (Sonu)
Choosukoni undadamma mass veedu

Raa ilaga nadiga majaka
Just ilaga shuruve chesiga
Clap ivvaga naadi star choodika
Dil gadane gablainth cheddam ilaga

Sachhipoyetappudu pattukeledi naluguritho
Preme ga.. gnapakale ga..
Saayam chesi choodu okarikaina nikocche
Feeling-e.. abbo veruraa
Center lo nilchoni chepthannane
Twitter lo untayi mana selfies-e
Poteeki vachcharo models-e
Ee kisiki dhuma chesthale
You you naughty Sonu

Hey bhale bhale gillele
Bhale bhale gillele
Boss prathi scene-u climax-e le

Bhale bhale gillele
Bhale bhale gillele
Sonu muttukunte feel-e vere

Hey whistle whistle whistle (model model)
Hey pagulu pagulu pagulu (Sonu model)
Hey whistle whistle whistle (model model)
Manaku premento mukhyam bigulu (Sonu model)

Boss kottu malli
Model
Sonu model`
                },
                {
                    id: '2025-Laila-song2',
                    title: "Icchukundam Baby",
                    artist: "Adithya RK, MM Manasi",
                    duration: "3:28",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750872859/Icchukundam_Baby_sosx6c.mp3",
                    lyrics: `Hey ichchukundam baby baby baby
Muddu ichchukundam baby baby baby
Hey ichchukundam baby baby baby
Ika rechchipodam baby baby baby

Hey reddu hotu dressu lona reddu rojamma
Ne reddu signal paddattu ga aaganoyamma
Na rendu kallu chalatledu o naa bujjima
Ninnu headdu meeda pettukuntamaa..

Hey wild fireu antukundi gundelothullo
Reddu wineu thaginattu uguthunnaro
Once moreu dance neetho chesukuntaro
Vasthadu vacheyy ro..

Hey ichchukundam baby baby baby
Muddu ichchukundam baby baby baby
Hey ichchukundam baby baby baby
Ika rechchipodam baby baby baby

Dasu dasu dasu masuka dasu
Classu masu rendu kalipina basu
Dasu dasu dasu masuka dasu
Dille gallanthayye icchey placeu

First look lone neeku lock ayipoyane
Lip lock pettesaka link ayipoyane
Hey oka touch lone neeku melt ayipoyane
Malli malli kavalanthu flirt ayipoyane

Hey kallalo nee vaalu poster vesukunnaane
Hey hittu bomma blockbuster raasukunnaane

Zindagi nee veelunama raasi istharo
Vasthadu hey vacheyy ro..

Hey ichchukundam baby baby baby
Muddu ichchukundam baby baby baby
Hey ichchukundam baby baby baby
Ika rechchipodam baby baby baby

Dasu dasu dasu masuka dasu
Classu masu rendu kalipina basu
Dasu dasu dasu masuka dasu
Dille gallanthayye icchey placeu

Hey reddu hotu dressu lona reddu rojamma
Ne reddu signal paddattu ga aaganoyamma
Na rendu kallu chalatledu o naa bujjima
Ninnu headdu meeda pettukuntamaa..`
                },
                {
                    id: '2025-Laila-song3',
                    title: "Oho Rathamma",
                    artist: "Penchal Das, Madhu Priya",
                    duration: "3:07",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750872858/Oho_Rathamma_as7kqy.mp3",
                    lyrics: `Oho Rattamma Naaga Rattamma
Nadakalo balukalike Rattamma

(Koy koy koy koy koy koy kodni koy
Koy koy koy koy koy koy kodni koy)

Oho Rattamma Naaga Rattamma
Nadakalo balukalike Rattamma
Nadakalo nagarikam Rattamma
Nadempu nadumudana Rattamma

Oho.. Oho Oho Hoho
Oho.. Oho Oho Oho Oho Oho

Nee chinni chethulaku neeli varnam gajule Rattamma
Nee chinni kallaku chandravanka kadiyale Rattamma

Oho Rattamma Naaga Rattamma
Nadakalo balukalike Rattamma
Nadakalo nagarikam Rattamma
Nadakalo nagarikam Rattamma..

Oho.. Oho Oho Hoho
Oho.. Oho Oho Oho Oho Oho
Koy koy koy koy koy koy kodni koy
Koy koy koy koy koy koy kodni koy
Koy koy koy koy koy koy kodni koy

Chukkala koka kattukoni
Seeti poola raika thodigi
Addamula naadu mokhamu
Ninnu choosi nilavalenoo

Nuvvu choose soopulaku
Sannajaajula vaana kurise
Sanna navvu sakkkanidana
Sandhu choosi ninnallutha

Oho Rattamma Naaga Rattamma
Nadakalo balukalike Rattamma
Nadakalo nagarikam Rattamma

Oho Rattamma Naaga Rattamma
Nadakalo balukalike Rattamma
Nadakalo nagarikam Rattamma
Nadempu nadumudana Rattamma
Nadempu nadumudana Rattamma

Oho.. Oho (Koy koy)
Oho.. Oho Oho Oho Oho Oho
Koy koy koy koy koy koy kodni koy
Hey... Hey....`
                },
                {
                    id: '2025-Laila-song4',
                    title: "Atak Matak",
                    artist: "Nakash Aziz, Aditi Bhavaraju",
                    duration: "3:21",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750872874/Atak_Matak_aha3br.mp3",
                    lyrics: `Atak Matak Ke Atak Matak
Atak Matak Ke Atak Matak
Atak Matak Ke Atak Matak
Atak Matak Ke Atak Matak

Mundunnadi bomb-o
Atom bomb baapure ee figaru..
Manmadhudai lechaa
Ninnu choosinaakane my dearu…
Nenavthagaa nee loveru
Nee thode naa full poweru
Bakaraala padi untaa nee deggara bangaru….

Are naa naa naa duniyalona
Monagaadu ledu neekanna
Ituvaipainaa atuvaipainaa
Figarundadu naakanna

Nuvvu naa paina nenu nee paina
Padipothe kodi koothenaa..
Adi pagalainaa nadi nightainaa
Ding dong dol naa…

Oy.. Atak Matak Ke Atak Matak Ke
Aadak pori naa tillana
Atak Matak Ke Atak Matak Ke
Galli love story itu mama

Atak Matak Ke Atak Matak Ke
Maja chesuko raa mama
Cheddamaa hungama
Nee love lo nenu coma..

Ventaadakamma divana
Chanundi ee story lona
Mundundi gift thattukomma
Majnu ayipokamma

Mattekkutondi kallalona
Picchekkutundi lona lona
Osari ravammaa itu ravamma bomma…

Raja.. Ve Raja.. Ve nenunte nuv rajave
Rani naa rani neekosam chastale

Are naa naa naa duniyalona
Monagaadu ledu neekanna
Ituvaipainaa atuvaipainaa
Figarundadu naakanna

Nuvvu naa paina nenu nee paina
Padipothe kodi koothenaa..
Adi pagalainaa nadi nightainaa
Ding dong dol naa…

Oy.. Atak Matak Ke Atak Matak Ke
Aadak pori naa tillana
Atak Matak Ke Atak Matak Ke
Galli love story itu mama

Atak Matak Ke Atak Matak Ke
Maja chesuko raa mama
Cheddamaa hungama
Nee love lo nenu coma..

O bangaru Laila
O bombu raa Laila
Naa loveru Laila
Killer Laila
Laila Laila Laila

O bangaru Laila
Naa bangaru Laila
Naa loveru Laila
Killer Laila
Laila Laila Laila

Atak Matak Ke Atak Matak
Atak Matak Ke Atak Matak
Atak Matak Ke Atak Matak
Atak Matak Ke Atak Matak`
                }
            ]
        },

        // Thandel
        {
            id: 'movie-2025-Thandel',
            title: "Thandel",
            actors: "Naga Chaitanya, Sai Pallavi",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619905/Thandel_etaxfv_snjzsk.jpg",
            songs: [
                {
                    id: "2025-Thandel-song1",
                    title: "Namo Namah Shivaya",
                    artist: "Anurag Kulkarni, Haripriya",
                    duration: "4:52",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581178/Namo_Namah_Shivaya_oeywlg.mp3",
                    lyrics: `Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Hey dhama dhama dham
Damarukaanni Dhanchikottu
Aastadikkula Adiretattu
Thandaveswara..

Namo Namah
Namo Namah
Namo Namah Shivaya

Bham bham bham Modalupettu
Amruthaanni Panchipettu
Gunde Vendikondaiyettu
Kundaleshwara..

Namo Namah
Namo Namah
Namo Namah Shivaya

Jai Shankara
Jai Jai Jai Jai Shankara
Nippu kannu ippi
Janam Tappulu Kalcheiyyara

Jai Shankara
Shiva Shiva Shiva Shankara
Trisulam tippi supi
Manchi Daari Nadapara

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Thappu chesthe Brahma thalane Thunchinavura
Vedukunte Vishanaina Minginavura

Namo Namah
Namo Namah
Namo Namah Shivaya

Aadhi Parashakthi Ninnu Korukundira
Sustilona Modhati Prema Kadhe Nidhira

Namo Namah
Namo Namah
Namo Namah Shivaya

RaRa Shivaratri Sundara
Ma Ratha Marchi Uddarinchara
Aananthamaina ni Premalo
Ravantha Maku isthe
Bhoomi Swargamounura

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Aadhi Premika Niku Polika
Ledhu Ledhika Jagaana
Bhaktha Kotiki Unna Korika
Tirchuthavayya Swayaana

Eswari Kosam Aardhanarishwaarudaiyyavu
Lokanne yele Parameshwaruda
Yelotu Ranivu Yeppudu Thoduntavu
Magadante Nuvve Maheshwaruda
Aadhi nuvve Antham nuvve
Kaapade Aapdbhaandhaavudaa..

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Namo Namah
Namo Namah
Namo Namah Shivaya

Siva siva siva
Siva siva siva
Siva siva siva

Siva siva siva
Siva siva siva
Siva siva siva

Siva siva siva
Siva siva siva
Siva siva siva

Namo Namah
Namo Namah
Namo Namah Shivaya

Siva siva siva
Siva siva siva
Siva siva siva

Namo Namah
Namo Namah
Namo Namah Shivaya

Siva siva siva
Siva siva siva
Siva siva siva

Namo Namah
Namo Namah
Namo Namah Shivaya

Siva siva siva
Siva siva siva
Siva siva siva

Namo Namah
Namo Namah
Namo Namah Shivaya`
                },
                {
                    id: "2025-Thandel-song2",
                    title: "Aazaadi",
                    artist: "Nakul Abhaynkar",
                    duration: "4:16",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581155/Aazaadi_mds5kt.mp3",
                    lyrics: `Aa Zaa Di Aazaadi Aa Zaa Di Aazaadi
Aa Zaa Di Aazaadi Aa Zaa Di Aazaadi

Bigisina Sankela Thenchadamera
Aa Zaa Di Aazaadi
Mugisina Darina Mundhadugera
Aa Zaa Di Aazaadi

Sainyam Leni Samaram Lo
DHairyam Ayudhamai Padhara
Idi Nee Hakkani Adigithe
Aape Dhamme Yevadidhira

Aa Zaa Di Azaadi Aa Zaa Di Aazaadi
Aa Zaa Di Azaadi Aa Zaa Di Aazaadi

Kaale Kaale Nippullona
Mande Mande Ukku Theega
Undi Undi Okkasare Churakatthaipodha
Sweccha Rajyam Thechukundhi
Rajyangaalu Rasukundhi
Rajula Kaalam Poyindhi Ika Ardham Kaledha

Manamendhuku Manakendhuku
Anukovadam Modhati Otami
Manadhe Idi Mana Kathe Idi Antu Nadavaraa

Aazaadi (Aazaadi)
Aazaadi (Aazaadi)
Aazaadi Aazaadi Aazaadi
Aazaadi Aazaadi Aazaadi
Aazaadi Aazaadi Aazaadi
Aazaadi Aazaadi Aazaadi
Aa Zaa Di Azaadi Aa Zaa Di Azaadi
Aazaadi

Thoota Gunde Guri Pettiunna
Pranam Theese Aapadhalunna
Desam Jenda Yegire Vela
Vandanamagadhugaa

Chuttu Neeke Kanchesunna Sathruvulantha Kappesunna
Muppe Dhati Muvyanriyalki Cheyira Maryadha

Janmichina Ee Bhoomiki Runapadi Undhi Oopiri
Ninadhinchudham Manamandaram VandeMataram
Vande….. Matharam Vande…..Mataram
VandeMataram VandeMataram
VandeMataram Aazaadi VandeMataram
VandeMataram Aazaadi VandeMataram`
                },
                {
                    id: "2025-Thandel-song3",
                    title: "Bujji Thalli",
                    artist: "Javed Ali",
                    duration: "4:08",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581154/Bujji_Thalli_dtvlbn.mp3",
                    lyrics: `Gaalilo Oogisalaade Deepam La Oogisalaade
Nee Oosandhaka Naa PraaNam
Nallani Mabbulu Chuttina Chandrudilaa
Cheekati Kammenu Nee Kaburandhaka Naa Lokam

Sudigalilo padi padi leche
Padavalle thadabaduthunna

Nee Kosam Vechundhe Naa PraaNam
O Bujji Thalli
Naa Kosam O Maataina Maataade
Naa Bujji Thalli

Neeruleni Chaepalle
Thaaraleni Ningalle
Jeevamedhi Naalona
Nuvvu Maataladandhe

Malli YaaLakosathaane
Kaalla Yella Padathaane
Lempalesukuntaane
Inka Ninnu Idipone

Uppuneeti Muppuni Kooda
Goppaga Daate Gattonne
Neekanti Neetiki Maathram
Kottukupothaane

Nee Kosam Vechundhe Naa PraaNam
O Bujji Thalli
Naa Kosam O Maataina Maataade
Naa Bujji Thalli

Inni Naalla Mana Dooram
Theeyyanaina O Viraham
Chedhulaaga Maarindhe
Andhiraaka Nee Gaaram

Denikaanukeeyaale
Yentha Bujjaginchaale
Bettu Nuvvu Dinchelaa
Lancham Yenti Kaavale

Gaali Vaana Jaada Ledhe
Ravvanthaina Naachuttu Aynaa
Munigi Pothunnaane
Dhaare chupettu

Nee Kosam Vechundhe Naa PraaNam
O Bujji Thalli
Naa Kosam O Maataina Maataade
Naa Bujji Thalli`
                },
                {
                    id: "2025-Thandel-song4",
                    title: "Hilesso Hilessa",
                    artist: "Nakash Aziz, Shreya Ghoshal",
                    duration: "3:49",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750581145/Hilesso_Hilessa_blutdw.mp3",
                    lyrics: `Enthentha Dooranni Nuvvu Nenu
Mosthoovunna
Asalintha Alupe Raadhu

Yenneni Teeralu Neeku Naaku
Madhyana Unna
Kaasthayina Adde Kaadhu

Neetho Unte Theliyadhu Samayam
Nuvu Lekunte Yenthanyaayam
Gadiyaramlo Seconula Mulle
Gantaki Kadhilindhe

Neetho Unte Karige Kaalam
Nuvvu Lekunthe Kadalanu Antu
Nelalo Unde Thedi Kuda Yedadayindhe

Hailesso Hailessa Neevaipe
Terachaapanu Tippesa
Hilesso Hilessa Nuvvostaaavani
Mustabai Choosa

Gaallo Egirostha
Meghaallo Telostha
Nee Vollo Valedhaaka
Usuru Oorukodhu

Raashaa Rangulatho
Muggesha Chukkalatho
Ninne Choosedhaaka Kanulaku
Niddura Kanabadadhu

Nee Paluke Naa Gundelake Alala
Chappudanipisthundhe
Ee Gaale Veestunde Nee Pilupalle

Hilesso Hilessa Neevaipe
Terachaapanu Thippesa
Hilesso Hilessaa Nuvvosthaaavani
Mustaabai Choosa

Praanam Pothunnattu
Unde Nee Meedhottu
Kallo Unde Nuvvu
Kallaku Yedurugunte

Nela Ningi Antu Teda Lenattu
Thaarallone Nadicha Nuvvu Naa
Pakkana Nilabadite

E Ranga Leni Premalo Prema
Annade Undadule
Teeraaka Teepega Ee Vedanale

Hilesso Hilessa Neekosam
Sandraale Dattesa
Hilesso Hilessa Neekosam
Premanta Pogesa`
                },
            ]
        },

        // Sankranthiki Vasthunnam
        {
            id: 'movie-2025-SankranthikiVasthunnam',
            title: "Sankranthiki Vasthunnam",
            actors: "Venkatesh, Meenakshi Chaudhary, Aishwarya Rajesh",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619900/Sankranthiki_Vasthunnam_nittl6_wr8wln.jpg",
            songs: [
                {
                    id: "2025-SankranthikiVasthunnam-song1",
                    title: "Blockbuster Pongal",
                    artist: "Venkatesh, Bheems Ceciroleo, Rohini",
                    duration: "3:14",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660447/Blockbuster_Pongal_hpkvj0.mp3",
                    lyrics: `Hey Kookoriko kodi kuda January salipuli debbaki
Enthalesi onikindo e moola pandukundo..
Radham muggu veskunta yetukuri Nagalacchimi
Entha dooramellindo etu poyindo..

Hey Gobbiyeallo Gobbiyeallo
Pandagoche Gobbiyeallo
Everybody Gobbiyeallo
Sing this melody Gobbiyeallo
Pedda pandagandi Gobbiyeallo
Let's get trendy Gobbiyeallo
Come on

Basically (hmm hmm)
Technically (hmm hmm)
Logically (hmm hmm)
Practically (hmm hmm)

Basically technically
Logically practically
And finally…
It's an attitude Pongallu….
It's a blockbuster Pongallu….

Girls girls girls no dangal
Celebrate the Pongal

Hey Gobbiyeallo Gobbiyeallo
Pandagoche Gobbiyeallo
Every yearu Gobbiyeallo
Come to palletooru Gobbiyeallo
Kalisi melisi Gobbiyeallo
Let's have funnu Gobbiyeallo

Actually (hmm hmm)
Annually (hmm hmm)
Colorfully (hmm hmm)
Housefully (hmm hmm)

Actually annually
Colorfully housefully
And finally…. Yir..
It's an attitude Pongallu….
It's a blockbuster Pongallu….`
                },
                {
                    id: "2025-SankranthikiVasthunnam-song2",
                    title: "Guruvarya",
                    artist: "Sri Krishna",
                    duration: "3:31",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660423/Guruvarya_buj237.mp3",
                    lyrics: `Ela theerchukogalam mee runam
Ram ram guruveeram ram ram gurudheeram
Ela marachipogalam aa manchithanam
Ram ram guruveeram ram ram gurudheeram

Guruwarya guruwarya mee maate
Maa manasulakika velugayyaa
Guruwarya guruwarya mee thote
Maa bathukulakoka viluvayyaa

Guruwarya..
Ram ram guruveeram ram ram gurudheeram
Ram ram gurushekharam prabhakaram cha bhaskaram

Mee deggara memu diddina onamalu
Maaku manushulalo icchayokka aanavalu
Menula pai mee betthapu chethi vraalu
Mammu manushuluga maarchindanu trupthi chaalu
Porapatunu sarichesi ammadhanamugaa
Gunapathamu nerpinche nanna gunamugaa
Kadadaaka maa katha nadipinchagaa mee daya..

Guruwarya guruwarya mee badule
Maa adugulakika gudulayyaa
Guruwarya guruwarya mee smruthule
Maa yedalodalani mudulayyaa

Guruwarya..
Ram ram guruveeram ram ram gurudheeram
Ram ram gurushekharam prabhakaram cha bhaskaram

Ram ram guruveeram ram ram gurudheeram
Ram ram gurushekharam prabhakaram cha bhaskaram
Ela theerchukogalam mee runam..`
                },
                {
                    id: "2025-SankranthikiVasthunnam-song3",
                    title: "Meenu",
                    artist: "Bheems Ceciroleo, Pranavi Acharya",
                    duration: "4:48",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660925/Meenu_tvwjsx.mp3",
                    lyrics: `Ey Naa Life Lonuna
aa Prema Page Theena
Pejilo Raasunna Andhala
Aa Peru Meena

Trainer Ga Nenunte
Trainee Ga Vachindha Kunaa
Vastuney Velugedho
Nimpindi Aa Kallalona

Chitranga Aa Roopam Chupullo Chikkindey
Matthicche O Dhoopam Oopirlo Challindey

O Ye O (O Ye O)

Khaakeelaa ThotalLo Kokille Koosaayye
Laateela Remmallo Rojaale Poosaaye

Meenu Tinga Dinga Dinga Ding
Meenu Ting Ding Ding Ding
Meenu Ringa Dinga Ding Ding
Oley Oley

PhoneLo Talking Talking
LawnLo Walking Walking
BrainLo Start Ayyindhey
Naa Meedha Liking

Shanivaaraalaithe Cinema Haallonaa
Selavedainaa Vachindante Shopping Mallonaaa
Saayanthram Aithe Gapchup Stallonaa
Thela Thelaware Good Morning Kai Waiting Thappena

Kalisi Thirigina Parkulu Yenenno
Kalipina Maatalu Inkenno
Maatalu Kalipe Tondaralone
Premalu Mudhirayye

Baby Tinga Dinga DingaDinggg
Baby Tinga Dinga Dinga Ding
Baby Ringa Dinga Dinga Ding
ho oo o oo o

Daily Smiling Smiling
Gaalo Theling Theling
Meeting Kaaledante
Miss Aina Feeling

Chiru Chiru Jallullo
Pedavulu Thadisayye
Thadisina Iddari Pedhavula
Paina Merupulu Merisayye

Urumula Chappudulo
Urakalu Modalaye
Urukuthu Unde Thalapulanemo
Bidiyyamu Laa Paaye

Adugu Adugumunduku sarupukuni
Okariki Okaram Cheruvayi
Oopiri Thagile Tanthaga
Mukhamulu Eduruga Unchame

Bava Tinga Ding Dinga Ding
Bava Tinga Ding Dinga Ding
Bava Ringa Dinga Dinga Ding
ho oo o oo o

Bava Nidhanne Nenu
Bava Ni Vadili Ponu
Bava Nee Love StoryKee
Pedha Fan Ayyananu

O Aakashamayi Ney Vechundagaa
O Jabillilaa Taanochindaga
Gundello Niliche
Gnapakam Meena….`
                },
                {
                    id: "2025-SankranthikiVasthunnam-song4",
                    title: "Chinna Raju",
                    artist: "Revathi Mannava, Madhavi Ravuri, Sudha",
                    duration: "0:57",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660174/Chinna_Raju_kubole.mp3",
                    lyrics: `Sri Rama Rama Lokabheerama
Saketha sarvabhauma Rama Rama
Okkatle baanam okkatle pellam
Seetharamudu Chinna Raju
Okkatle margam okkatle dharmam
Raja Ramudu Chinna Raju
Manchi muthyame Chinna Raju
Macchalenodu Chinna Raju
Aajanubhaavudu Chinna Raju
Adarshamurthy Chinna Raju

Manasunnode Chinna Raju
Maryada Purushudu Chinna Raju
Bhagyam Bhagyam Chinna Raju
Thana Soubhagyam Chinna Raju
Seetharamudu Chinna Raju
Seetharamudu Chinna Raju
Seetharamudu Seetharamudu
Seetharamudu Seetharamudu

Aapandi ehe sir Ramudu enti
Sir kokka flashback undhi
Andulo oka girlfriend undhi
Avida ikkade undhi
Mosagaadu maa Chinna Raju
Aatagaadu maa Chinna Raju`
                },
                {
                    id: "2025-SankranthikiVasthunnam-song5",
                    title: "Godari Gattu",
                    artist: "Ramana Gogula, Madhu Priya",
                    duration: "4:09",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660891/Godari_Gattu_fk5pnf.mp3",
                    lyrics: `He..Godari Gattu Meeda
Rama..Silakave
Ho..Gorintakettukunna
Sanda..Mamave
Godari Gattu Meeda
Rama..Silakave
Gorintakettukunna
Sanda..Mamave

Oorantha Soodu Musuge Thanni
Nidrapoyindhe
Aaratalaanni Teerakapothe
Em Baaguntundhe
Naakantu Unna Oke Okka
Aada Dikkuve
Neetoti Kaakunda
Naa Baadhalu Evaruku
Cheppukuntaane

Godari Gattu Meeda
Rama..Silakane
Gipetti Ginjukunna
Neeku Dorakane

He.. Vistari Mandesi
Pastulu Pettave
Theepi Vasthuvu Chuttu Tirige
Eeganu Chesave
Chee Chee Chee Sigge Leni
Mogudu Garondoy
Guy Guy Guy Guy Mantoo
Meediki Rakondoy

Oy Oy
Gampedu Pillalto
Intini Nimpave
Saapa Dindu Samsaranni
Medikinchave
Irugu Porugu Mundu
Sarasaloddandoy
Guraketti Paadukore
Gurkallaga Mee Vaallu
Em Chestaam Ekkestam
Ittage Dabalu

Pellayi Sennalle
Ayina Kaanee Mastaru
Taggede Ledantoo
Naa Kongenake Padutuntaru

Godari Gattu Meeda
Rama..Silakave
Gorintakettukunna
Sanda..Mamave

Kotha Kokemo
Kanne Kottindi
Thellareloga Thondara Padamani
Chevilo Cheppindi

Ee Maathram Hinte Iste
Sente Kotteyina
O Rendu Moorala Mallelu
Chethiku Chutteyina

Ee Allari Galemo
Allukupommanthe
Maataloti Kaalakshepam
Maney Mantundhe
Abba Kabaddi Kabaddi
Antoo Koothaku Vaccheyna

Evandoy Srivaru
Malli Eppudo Avakasam
Enchakkaa Baagundi
Chukkala Aakasam
Ososi Illala
Baagunde Nee Sahakaram
Muddu Tho Cheripeddaam
Neeku Naaku Madhyana Dooram

Godari Gattu Meeda
Rama Silaka..Ne
Nee Janta Kattukunna
Sanda..Mamane`
                },
                {
                    id: "2025-SankranthikiVasthunnam-song6",
                    title: "Lallayire",
                    artist: "Bheems Ceciroleo",
                    duration: "1:31",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750658919/Lallayire_gftjxy.mp3",
                    lyrics: `Hey Lallayire Layi Lallayire
Gundello edo Lallayire
O.. Lallayire Layi Lallayire
Gunde chappudukedo Lallayire

Hey vaalu kalla vayyari bhama
Entha muddugunnave gumma
Malli malli puttindi prema ninnu choodaga..
Pranamaina puttadi bomma
Pakkanunte chalu lemma
Nuvvu leka undalenamma..

O.. Lallayire Layi Lallayire
Gundello edo Lallayire…
Hey Lallayire Layi Lallayire
Gunde chappudukedo Lallayire….

O..Lallayire Layi Lallayire
Gundello edo Lallayire…
Lallayire Layi Lallayire
Gunde chappudukedo Lallayire….`
                },
            ]
        },

        // Daaku Maharaj
        {
            id: 'movie-2025-daaku_maharaj',
            title: "Daaku Maharaj",
            actors: "Balakrishna, Shraddha Srinath, Pragya Jaiswal",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753619913/Daaku_Maharaj_lfk1tk_mlxozy.jpg",
            songs: [
                {
                    id: '2025-daaku_maharaj-song1',
                    title: "The Rage of Daaku",
                    artist: "Nakash Aziz, Bharath Raj, Ritesh G Rao, K. Pranati",
                    duration: "2:58",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750658878/The_Rage_of_Daaku_ccunsq.mp3",
                    lyrics: `Dega dega dega dekho dekho bega
E gurram paina Narasimham
Chese sawaari ide gaa
Cheddu chedduneeka padagottelaa
Vesadu ikkada paaga

Thana adugula chappudu vinte
Lokaniki inkaa dade gaa
Gookedu neellaku paatu pade
Neeru pedala badhala gonthukagaa

Guppedu buvaki kashtapade
Kadudeenudi chethiki godaligaa

Bhaga bhaga bhuga bhuga
Bhaga bhaga bhuga bhuga
Ragilina rakthamu uppenagaa
Egapadi urukuthu thega badi narukuthu
Baanadiya re.. Bandhooku

(Daaku… Daaku…)

Daaku… Daaku…

Daahiho yaadi
O yaadi veerachi yaadi
Nee kadupulo pooseti rajjaakumari
Nee gadapalo adugese elai thandhi
Elettoodu yedi
Adhigo vachchinde andukove
Atthinti kottha saari

(Daaku… Daaku…)`
                },
                {
                    id: "2025-daaku_maharaj-song2",
                    title: "Sarkaru Ra",
                    artist: "SS Thaman",
                    duration: "4:17",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1751360076/Sarkaru_Raa_hub0aj.mp3",
                    lyrics: `Sarkaru Ra Sarkaru Ra Saarrantu Marginchera
Sarkaru Ra Sarkaru Ra Saarrantu Marginchera
Sarkaru Ra Sarkaru Ra Nippulo Kaneeru Mandinchera

Dandamette Chethulesthe Gandragodalley
Oopiri Aina Usuru Posukunte Ottu Le

Bhayani Daache Chupulaina Maaku Panchaalle
Bandhalu Tenchukunavade Bandipottule

Kummadam Lo Koilamma Sairi Kothalle`
                },
                {
                    id: '2025-daaku_maharaj-song3',
                    title: "Chinni",
                    artist: "Vishal Mishra",
                    duration: "3:40",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660978/Chinni_pfomqs.mp3",
                    lyrics: `Wacky Wacky Jolly Jolly New Today
Rolly Polly Running To The Far Away
Say Chiggy Chiggy Wiggy Wiggy Sing Away
We Locopoco Jumping In The Clouds Today

Wacky Wacky Jolly Jolly New Today
Rolly Polly Running To The Far Away

Chinni Chinni Nenely Neekanni
Ninu Maripistthane Maayedo Panni
Kanni Kanni Nee Veshalin Kenni
Avee Maripisthaye Naalo Lokanni

Oye Oye..!
Raarammandi Rangula Haye
Paruge Neeku Ishtham Anante
Nenemantaane

Padipokundaa Pattukune
Ee Cheyyai Neemundhuntaaney

Naaa Bangaaru Koona
Naa Chinnaari Koona
Mari Naa Kaina Evarey Neekannaa
Nee Pranaalaku Prananai Unna

Wacky Wacky Jolly Jolly New Today
Rolly Polly Running To The Far Away

Say Chiggy Chiggy Wiggy Wiggy Sing Away
We Locopoco Jumping In The Clouds Today

Wacky Wacky Jolly Jolly New Today
Roly Poli Running To The Far Away

Thellare Daagudumootha
Saayanthram Kallaku Gantha
Nuvvadiatha Unnaa
Nenapeyamannaana

Ae Roju Aye Alakaina
Theerustha Chitikellona
Oye Oye Oye Oye

Vechunnade Vennela Loye
Nuvvu Thhe Ante
Nee Mundhu Thaaraa Theeraley
Amavasai Naa Neetho Untey
Deepawali Gamarena

Naa Bangaaru Koona
Naa Chinnari Koona
Mari Kaina Naa Evare Neekannaa
Nee Pranaalaku Prananai Unna

Wacky Wacky Jolly Jolly New Today
Rolly Polly Running To The Far Away

Say Chiggy Chiggy Wiggy Wiggy Sing Away
We Locopopo Jumping In The Clouds Today

Wacky Wacky Jolly Jolly New Today
Roly Poli Running To The Far Away`
                },
                {
                    id: '2025-daaku_maharaj-song4',
                    title: "Dabidi Dibidi",
                    artist: "SS Thaman, Vagdevi",
                    duration: "4:22",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660870/Dabidi_Dibidi_nxcgab.mp3",
                    lyrics: `Ulalla Ulalla Na Muvva Gopala
Kathula Thote Kadhu
Kanticho Thone Champala

Ulalla Ulalla Naa Bala Gopala
Kissula Aatakostha Place’umeu
Nuvvey Cheppala

Are Da Da Da Da Na Raja
Therichipedtha Mansion House’u Darwaja
Chalo Needhe Kadha Honey Roja
Olloo Padtha Wippavante Nee Panja

Intike Vasthhavo Naattintike Vasthavo
Nuv Adugedithe History Repeats Ayy

Eh Dabidi Dibidi Dabidi Dibidi
Neeche E Ethhu Bala
Eh Dabidi Dibidi Dabidi Dibidi
Naa Chempamokepoyyella

Eh Dabidi Dibidi Dabidi Dibidi
Nuthancchuthanchu Bala
Eh Dabidi Dibidi Dabidi Dibidi
Chamathallo Thadisipoyella

Dhukke Dhukke Singham Nuvvera
Vetakatthi Pula Guthhi Janta Meedhe Raa
Paike Paike Itta Vaccheyra
Rangabothi Pattodhothi Anchukkattey Raa

Ulallaa Ulallaa Na Muvva Gopala
Kaththula Thotey Kadhu
Kanticho Thoney Champala

Simhamattu Setu Nee Mundhey Oodhi Flute-U
Ee Jinkapilla Vankaranadumm Vetadistha Raa

Nuv Meesamitta Thippi
Nee Thodanu Atta Kotti
Nakoo Mood Ochelaa
Rendoo Sideu Chupin Chesi Raa

Sarango Sarango Sarango
Nee Ku Saarelo Sokantha Sharingo
Bowling Battingo Fieldingo
Ika Cheseyyi Naa Paita Jaarango

Intikey Vasthavo Naattintike Vasthavo
Nuvv Adugeditheyy History Repeats Ayy

Eh Dabidi Dibidi Dabidi Dibidi
Neecche E Etthu Bala
Eh Dabidi Dibidi Dabidi Dibidi
Naa Chempamokepoyella

Eh Dabidi Dibidi Dabidi Dibidi
Nuthanchuthanchu Bala
Eh Dabidi Dibidi Dabidi Dibidi
Chamathallo Thadisipoyella`
                },
                /* {
                    id: '2025-daaku_maharaj-song6',
                    title: "Naa Manasuni",
                    artist: "Sid Sriram, Ramya Behara",
                    duration: "3:45",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660927/Naa_Manasuni_zjjg1s.mp3",
                    lyrics: ``
                },
                {
                    id: '2025-daaku_maharaj-song7',
                    title: "Nee Navve",
                    artist: "Armaan Malik, Aditi Bhavaraju",
                    duration: "3:50",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750660875/Nee_Navve_y2h62q.mp3",
                    lyrics: ``
                } */
            ]
        },
    ],


    2024: [

        // guntur kaaram 
        {
            id: 'movie-2024-GunturKaaram',
            title: "Guntur Kaaram",
            actors: "Mahesh Babu, Shree Leela, Meenakshi Chaudhary",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620991/Guntur_Kaaram_y1jzcu.jpg",
            songs: [
                {
                    id: "2024-GunturKaaram-song1",
                    title: "Dum Masala",
                    artist: "Sanjith Hegde, S S Thaman",
                    duration: "3:26",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862975/Dum_Masala_sdi0us.mp3",
                    lyrics: `Sarru manduthadi babu goddu kaaram
Girra thiruguthadi eedithoti beram
Karara karara babu goddu kaaram
Girara girara eedithoti beram

Ye Pattabhipuram elle roaddu
Evadinainaa adigi choodu
Burripalem bullodante
Thelinoadu evadu ledu
Ye evadu ledu

Ye mila mila mila merusthadu
Danchuthadu amma thodu
Kodithe medadu panicheyyaka
Marichiporaa pinnukodu

Kar ra arra yerri
Hey surru hey surru
Hey surru surru surru suraka eedu

Yerranodanta errispeedanta
Surru suraka eedu
Highly inflammable

Everybody make way
Leader on the way
Ain't got no time to play

Eduroche gaali
Egaressthuna chokka pai gundi
Egabadi mundarike velipothadi
Nenekkina bandi

Ye lekkalu evadiki cheppali
Ye hakkulu evadiki raayali
Evadevado vesina baruvu
Enduku enduku ne moyyali

Dum masala biryani
Erra kaaram arakodi
Nimma soda full beedi
Guddi parey Guntoorni

Dum masala biryani
Erra kaaram arakodi
Nimma soda full beedi
Guddi parey Guntoorni

Neno nishabdham anunityam
Naatho naake yuddham
Swaardham paramardham
Kalagalusina neno prema padardham

Ye pattu pattu komali
Etthipatti rokali
Potu meena potu esi
Dammukoddi danchikottu danchikottu

Ye yetukokka kaayani
Rotikiyyave bali
Ghaatu ghaatu mirapakoru
Gaallo nindi ghummanetattu

Ye paita sengu dopave
Aa sethi paatu marchave
Ye joru penchave
Ginza nalaga danchave
Kottha kaaraminka gummarinchukove

Naa manase naa kitiki
Nachchaka pothe moosesthaa
Aa repati gaayani
Ipude aapesthaa

Naa thalarathe rangula rangoli
Digulaina chestha diwali
Naa navvula kotanu nene
Enduku enduku padagottali

Dum masala biryani
Erra kaaram arakodi
Nimma soda full beedi
Guddi parey Guntoorni

Dum masala biryani
Erra kaaram arakodi
Nimma soda full beedi
Guddi parey Guntoorni`
                },
                {
                    id: "2024-GunturKaaram-song2",
                    title: "Oh My Baby",
                    artist: "Shilpa Rao",
                    duration: "2:36",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862968/Oh_My_Baby_omdmik.mp3",
                    lyrics: `Naa coffee kappullo
Sugar cube nuvve nuvve
Naa kanti reppallo
Katuka muggu nuvve nuvve

Naa chempalakantina
Chamanthi siggu nuvve nuvve
Naa oopiri gaalini
Perfume alle chuttasthave

Oh my baby oh oh
Nee buggalu pindali
Oh my baby oh oh
Neeku muddulu pettali
Oh my baby oh oh
Naa chunni neeku tie kattali

Craving craving craving for you
Naa pillow pakkana novel nuvvu
Tripping tripping tripping on you
Naa playlist vaipoyavu

Craving craving craving for you
Naa pillow pakkana novel nuvvu
Tripping tripping tripping on you
Naa playlist vaipoyavu

Naa wakeup call ayi
Vechchaga thake suryudu nuvvele
Naa balcony godalu dooke
Vennela chandrudu nuvvele

Ye nootiko kotiko
Naakai puttina okkadu nuvvele
Ne puttina ventane
Guttuga neeku pellam ayyale

Oh my baby oh oh
Nee pakkana vaalali
Oh my baby oh oh
Neetho chukkalu choodali
Oh my baby baby baby oh oh
Nee kaugili khaali poorinchali

Craving craving craving for you
Naa pillow pakkana novel nuvvu
Tripping tripping tripping on you
Naa playlist vaipoyavu

Craving craving craving for you
Naa pillow pakkana novel nuvvu
Tripping tripping tripping on you
Naa playlist vaipoyavu

Oh my baby oh oh
Oh my baby baby baby baby oh
Oh my baby oh oh
Thana nanna nannana
Ha baby baby oh
Thana nanna nanna nanna`
                },
                {
                    id: "2024-GunturKaaram-song3",
                    title: "Kurchi Madathapetti",
                    artist: "Sahithi Chaganti, Sri Krishna",
                    duration: "3:33",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864706/Kurchi_Madathapetti_cdzauf.mp3",
                    lyrics: `Rajamandri Ragamanjari
Mayamma peru thalavanollu leru mestriri
Kalakaarla family mari
Memu gajja kadithe nidarapodu nindu raatiri

Sokuladi Swapna Sundari
Nee madathasupu mapatela malle pandiri
Rachcharajukunde oopiri
Nee vanka choosthe gundelona deeri diridiri

Thooneega nadumulona thootaletty
Thupaki pelchinave thingari chitti
Magajaathi natta madathapetty

Aa kurchini madatha petti
Aa kurchini madatha petti
Madatha petti ma ma ma madatha petti
Madatha petti ma ma ma madatha petti
Madatha petti ma ma ma madatha petti
Ku ku kuku koo koo koo koo

Daani kemo mari daani kemo
Daani kemo mekalistivi
Mari naakemo sanna biyyam nookalistivi
Mekalemo vandhaluga mandhaluga perigipaaye
Naakichchina nookalemo okka pootak karigipaaye
Ku ku kuku

Aada pachcharalla jookalistivi
Mari naakemo chukka galla kokalistivi
Daani cheviloo jookalemo daga daga merisipaaye
Naaku pettina kokalemo peelikalai sirigipaaye

Yem rasika rajuvo mari
Naa Dasu Bava neetho eppudinthha kirikiri
Yem rasika rajuvo mari
Naa Dasu Bava neetho eppudinthha kirikiri

Aa kurchini madatha petti
Madatha petti ma ma ma madatha petti
Madatha petti ma ma ma madatha petti
Madatha petti ma ma ma madatha petti
Ku ku kuku koo koo koo koo

So so so sokuladi Swapna Sundari
Madatha petti madatha petti
Maapatela malle pandiri
Madatha petti madatha petti

Rachcharajukunde oopiri
Madatha petti madatha petti
Gundelona deeri diri diri

Endatta choostanna
Ikkada evadi badhalaku vaade lyric writer
Raasukondi madatetti paadeyandi

Madatha petti ma mama ma mama
Madatha petti madatha petti
Ma mama ma mama madatha petti
Madatha petti ma mama ma mama madatha petti
Madatha petti ma mama

Aa kurchini madatha petti
Madatha petti ma ma ma madatha petti
Madatha petti ma ma ma madatha petti`
                },
                {
                    id: "2024-GunturKaaram-song4",
                    title: "Mawaa Enthaina",
                    artist: "Sri Krishna, Ramachari",
                    duration: "2:28",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862949/Mawaa_Enthaina_sgnpwq.mp3",
                    lyrics: `Panisagarisa ni pa sa
Panisagarisa ni pa ma
Panisagarisa ni pa sa
Pani pani pani pani pani pani

Sathyendra gramophone
Ikkadaku techcharendi

Panisagarisa ni pa sa
Panisagarisa ni pa ma
Panisagarisa ni pa sa
Pani pani pani pani pani pani

Mawa entaina parledhu billu
Manasu baledhu esestha fullu
Gunde lothullo guchchindi mullu
Cheppukoleni badhe double-u

Maripoye lokam
Cheddollantha ekam
Naajookaina nabotodiki
Dinadinamoka narakam

Yado ledu lopam
Naa meedhe naa kopam
Andananna akashaniki
Enthakani egabadatham

Evvarikevvaru ayinollantu unnagaani lere
Ye vaavi varasa peru pilupu anni noti chivare
Yahe visigupatti inkipoye kandlallo kannire
Etu thirigi choodu manaki maname
One and only lover-e

Anna
Sarara sarara suram
Surrantadi karam hey
Hey rappa rappapa rabba rabaribabba
Hey rappa rappapa rabba rabaribabba

Inapa suvva kauku debba
Iragadeese ravanna debba uy`
                },
                {
                    id: "2024-GunturKaaram-song5",
                    title: "Ramana Aei",
                    artist: "Kanakavva",
                    duration: "2:41",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863008/Ramana_Aei_ekvoju.mp3",
                    lyrics: `Ey ey ey ey
Ey ey ey ey
Pokiri vachchadu kadara
Aata choosthava

Chitta chitta chitta chitta
Ey ey ey ey
Ramana ey ey ey ey
Dhaga dhaga dhaga dhaga dhaga
Ey ey ey ey
Sarara sarara sarara sarara
Ey ey ey ey

Endakkayaalu atta choosthunnaru

Joruna vetake vachchinadu porade
Aagani kothake edapeda soodade
Seera sengu ganthulaku beduradi guntade
Adugaduguna dadadade
Modalu pedithe deththade

Biryani baagundalakkaya
Dammu adiripovaala

Soopulake sukka pandu
Kottadante mirchi pandu
Yeshal geeshal pakkanabetti
Maate vinundri

Ey ey ey ey
Ramana ey ey ey ey
Dhaga dhaga dhaga dhaga dhaga

Soopulake sukka pandu
Kottadante mirchi pandu
Yeshal geeshal pakkanabetti
Maate vinundri

Ey ey ey ey
Ramana ey ey ey ey
Dhaga dhaga dhaga dhaga dhaga

Soopulake sukka pandu
Kottadante mirchi pandu
Yeshal geeshal pakkanabetti
Maate vinundri

Sarasara sarasara sarasara
Sarara sarara sulam
Ey ey ey ey
Doola doola doola
Ere ere idi errekkinche beram
Ey ey ey ey

Endi atta soosthunna
Beedi 3D lo kanabaduthunda

Joruna vetake vachchinadu porade
Aagani kothake edapeda soodade
Seera sengu ganthulaku beduradi guntade
Adugaduguna dadadade
Modalu pedithe deththade

Sarara sarara sulam
Inapa suvva kavuku debba
Iragadise Ramana debba
Sarara sarara sulam
Inapa suvva kavuku debba
Iragadise Ramana debba iy`
                },
                {
                    id: "2024-GunturKaaram-song6",
                    title: "Amma",
                    artist: "Vishal Mishra",
                    duration: "4:25",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862998/Amma_v1xwob.mp3",
                    lyrics: `Pasiwaadai vechi choosthonda
Badule rani gatham
Pagawaadai ninda mosthonda
Edute unna nijam

Cheriginadaa kalawaram
Dorikinadaa priyawaram
Kanu tadigaa kariginadaa
Yedagadilo samaram

Edi manadanukuntam
Edi kaadanukuntam
Leni thala raathani wetike
Manasuku yemani chebutham

Enthakani digipotham
Enthakani digulawutham
Raani mamakaraannadigi
Enthani parugulu pedatham

O Ooo O O
Gaa thararari raa rari raa
Ha O O O O
Gaa thararari raa rari raa
Ha gaa thararari raa rari raa aa aa

Theerarara raarero haa O O
Theerarara raarero theerarara raarero
Theerarara raarero tharirari rari rari rari O O
Theerarara raarero theerarara raarero
Theerarara raarero tharirara rara rara rara O O daa daa ra`
                },
            ]
        },

        // HanuMan
        {
            id: 'movie-2024-HanuMan',
            title: "HanuMan",
            actors: "Teja Sajja, Amritha Aiyer",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620991/HanuMan_prpa2f.jpg",
            songs: [
                {
                    id: "2024-HanuMan-song1",
                    title: "Sri Ramadootha Stotram",
                    artist: "Sai Charan Bhaskaruni, Lokeshwar, Harshavardhan",
                    duration: "0:55",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863023/Sri_Ramadootha_Stotram_ddwo0y.mp3",
                    lyrics: `Ram ram
Ram ram ram rakthavarnam
Dinakara vadanam theekshana damshtrakaraalam
Ram ram ram ramyathejam
Girichalanakaram keerthi panchaadi vakthram

Ram ram ram rajayogam
Sakala shubhanidhim saptha bhetaalabhedyam
Ram ram ram rakshasantham
Sakala dishayasam ramadootham namaami

Kham kham kham khadgahastham
Vishajvara haranam vedavedangadeepam
Kham kham kham khadgaroopam
Tribhuvana nilayam devathaasu prakaasham

Kham kham kham kalpavruksham
Manimaya makutam
Maaya maaya swaroopam
Kham kham kham kaalachakram
Sakala dishayasam ramadootham namaami

Im im im indravandyam
Jalanidhikalanam soumya samrajyalabham
Im im im siddhiyogam
Nathajanasadayam aryapoojyarchithangam

Im im im simhanadam
Amrutha karathalam adhi antyaprakaasham
Im im im chitswaroopam
Sakala dishayasam ramadootham namaami

Sam sam sam sakshibhootham
Vikasitha vadanam pingalaaksham suraksham
Sam sam sam satyageetham
Sakala muninutham shasthra sampathkareeyam

Sam sam sam samavedam
Nipuna sulalitham nitya thattwaswaroopam
Sam sam sam saavadhanam
Sakala dishayasam ramadootham namaami

Ham ham ham hamsaroopam
Sputavikatamukham sookshma sookshmavatharam
Ham ham ham antaratmam
Ravishashi nayanam rammagambheerabeemam

Ham ham ham attahasam
Suravara nilayam urdhwaromam karaalam
Ham ham ham hamsahamsam
Sakala dishayasam ramadootham namaami`
                },
                {
                    id: "2024-HanuMan-song2",
                    title: "Hanuman Chalisa",
                    artist: "Sai Charan Bhaskaruni",
                    duration: "4:08",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863076/Hanuman_Chalisa_kvjxiv.mp3",
                    lyrics: `Jaya Hanumana Gyana Guna Sagara
Jaya Kapisha Tihun Loka Ujaagara
Ramadootha Atulita Baladhaama
Anjaniputra Pavanasuta Naama

Mahaveera Vikrama Bajrangi
Kumati Nivaara Sumati Ke Sangi
Kanchana Barana Viraaja Suvesa
Kanana Kundala Kunchita Kesha

Haath Vajra Au Dhwaja Virajai
Kaandhe Moonj Janevu Saajai
Shankara Suvana Kesarinaandana
Teja Prataapa Maha Jaga Vandana

Vidyavana Guni Ati Chathura
Rama Kaaja Karibe Ko Atura
Prabhu Charitra Sunibe Ko Rasiya
Rama Lakhana Sita Mana Basiya

Sookshma Roopadhari Siyahi Dikhaava
Vikatarupadhari Lanka Jaraava
Bheemarupadhari Asura Sanhare
Ramachandra Ke Kaaja Sanvare

Laaya Sajeevana Lakhana Jiyaye
Shree Raghuveera Haravi Ura Laye

Jaya Hanumana Gyana Guna Sagara
Jaya Kapisha Tihun Loka Ujaagara

Raghupati Keenhhi Bahuta Badayi
Tuma Mama Priya Bharata Sama Bhayi

Sahasa Vadana Tumharo Yashagavai
Asa Kahi Shreepati Kanth Lagavaiṁ
Sanakadika Brahmaadi Munisha
Narada Sharada Sahita Ahisha

Yama Kubera Dikpaala Jaha Te
Kavi Kovida Kahi Sake Kaha Te
Tuma Upakara Sugreevahi Keenhha
Rama Milaya Raja Pada Deenhha

Tumharo Mantra Vibheeshana Maana
Lankeshwara Bhaye Saba Jaga Jaana
Yuga Sahasra Yojana Para Bhanu
Leelyo Tahi Madhurafala Jaanu

Prabhu Mudrika Meli Mukha Maahi
Jaladhi Laanghi Gaye Acharaja Naahi
Durgama Kaaja Jagata Ke Jete
Sugama Anugraha Tumhare Tete

Rama Dulaare Tuma Rakhaware
Hota Na Agya Binu Paisaare
Saba Sukha Lahai Tumhaaree Sarana
Tuma Rakshaka Kahoo Ko Darana

Jaya Hanumana Gyana Guna Sagara
Jaya Kapisha Tihun Loka Ujaagara

Apana Teja Sanharo Apai
Teeno Loka Haanka Te Kampai
Bhoota Pishacha Nikata Nahi Avai
Mahaveera Jaba Nama Sunavai

Nashai Roga Harai Saba Peera
Japata Nirantara Hanumata Veera
Sankata Se Hanumana Chhudaawai
Mana Krama Vachana Dhyana Jo Lavai

Saba Para Rama Tapasvee Raja
Tinake Kaaja Sakala Tuma Saaja
Auru Manoratha Jo Koyee Lavai
Taasu Amita Jeevana Phala Paavai

Charoṁ Yuga Prataapa Tumhara
Hai Parasiddha Jagata Ujiyara
Sadhu Santa Ke Tuma Rakhaware
Asura Nikandana Rama Dulaare

Ashtasiddhi Nava Nidhi Ke Data
Asabara Deena Janaki Maata
Rama Rasayana Tumhare Pasa
Sada Raho Raghupati Ke Dasa

Jaya Hanumana Gyana Guna Sagara
Jaya Kapisha Tihun Loka Ujaagara

Tumhare Bhajana Rama Ko Bavai
Janma Janma Ke Dukha Bisaravai
Anta Kala Raghupati Pura Jayi
Jaha Janma Haribhakta Kahayi

Auru Devata Chitta Na Dharayi
Hanumata Seyi Sarva Sukha Karayi
Sankata Katai Mitai Saba Peera
Jo Sumirai Hanumata Balaveera

Jai Jai Jai Hanumana Gosayi
Krupa Karahu Guru Deva Kee Nayi
Yaha Shata Baara Paath Kara Koyee
Chhootahi Bandi Maha Sukha Hoyee

Jo Yaha Padhai Hanumana Chalisa
Hoya Siddhi Sakhi Gaurisa
Tulasidasa Sada Hari Chera
Keejai Naath Hrudaya Maha Dera`
                },
                {
                    id: "2024-HanuMan-song3",
                    title: "Avakaya Anjaneya",
                    artist: "Sahithi Galidevara",
                    duration: "4:19",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863024/Avakaya_Anjaneya_nj3pjp.mp3",
                    lyrics: `Avakaya Anjaneya
Katha modhalettinadu soodarayya
Shakthinantha koodagatti
Chettu dhulipinadu Anjayya

Erra chaya Erra chaya
Kothi avatharam entha maya
Katthi setha pattukunda
Kaya kosinadu Kapilayya

Anjanamma mundu
Vanjul punjul
Cheedimaamidi mukkalu
Kuppal teppal

Aa aa Anjanamma mundu
Vanjul punjul
Cheedimaamidi mukkalu
Kuppal teppal

Tenkaloni jeedi vankalennunna
Tenkaloni jeedi vankalennunna
Puligoru pallatho parapara theesaduro

Anjanadri Hanumantho
Nee suruku cheppalenantho
Anjanadri Hanumantho
Nee shakthi lekka uppenantho

Bakkavaatam lekkaseyaka
Kalluppu kadali vadalanante
Tokathoti keratam aapi
Oddu nendesadu uppu panta

Goddkaaram goddkaaram
Mukka munigi paiki pokkuthunte
Sinnithalli kantireppanantakunda
Tippe gaalivatam

Avapindi antha challi challi
Aarabettinaadi thalli thalli
Avapindi antha challi challi
Aarabettinaadi thalli thalli

Gandupilli dhooli gattigegirosthe
Gandupilli dhooli gattigegirosthe
Adduga niluchuni
Angutatho mingaduro

Kaaki kootalu gora chappullu
Avakaya thanthu jaraguthunte
Menthulesenanthalone
Pittalellagottinadu gadha etthi

Nuvvu donka dishti bomma
Pachchadonka soosi dishthi pedithe
Vellulli rebballa jabbalirisi
Noone thendinaduro kundetti

Sattininda saruku kukki kukki
Utti netti muggetti etti
Sattininda saruku kukki kukki
Utti netti muggetti etti

Antha pedda devudasallaagalaaka
Antha pedda devudasallaagaleeka
Avajaadi theesi russapparincharo

Anjanadri Hanumantha
Nee suruku cheppalenantho
Anjanadri Hanumantha
Nee shakthi lekka uppenantho`
                },
                {
                    id: "2024-HanuMan-song4",
                    title: "Super Hero Hanu Man",
                    artist: "Sai Veda Vagdevi, Prakruthi Reddy, Mayukh",
                    duration: "3:48",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863079/Super_Hero_Hanu_Man_ois6m4.mp3",
                    lyrics: `Chikichaa Chikichaa Cham Cham
Chikichaa Chikichaa
Adugo adugo choodu
Ewari Chichcha

Chikichaa Chikichaa Cham Cham
Chikichaa Chikichaa
Super hero ki koncham
Local touch-a

Saripodanta Superman
Bayapadipoda Batman
Hip hip anada He-Man
Etthstaaru X-Men

Vachchadu kottha super hero
Mana Hanuman mundara andaroo zero
Vachchadu kottha super hero
Collar egaresi whistle maaro

Captain America shield ki
Sottalu theesistaadu
Black Panther panja gollatho
Veepe gokedadu

Aquaman adigethe cheruvulo
Venakeethe nerpaadu
Iron Man veedi battalu
Iron chesthadu

Thaar hammer thone dimpi mekule
Veedu aresthadu panchaley
Halku navvesthadu veedi thotalo
Aadi kothi kommachche

Thanosu fingers ke
Fevikwick-e poosthadu
Chitikalne aape
Super hero veede

Vachchadu kottha super hero
Mana Hanuman mundara andaroo zero
Vachchadu kottha super hero
Collar egaresi whistle maaro

Spider Man webbutho
Veedu chepalu pattestadu
Wolverine katthulathoti
Koorallu kosthadu

Doctor Strange cloak ni
Lungeela chuttestaadu
Wonder Woman thadutho
Pelliki lighting pedathadu

Loki veshalanni rattu chesthadu
Flash kanna veedu fast le
Ant Man-e vaste aaputhadule
Geesi Lakshmana rekhalne

Joker ki pekaate
Nerpindi mavade
Ye suit leni
Super hero veede

Vachchadu kottha super hero
Mana Hanuman mundara andaroo zero
Vachchadu kottha super hero
Collar egaresi whistle maaro`
                },
                {
                    id: "2024-HanuMan-song5",
                    title: "Anjanadri Theme",
                    artist: "Sai Charan Bhaskaruni",
                    duration: "2:03",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862973/Anjanadri_Theme_ncmyq7.mp3",
                    lyrics: `Anjanadripai santati korakai
Aho rathramulu
Thapassu chese vaanara kesari
Kesari kulasati kadupu pandagaa

Janinchinadoka asamaana
Balodbhududu samyutuduu
Anjanaa sutuduu pavana nandanuduu

Aruna kiranamula udayagnini kani
Adi pandina thiyyani pandanukoni
Suryamandalamu patti thinaalani uvvillure

Thana deham maatuna ravimarugai
Jagamucheekatai pogaa

Adi amarendrudu gamaninchi
Thana airavathamadhirohinchii
Anjaneyuni sameepinchi
Thana vajrayudhamunu visaragaa

Adi pavana nandanuni hanumuni thaaka
Chindina raktha binduve
Vidyut vegamtho dharanee sthali
Ganga kadalilo chocchi

Ganga kadali attaduguna gala
Sri Ranga shuddhi garbhammu cheri yata

Kaalakramamuna ghaneebhavinchi
Hanuma rudhiramani ghaniyai
Arhatha gala oka sahrudayunikai
Niranthanishchala nireekshanam
Varsha sahasraka nireekshanam
Niranthanishchala nireekshanam
Varsha sahasraka nireekshanam`
                },
                {
                    id: "2024-HanuMan-song6",
                    title: "Poolamme Pilla",
                    artist: "Gowra Hari",
                    duration: "3:57",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863038/Poolamme_Pilla_jqlfjh.mp3",
                    lyrics: `Poolamme Pilla Poolamme Pilla
Gundenu Illaa Dandaga Allaa
Poolamme Pilla

Poolamme Pilla Poolamme Pilla
Ammayi Jallo Cheredi Ella
Poolamme Pilla

Mooredu poole maa raanikeeve
Charedu champalle sureeai poosele
Erraga kandele nunnani buggale

Pilla palleru kaya soopulla
Sikki allaadinane sepalla
Pasidi pacchaani arasethulla
Dharapostha praanaalu thaane adagaala

Seethakokalle rekka vippela
Navvi naalona rangu nimpala

Hey malli andaala sendumalli
Gandhaalu meeda jalli
Nanu munchi vesene

Thanapai manasu jaari
Vachcha yeri kori

Mooredu poole maa raanikeeve
Charedu champalle sureeai poosele
Erraga kandele nunnani buggale

Pilla allaadipoyi nee valla
Udiki jaramocchinattu niluvella
Balame lekunda poye gundella
Prema mande raasiyye moodu pootalla

Elli pothunte nuvvu veedhulla
Thulli ooginde ollu uyyala
Hey tella tellaani kotu pilla
Dachesi jebulalla nanu mosukellave

Patnam sandamama
Chinna naati prema

Poolamme Pilla Poolamme Pilla
Ammayi Jallo Cheredi Ella
Poolamme Pilla

Mooredu poole maa raanikeeve
Charedu champalle sureeai poosele
Erraga kandele nunnani buggale`
                },
                {
                    id: "2024-HanuMan-song7",
                    title: "Raghunandana",
                    artist: "Saicharan Bhaskaruni",
                    duration: "2:36",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863038/Raghunandana_tiubvk.mp3",
                    lyrics: `Rama Rama Jaya
Rama Rama Jaya
Rama Rama Jaya
Rama Rama Jaya

Rama Rama Jaya
Rama Rama Jaya
Rama Rama Jaya
Rama Rama Jaya
Ram

Raghunandana Raghu Raghunandana
Raghuvarasevana Raghupathichaayana

Sathayojana Satha Sathayojana
Sharadhini Yojana Shariparithlangana

Raghunandana Raghu Raghunandana
Raghuvarasevana Raghupathichaayana

Sathayojana Satha Sathayojana
Sharadhini Yojana Shariparithlangana

Ari Bhajana Ari Ari Bhajana
Arimadabhajana Dashamukha Kampana

Badabakrutha Bada Badabakrutha
Badabanala Krutha Bahubasmarchana

Jayakethana Jaya Jayakethana
Jayaha Prathapuna
Jayamida Dhapuganae

Raghunandana Raghu Raghunandana
Raghuvarasevana Raghupathichaayana
Sathayojana Satha Sathayojana
Sharadhini Yojana Shariparithlangana

Ari Bhajana Ari Ari Bhajana
Arimadabhajana Dashamukha Kampana

Badabakrutha Bada Badabakrutha
Badabanala Krutha Bahubasmarchana

Jayakethana Jaya Jayakethana
Jayaha Prathapuna
Jayamida Dhapuganae`
                },
            ]
        },

        // saindhav
        {
            id: 'movie-2024-Saindhav',
            title: "Saindhav",
            actors: "Venkatesh, Shradda Srinadh",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620997/Saindhav_aaxifc.jpg",
            songs: [
                {
                    id: "2024-Saindhav-song1",
                    title: "Wrong Usage",
                    artist: "Nakash Aziz",
                    duration: "3:34",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864266/Wrong_Usage_ys9r0x.mp3",
                    lyrics: `Rey arey baadhalalone
Tega yedupulone
Nuvvu thaguthunnav ra

Rey dil khushi khushilone
Bhal chindhulathone
Nuvvu thagi choodara

Ye feeling tho thagithe
Aa feeling double aithadi
Ye feeling tho thagithe
Aa feeling double aithadi

Khushine double chesthava
Leka baadhane double chesthava haa
Yedupe double chesthava
Ese chindune double chesthava aa aa aao

Cheyyoddu ra cheyyoddu ra
Wrong usage
Ararare cheyyoddu ra wrong usage

Cheyyoddu ra cheyyoddu ra
Wrong usage
Mandhuni cheyyoddu ra
Wrong usage

Wrong usage wrongu

Duniyalo andariki
Daggaravadam korake kanipettari celluni
Sivariki neeku nuvvu dooramayyi
Nuvve oka ontarayyi
Ee celle neeku jail cell ainadhe

Wrong usage-u
Cheyyaku cheyyaku cheyyaku cheyyaku
Wrong usage-u
Celluni cheyyaku cheyyaku cheyyaku cheyyaku

Paisalane nuvvu vadukovalae
Baabay manushulane love cheyyale
Manushulanu vaadi notla kattalane love chesthe
Kattallo padi life tho kattayyave haa

Cheyyaku cheyyaku cheyyaku cheyyaku
Wrong usage-u
Cheyyaku cheyyaku
Dabbuni cheyyaku wrong usage-u

Cheyyaku cheyyaku cheyyaku cheyyaku
Wrong usage-u
Cheyyaku cheyyaku
Dabbuni cheyyaku wrong usage-u

Neelo telive neeku banisavvale
Aa telive telivi meeri
Athi teliviga adi maari
Nee banisake navvu banisayyave

Wrong usage-u
Cheyyaku cheyyaku cheyyaku cheyyaku
Wrong usage-u
Cheyyaku cheyyaku cheyyaku

Chedu annadi nedu
Manchi fashion ayyindhe
Manchi masseddaga boru
Kottindhe ye ye ye ey

Manchi time theeripoyi
Chedu vaipe jaaripoyi
Lifelona light annadi aaripoyindhe

Rey wrongu wrongu wrongu wrongu
Cheyyoddu ra cheyyoddu ra wrong usage-u
Ararara cheyyoddu ra wrong usage

Cheyyaku cheyyaku cheyyaku
Cheyyaku wrong usage-u
Cheyyaku cheyyaku lifeni
Cheyyaku wrong usage-u`
                },
                {
                    id: "2024-Saindhav-song2",
                    title: "Sarada Saradaga",
                    artist: "Anurag Kulkarni",
                    duration: "3:05",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864244/Sarada_Saradaga_eahryy.mp3",
                    lyrics: `ఎగిరే స్వప్నాలే మనం
మనదే కాదా గగనం
సిరివెన్నెలలో తడిసే గువ్వలం
చిరునవ్వులలో చననం

ఇది చాల్లే ఇంతే చాల్లే
ఇదిలా నిత్యం ఉంటే చాల్లే
ఈ నూరేళ్ళిలా మారే వెయ్యేల్లుగా
ఊపిరిలో సుమగంధాలే

సరదా సరదా
సరదాగా సాగింది సమయం
మనసు మనసు దూరాలే మటుమాయం
మనకు మనకు పరదాలే లేనే లేవందాం
ఒకరికి ఒకరై ఒదిగింది అనుబంధం

కలలా ఉందేంటీ నిజం
నిజమేనందీ నయనం
మనకే సొంతం అవునా ఈ వరం
విరబూసింది హృదయం

అందాల పూల వందనాలు
చేసే రాదారులే
తల నిమురుతున్న
పలకరింపులాయె చిరుగాలులే

ఈ ఉల్లాసమే మనకో విలాసమై
మనసంతా చిందాడిందే

సరదా సరదా
సరదాగా సాగింది సమయం
మనసు మనసు దూరాలే మటుమాయం
మనకు మనకు పరదాలే లేనే లేవందాం
ఒకరికి ఒకరై ఒదిగింది అనుబంధం

ఆనందమే అరచేతులా
వాలిందిలా పసిపాపలా
ఒక గుండెలో
ఈ మురిపెమంతా బంధించేదేలే

కరిగి ఆ వానవిల్లే ఇలా
రంగుల్లో ముంచెత్తగా
ఈ చిత్రం ఏ కుంచెలైనా చిత్రించేదేల

సరదా సరదా
సరదాగా సాగిందీ సమయం
మనసు మనసూ దూరాలే మటుమాయం
మనకు మనకూ పరదాలే లేనే లేవందాం
ఒకరికి ఒకరై ఒదిగింది అనుబంధం`
                },
                {
                    id: "2024-Saindhav-song3",
                    title: "Bujji Kondave",
                    artist: "SP Charan",
                    duration: "3:16",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864242/Bujji_Kondave_k3wswk.mp3",
                    lyrics: `Bangaram-e Bangaram-e
Nuvvu naa varame
Nee kshemame nee santhoshame
Nanu nadipinche balame

Chitti thalli neeve puttukante neede
Devathalle nanne cherukuntive
Gundepattanatha pranamante neeve
Naanna laaga nanne enchukuntive

O chantipaapanai
Neetho nannu aadaniwvave
Nee aata paata muddu muchchata theerchanivvave
Naa aayuvantha nuvvu andipuchchukuni
Chindulaadave

Bujjikondave naa bujjikondave
Bujjikondave naa bujjikondave

Bangaram-e Bangaram-e
Nuvvu naa varame
Nee kshemame nee santhoshame
Nanu nadipinche balame

Edo janmalo ammavae
Naa paapavainavillaa nammavae

Lokaana poose prathi navvu theesi
Puvvula danda chesi neekandinchanAa
Neekai kannakalaala undi jeevitham
Prathi ruthuvu neekai theevali vasantham

Naa aanandaalaki addam pattina
Kanti chemmavae
Naa adrushtaalanni bhoomiki dinchina
Butta bommavae
Naa gundepaina chindulaada vachchina
Jaabilammavae

Bujjikondave naa bujjikondave
Bujjikondave naa bujjikondave

Bangaram-e Bangaram-e
Nuvvu naa varame
Nee kshemame nee santhoshame
Nanu nadipinche balame

Edo janmalo ammavae
Naa paapavainavillaa nammavae`
                },
            ]
        },

        //  Na Saami Ranga 
        {
            id: 'movie-2024-NaSaamiRanga',
            title: "Na Saami Ranga",
            actors: "Nagarjuna, Allari Naresh, Raj Tarun, Ashika Ranganath",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620996/Na_Saami_Ranga_gtsjw6.jpg",
            songs: [
                {
                    id: "2024-NaSaamiRanga-song1",
                    title: "Etthukelli povalanippisthunde",
                    artist: "Ram Miriyala",
                    duration: "4:11",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863804/Yethukelli_Povalanipisthunde_ynz8li.mp3",
                    lyrics: `Ulli malla seera gatti
Kajjalu paikegagatti
Ulli malla seera gatti
Kajjalu paikegagatti
Unnavalla pillanantava gumma

Ramani muddula gumma nandana
Rave rave bhama nandana
Ramani muddula gumma nandana
Rave rave bhama nandana

Beera puvvu raika sutti
Billantha bottu petti
Beera puvvu raika sutti
Billantha bottu petti
Baitakadugu pettanantava bhama

Ramani muddula gumma nandana
Rave rave bhama nandana
Ramani muddula gumma nandana
Rave rave bhama nandana

Etthukelli pothava pothava
Etthukelli pothava pothava

Bellam cheruku soopula daana
Allam mirapa maataladaana
Bondumalli nadumu daana
Bandedu sokula o nerajaana

Nuvvatta pothunte oo oo oo
Ninnitta soothunte oo oo oo

Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde
Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde

Naretti suttesi mopalle katesi
Naa netthi meedetti godari gattenta
Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde

Kadavallo nimpesi kavillo pettesi
Idisi pettakunda ninninka kadadaaka

Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde
Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde

Nuvvu nadichellithe
Nee kaali anchu thaaki
Matti beddalanni
Muvvalayyaye

Nuvvu navvuthunte
Aa navvu theepi soki
Chettu kommalanni
Thene pattulayyaye

Entha entha entha muddugunnavante
Okka okka maatalona cheppalante
Chandamamake pillalu pudithe
Hey chandamamake pillalu pudithe
Ninnu choopinchi annam thinipisthade
Mari atta unte em chestham

Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde
Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde

Naa gundekotalo raanivi nuvvanta
Naa rendu kalla pallakilona
Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde

Mana premaku poosina chinnari ponnari
Pillalni nuvvu sankanetthukunedaka

Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde
Etthukelli povalanippisthunde pilla
Etthukelli povalanippisthunde`
                },
                {
                    id: "2024-NaSaamiRanga-song2",
                    title: "Naa Saami Ranga Title Song",
                    artist: "Kaala Bhairava, Rahul Sipligunj",
                    duration: "3:45",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863605/Naa_Saami_Ranga_ghwjga.mp3",
                    lyrics: `Maa jolikoshte maakaddushte
Maamoolugaa undadhu
Naa saamiranga naa saamiranga

Ee geetha thokkithe maa setha sikkithe
Maamoolugaa undadhu
Naa saamiranga naa saamiranga

Okkadu ante oorandaru
Maa oorante okkokkadu
Okkadu ante oorandaru
Maa oorante okkokkadu

Maathoti maathoti
Maathoti pechee padithe

Saamiranga naa saamiranga
Saamiranga naa saamiranga
Saamiranga naa saamiranga
Saamiranga naa saamiranga

Saamiranga naa saamiranga
Saamiranga naa saamiranga

Ee gaalilo pourushamundhi
Ee mattilo pantham undhi
Ee neetilo premaa undhi

Ee neetini thaagi mattini thaaki
Gaalini peelchi edhina ee dehamlo

Shwasa unnantha varaku
Vishwasam untaadi
Pranamunnantha varaku
Abhimanam untaadi

Maathoti maathoti
Maathoti pechee padithe

Saamiranga naa saamiranga
Are saamiranga naa saamiranga
Saamiranga naa saamiranga
Saamiranga naa saamiranga

Saamiranga naa saamiranga
Saamiranga naa saamiranga`
                },

                {
                    id: "2024-NaSaamiRanga-song3",
                    title: "Dummu Dhukanam",
                    artist: "Kareemulla, Sahithi Chaganti",
                    duration: "4:05",
                    url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863540/Dummu_Dhukanam_dzhoqc.mp3",
                    lyrics: ``
                },

            ]
        },

        // Ambajipeta Marriage Band
        {
            id: 'movie-2024-AmbajipetaMarriageBand',
            title: "Ambajipeta Marriage Band",
            actors: "Suhas, Shivani Nagaram",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620989/Ambajipeta_Marriage_Band_fmpgly.jpg",
            songs: [
                { id: "2024-AmbajipetaMarriageBand-song1", title: "Gumma", artist: "Sekhar Chandra", duration: "3:50", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862407/Gumma_mcyvxg.mp3" },
                { id: "2024-AmbajipetaMarriageBand-song2", title: "Maa Ooru Ambajipeta", artist: "Kaala Bhairava", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862430/Maa_Ooru_Ambajipeta_e9ey4v.mp3" },
                { id: "2024-AmbajipetaMarriageBand-song3", title: "Cheekati Vekuvaga", artist: "Mohana Bhogaraju", duration: "3:59", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862420/Cheekati_Vekuvaga_ymcbam.mp3" },
                { id: "2024-AmbajipetaMarriageBand-song4", title: "Gunde Gaani Mandindante", artist: "Gotte Kanakavva", duration: "2:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862440/Gunde_Gaani_Mandindante_blfghv.mp3" },
                { id: "2024-AmbajipetaMarriageBand-song5", title: "Kadupulo Serisagamayna Pranamu", artist: "Kaala Bhairava", duration: "3:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862473/Kadupulo_Serisagamayna_Pranamu_g0qthx.mp3" },
                { id: "2024-AmbajipetaMarriageBand-song6", title: "Vundipomanne Chotu Kaadu Idi", artist: "Dines Rudra", duration: "2:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862432/Vundipomanne_Chotu_Kaadu_Idi_nrr7ev.mp3" },
            ]
        },

        // Eagle
        {
            id: 'movie-2024-Eagle',
            title: "Eagle",
            actors: "Ravi Teja, Anupama Parameswaran",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620990/Eagle_ree1w0.jpg",
            songs: [
                { id: "2024-Eagle-song1", title: "Aadu Macha", artist: "Rahul Sipligunj", duration: "3:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862711/Aadu_Macha_zwvpnm.mp3" },
                { id: "2024-Eagle-song2", title: "Gallanthe", artist: "Kapil Kapilan, Lynn", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862753/Gallanthe_mmz6o5.mp3" },
                { id: "2024-Eagle-song3", title: "Eagle On His Way", artist: "Georgina Matthew", duration: "2:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862723/Eagles_On_His_Way_b32fsx.mp3" },
                { id: "2024-Eagle-song4", title: "Garudam", artist: "Sri Krishna, saicharan Bhaskaruni, Arun Koundinya", duration: "3:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862753/Gallanthe_mmz6o5.mp3" },
                { id: "2024-Eagle-song5", title: "Hey Garuda", artist: "Harika Narayan, Hema Chandra, KK", duration: "2:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862762/Hey_Garuda_wfxyzu.mp3" },
            ]
        },


        // Om Bheem Bush 
        {
            id: 'movie-2024-OmBheemBush',
            title: "Om Bheem Bush",
            actors: "Sree Vishnu, Priyadarshi",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620996/Om_Bheem_Bush_cb108l.jpg",
            songs: [
                { id: "2024-OmBheemBush-song1", title: "Om Bheem Bush", artist: "Sunny MR", duration: "0:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863882/Om_Bheem_Bush_ciun6h.mp3" },
                { id: "2024-OmBheemBush-song2", title: "Bang Bros", artist: "Sunny MR, Aditya Iyengar", duration: "3:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863859/Bang_Bros_y859dx.mp3" },
                { id: "2024-OmBheemBush-song3", title: "Dil Dhadke", artist: "Sunny MR, Krishna Tejasvi", duration: "3:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863824/Dil_Dhadke_wrpwwa.mp3" },
                { id: "2024-OmBheemBush-song4", title: "Aparichitha", artist: "Sunny MR, Sithara Krishnakumar", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863850/Aparichitha_vbsaj6.mp3" },
                { id: "2024-OmBheemBush-song5", title: "Neeli Moha Megham", artist: "Sunny MR, Anjana Balakrishnan", duration: "3:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863999/Neeli_Moha_Megham_eblfuk.mp3" },
                { id: "2024-OmBheemBush-song6", title: "Thaalajaalane", artist: "Sunny MR, Harjot Kaur", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864024/Thaalajaalane_pqp5qx.mp3" },
                { id: "2024-OmBheemBush-song7", title: "Anuvanuvuu", artist: "Sunny MR , Arijit Singh", duration: "3:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863821/Anuvanuvuu_pho0ur.mp3" },
                { id: "2024-OmBheemBush-song8", title: "The Wedding Song", artist: "Sunny MR, Kapil Kapilan", duration: "3:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864087/The_Wedding_Song_hy1r0c.mp3" },
                { id: "2024-OmBheemBush-song9", title: "Oka Kalalaa", artist: "Sunny MR", duration: "4:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863989/Oka_Kalalaa_l1yysm.mp3" },
                { id: "2024-OmBheemBush-song10", title: "Ule Ule", artist: "Sunny MR, Ram Miriyala", duration: "1:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864132/Ule_Ule_gaygkb.mp3" },
                { id: "2024-OmBheemBush-song11", title: "Banger Rap (Three Men)", artist: "Roll Rida", duration: "2:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863738/Banger_Rap_Three_Men_ehosat.mp3" },
                { id: "2024-OmBheemBush-song12", title: "Thaaraveedhiyil", artist: "Sunny MR, Harjot Kaur", duration: "3:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864044/Thaaraveedhiyil_slhydh.mp3" },
                { id: "2024-OmBheemBush-song13", title: "Moharaagamegham", artist: "Sunny MR, Anjana Balakrishnan", duration: "3:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863964/Moharaagamegham_aiaurj.mp3" },
                { id: "2024-OmBheemBush-song14", title: "Sammohanaa", artist: "Sithara Krishnakumar, Sunny MR", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864049/Sammohanaa_g04ksw.mp3" },
            ]
        },

        // Tillu Square
        {
            id: 'movie-2024-TilluSquare',
            title: "Tillu Square",
            actors: "Siddu Jonnalagadda, Anupama Parameswaran",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620999/Tillu_Square_gnnn99.jpg",
            songs: [
                { id: "2024-TilluSquare-song1", title: "Ticket Eh Konakunda", artist: "Ram Miriyala", duration: "2:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864647/Ticket_Eh_Konakunda_pgqrwm.mp3" },
                { id: "2024-TilluSquare-song2", title: "Radhika", artist: "Ram Miriyala", duration: "4:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864690/Radhika_hscbij.mp3" },
                { id: "2024-TilluSquare-song3", title: "Oh My Lilly", artist: "Sreerama Chandra", duration: "3:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864688/Oh_My_Lilly_b7hp6x.mp3" },
                { id: "2024-TilluSquare-song4", title: "Dj Tillu Revamp", artist: "Ram Miriyala", duration: "3:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864647/Dj_Tillu_Revamp_wzduwy.mp3" },
            ]
        },

        // The Family Star
        {
            id: 'movie-2024-TheFamilyStar',
            title: "The Family Star",
            actors: "Vijay Devarakonda, Mrunal Thakur",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620999/The_Family_Star_ugh1sa.jpg",
            songs: [
                { id: "2024-TheFamilyStar-song1", title: "Nandanandanaa", artist: "Sid Sriram", duration: "4:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864708/Nandanandanaa_nvl8ve.mp3" },
                { id: "2024-TheFamilyStar-song2", title: "Kalyani Vaccha Vacchaa", artist: "Karthik, Mangli", duration: "3:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864568/Kalyani_Vaccha_Vacchaa_i6byn7.mp3" },
                { id: "2024-TheFamilyStar-song3", title: "Madhuramu Kadha", artist: "Shreya Ghoshal", duration: "4:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864599/Madhuramu_Kadha_s1lrja.mp3" },
                { id: "2024-TheFamilyStar-song4", title: "Dekhore Dekho", artist: "Hemachandra", duration: "3:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864614/Dekhore_Dekho_zrazb4.mp3" },
                { id: "2024-TheFamilyStar-song5", title: "Dont Judge Me", artist: "Maahaa", duration: "6:25", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864626/DonT_Judge_Me_y44uz5.mp3" },
            ]
        },

        // Aa okkati adaku
        {
            id: 'movie-2024-AaOkkatiAdaku',
            title: "Aa okkati adaku",
            actors: "Allari Naresh, Faria Abdullah",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620988/Aaa_Okkati_Adakaku_icuakx.jpg",
            songs: [
                { id: "2024-AaOkkatiAdaku-song1", title: "Oh Madam", artist: "Anurag Kulkarni", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862312/Oh_Madam_gq5umb.mp3" },
            ]
        },

        // Gangs of Godavari 
        {
            id: 'movie-2024-GangsOfGodavari',
            title: "Gangs of Godavari",
            actors: "Vishwak Sen, Neha Shetty",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620991/Gangs_Of_Godhavari_ct36xf.jpg",
            songs: [
                { id: "2024-GangsOfGodavari-song1", title: "Suttamla Soosi", artist: "Anurag Kulkarni", duration: "3:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862861/Suttamla_Soosi_uam8jp.mp3" },
                { id: "2024-GangsOfGodavari-song2", title: "Motha", artist: "MM Manasi", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862876/Motha_k2vubj.mp3" },
                { id: "2024-GangsOfGodavari-song3", title: "Bad - Gangs Of Godavari Theme", artist: "Yuvan Shankar Raja", duration: "3:06", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862810/Bad_-_Gangs_Of_Godavari_Theme_ahqz4y.mp3" },
                { id: "2024-GangsOfGodavari-song4", title: "Giri Giri", artist: "Yuvan Shankar Raja, Ram Miriyala", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862851/Giri_Giri_kxgrnn.mp3" },
            ]
        },

        // Kalki 2898
        {
            id: 'movie-2024-Kalki2898AD',
            title: "Kalki 2898 AD",
            actors: "Prabhas, Amitabh Bachchan, Kamal Haasan, Deepika",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620992/Kalki_ddoyfl.jpg",
            songs: [
                { id: "2024-Kalki2898AD-song1", title: "Bhairava Anthem", artist: "Diljit Dosanjh, Deepak Blue", duration: "2:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863127/Bhairava_Anthem_us4nrd.mp3" },
                { id: "2024-Kalki2898AD-song2", title: "Bujji Theme", artist: "Priya Raghu", duration: "0:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863096/Bujji_Theme_mcxwc6.mp3" },
                { id: "2024-Kalki2898AD-song3", title: "Hope of Shambala", artist: "Shobana Chandrakumar", duration: "1:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863125/Hope_of_Shambala_jkfpnk.mp3" },
                { id: "2024-Kalki2898AD-song4", title: "Keshav Madhava", artist: "Amitabh Bachchan", duration: "1:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863158/Keshava_Madhava_vezbvt.mp3" },
                { id: "2024-Kalki2898AD-song5", title: "Ta Takkara", artist: "Sanjith Hegde, Dhee, Santhosh Narayanan", duration: "3:27", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863248/Ta_Takkara_Complex_Song_hc5vow.mp3" },
                { id: "2024-Kalki2898AD-song6", title: "Theme of Kalki", artist: "Kaala Bhairava, Ananthu, Gowtham Bharadwaj", duration: "3:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863226/Theme_Of_Kalki_ckfogb.mp3" },
            ]
        },


        // Doble Ismart
        {
            id: 'movie-2024-DoubleIsmart',
            title: "Double Ismart",
            actors: "Ram Pothineni, Kavya Thapar, Sanjay Dutt",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620990/Double_Ismart_si0a7p.jpg",
            songs: [
                { id: "2024-DoubleIsmart-song1", title: "Steppamaar", artist: "Anurag Kulkarni, Sahiti", duration: "4:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862805/Steppamaar_hkbkwr.mp3" },
                { id: "2024-DoubleIsmart-song2", title: "Maar Muntha Chod Chinta", artist: "Rahul Sipligunj, Dhanunjay Seepana, Keerthana Sharma", duration: "4:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862728/Maar_Muntha_Chod_Chinta_cuh83w.mp3" },
                { id: "2024-DoubleIsmart-song3", title: "Kya Lafda", artist: "Dhanunjay Seepana, Sindhuja Srinivasan", duration: "4:53", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862695/Kya_Lafda_mahg26.mp3" },
                { id: "2024-DoubleIsmart-song4", title: "Big Bull", artist: "Prudhvi Chandra, Sanjana Kalamanje", duration: "4:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862746/Big_Bull_vvs8go.mp3" },
                { id: "2024-DoubleIsmart-song5", title: "Mother", artist: "Ramya Behara", duration: "3:57", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862785/Mother_o4lyfj.mp3" },
            ]
        },

        // Mr.Bachan
        {
            id: 'movie-2024-MrBachan',
            title: "Mr. Bachan",
            actors: "Ravi Teja, Bhagya Shri Borse",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620995/Mr_Bachan_uo3wct.jpg",
            songs: [

                { id: "2024-MrBachan-song2", title: "Reppal Dappul", artist: "Anurag Kulkarni, Mangli", duration: "4:33", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863605/Reppal_Dappul_vwrr7t.mp3" },
                { id: "2024-MrBachan-song3", title: "Jikki", artist: "Karthik, Ramya Behara", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863569/Jikki_uwgmfy.mp3" },
                { id: "2024-MrBachan-song4", title: "Sitar", artist: "Saketh Komunduri, Sameera Bharadwaj", duration: "4:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863580/Sitar_yyz9fk.mp3" },
                { id: "2024-MrBachan-song5", title: "Nallanchu Thellacheera", artist: "Sreerama Chandra, Sameera Bharadwaj", duration: "3:59", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863616/Nallanchu_Thellacheera_chtt4w.mp3" },
            ]
        },

        // Aay
        {
            id: 'movie-2024-Aay',
            title: "Aay",
            actors: "Narne Nithin, Nayan Sarika",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620987/Aay_ic0he0.jpg",
            songs: [
                { id: "2024-Aay-song1", title: "AAY Theme Song", artist: "Ananth Siddharth, Mokshit Y", duration: "2:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862314/AAY_Theme_Song_vgtmpd.mp3" },
                { id: "2024-Aay-song2", title: "Sufiyana", artist: "Ram Miriyala, Sameera Bharadwaj, and Ramya Shree", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862355/Sufiyana_an9ppj.mp3" },
            ]
        },

        // Maruthi Nagar Subramanyam
        {
            id: 'movie-2024-MaruthiNagarSubramanyam',
            title: "Maruthi Nagar Subramanyam",
            actors: "Rao Ramesh, Indraja, and Ankith Koyya",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620993/Maruthi_Nagar_Subramanyam_tqfg1a.jpg",
            songs: [
                { id: "2024-MaruthiNagarSubramanyam-song1", title: "Madam Sir Madam Anthe", artist: "Sid Sriram", duration: "3:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863306/Madam_Sir_Madam_Anthe_w2bj1q.mp3" },
                { id: "2024-MaruthiNagarSubramanyam-song2", title: "Nene Subramanyam", artist: "Ram Miriyala", duration: "3:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863282/Nene_Subramanyam_huivkq.mp3" },
            ]
        },

        // Saripodha Sanivaram
        {
            id: 'movie-2024-SaripodhaSanivaram',
            title: "Saripodha Sanivaram",
            actors: "Nani, Priyanka Arul Mohan, S J Surya",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620998/Saripodhaa_Sanivaram_rzk0xt.jpg",
            songs: [
                { id: "2024-SaripodhaSanivaram-song1", title: "Garam Garam", artist: "Vishal Dadlani", duration: "4:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864365/Garam_Garam_a8ea2c.mp3" },
                { id: "2024-SaripodhaSanivaram-song2", title: "Ullaasam", artist: "Sanjith Hegde, Krishna Lasya Muthyala", duration: "4:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864522/Ullaasam_y9yfvr.mp3" },
                { id: "2024-SaripodhaSanivaram-song3", title: "Sarimapa", artist: "Karthik", duration: "4:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864429/Sa_Ri_Ma_Pa_r9ji8n.mp3" },
                { id: "2024-SaripodhaSanivaram-song4", title: "Laalijo Raagam", artist: "Madhura Dhara Talluri", duration: "4:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864378/Laalijo_Raagam_y1n1lb.mp3" },
                { id: "2024-SaripodhaSanivaram-song5", title: "Malupero", artist: "PVNS Rohit", duration: "0:52", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864384/Malupero_sui06z.mp3" },
                { id: "2024-SaripodhaSanivaram-song6", title: "Veta Vinodham", artist: "Deepak Blue", duration: "2:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864490/Veta_Vinodham_vmxoiv.mp3" },
                { id: "2024-SaripodhaSanivaram-song7", title: "Dimbhaka", artist: "Saicharan Bhaskaruni, Pranav Chaganti", duration: "2:35", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864323/Dimbhaka_nv236l.mp3" },
                { id: "2024-SaripodhaSanivaram-song8", title: "Bhaga Bhaga", artist: "Chorus", duration: "2:55", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864313/Bhaga_Bhaga_l8li8j.mp3" },
                { id: "2024-SaripodhaSanivaram-song9", title: "Samavarthi", artist: "Jakes Bejoy", duration: "1:25", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864356/Samavarthi_v4atpk.mp3" },
                { id: "2024-SaripodhaSanivaram-song10", title: "Unchained", artist: "Jakes Bejoy", duration: "2:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864462/Unchained_dmf63q.mp3" },
                { id: "2024-SaripodhaSanivaram-song11", title: "Not A Teaser", artist: "Jakes Bejoy", duration: "1:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864313/Not_A_Teaser_Theme_lf7pob.mp3" },
                { id: "2024-SaripodhaSanivaram-song12", title: "Shiva Thandavame", artist: "Jakes Bejoy", duration: "3:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864388/Shiva_Thandavame_Trailer_Theme_jqcmmq.mp3" },
            ]
        },

        // Mathu Vadalara 2
        {
            id: 'movie-2024-MathuVadalara2',
            title: "Mathu Vadalara 2",
            actors: "Sri Simha, Faria Abdullah",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620994/Mathu_Vadalara_2_tjzp9o.jpg",
            songs: [
                { id: "2024-MathuVadalara2-song1", title: "Drama Nakko Mama", artist: "Faria Abdullah, Kala Bhairava", duration: "5:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863471/Drama_Nakko_Mama_if6t0k.mp3" },
            ]
        },

        // Devara Part - 1
        {
            id: 'movie-2025-DevaraPart1',
            title: "Devara Part - 1",
            actors: "NTR, Janhvi Kapoor",
            year: 2024,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620989/Devara_Part_1_egsqco.jpg",
            songs: [
                { id: "2024-DevaraPart1-song5", title: "Fear", artist: "Anirudh Ravichander", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862646/Fear_t0wre4.mp3" },
                { id: "2024-DevaraPart1-song3", title: "Chuttamalle", artist: "Shilpa Rao", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862664/Chuttamalle_vuyl6l.mp3" },
                { id: "2024-DevaraPart1-song2", title: "Ayudha Pooja", artist: "Kaala Bhairava", duration: "2:55", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862551/Ayudha_Pooja_rm0eox.mp3" },
                { id: "2024-DevaraPart1-song1", title: "All Hail The Tiger", artist: "Anirudh Ravichander, Natalie Di Luccio", duration: "1:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862527/All_Hail_The_Tiger_hsgomt.mp3" },
                { id: "2024-DevaraPart1-song4", title: "Daavudi", artist: "Nakash Aziz, Akasa Singh", duration: "2:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862594/Daavudi_eatcf6.mp3" },
                { id: "2024-DevaraPart1-song6", title: "Red Sea", artist: "Anirudh Ravichander", duration: "2:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750862645/Red_Sea_oockd3.mp3" },
            ]
        },

        // SWAG
        {
            id: 'movie-2025-SWAG',
            title: "SWAG",
            actors: "Sree Vishnu, Ritu Varma, Daksha Nagarkar",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620998/Swag_wp3xmi.jpg",
            songs: [
                { id: "2025-SWAG-song1", title: "Guva Gootlo", artist: "Mano, Geetha Madhuri, and Snigdha Sharma", duration: "4:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864458/Guvva_Gootilo_deuooc.mp3" },
                { id: "2025-SWAG-song2", title: "Interval Bang", artist: "Vivek Sagar", duration: "1:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864422/Interval_Bang_slzepl.mp3" },
                { id: "2025-SWAG-song3", title: "Neelo Naalo", artist: "Rajesh Krishnan and Anjana Sowmya", duration: "4:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864501/Neelo_Naalo_viqvvy.mp3" },
                { id: "2025-SWAG-song4", title: "Singaro Singa", artist: "Baba Sehgal, Vaikom Vijayalakshmi and Vivek Sagar", duration: "3:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864571/Singaro_Singa_jzkdz6.mp3" },
            ]
        },

        // Lucky Bhaskar
        {
            id: 'movie-2025-LuckyBhaskar',
            title: "Lucky Bhaskar",
            actors: "Dulquer Salmaan, Meenakshi Choudhary",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620992/Lucky_Bhaskar_tyltyz.jpg",
            songs: [
                { id: "2025-LuckyBhaskar-song1", title: "Srimathi Garu", artist: "Vishal Mishra, Shweta Mohan", duration: "4:07", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863314/Srimathi_Garu_bea5om.mp3" },
                { id: "2025-LuckyBhaskar-song2", title: "Lucky Baskhar", artist: "Usha Uthup", duration: "4:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863199/Lucky_Baskhar_ap4ug9.mp3" },
                { id: "2025-LuckyBhaskar-song3", title: "Nijamaa Kalaa", artist: "Krishna Tejasvi", duration: "4:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863251/Nijamaa_Kalaa_wzoawv.mp3" },
            ]
        },

        // Matka 
        {
            id: 'movie-2025-Matka',
            title: "Matka",
            actors: "Varun Tej, Meenakshi Chaudhary",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620994/Matka_rmrazt.jpg",
            songs: [
                { id: "2025-Matka-song1", title: "Le Le Raja", artist: "Neeti Mohan", duration: "4:33", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863384/Le_Le_Raja_eclinb.mp3" },
                { id: "2025-Matka-song2", title: "Thassadiyya", artist: "Mano", duration: "3:51", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864688/Thassadiyya_maaiga.mp3" },
                { id: "2025-Matka-song3", title: "Rama Talkies Ramp", artist: "Sai Deva Harsha", duration: "3:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750863384/Rama_Talkies_Ramp_znhluf.mp3" },
            ]
        },


        // Pushpa 2 - The Rule
        {
            id: 'movie-2025-Pushpa2TheRule',
            title: "Pushpa 2 - The Rule",
            actors: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Sunil, Shree Leela",
            year: 2025,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620997/Pushpa_2_f580vd.jpg",
            songs: [
                { id: "2025-Pushpa2TheRule-song1", title: "Gango Renuka Thalli", artist: "Mahalingam", duration: "3:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864180/Gango_Renuka_Thalli_zbnb2c.mp3" },
                { id: "2025-Pushpa2TheRule-song2", title: "Pushpa Pushpa", artist: "Nakash Aziz", duration: "4:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864269/Pushpa_Pushpa_fly4xh.mp3" },
                { id: "2025-Pushpa2TheRule-song3", title: "Peelings", artist: "Shankarr Babu Kandukuri", duration: "4:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864276/Peelings_ifgpfl.mp3" },
                { id: "2025-Pushpa2TheRule-song4", title: "Sooseki", artist: "Shreya Ghoshal", duration: "4:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864267/Sooseki_sfm4yk.mp3" },
                { id: "2025-Pushpa2TheRule-song5", title: "Kissik", artist: "Sublahshini", duration: "4:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1750864198/Kissik_vck9mv.mp3" },
            ]
        },
    ],


    2023: [


        // Leo
        {
            id: 'movie-2023-Leo',
            title: "Leo",
            actors: "Vijay Thalapathy, Trisha",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620903/Leo_crj3i8.jpg",
            songs: [
                { id: "2023-Leo-song1", title: "Badass", artist: "Anirudh Ravichander, Sri Krishna, Saicharan Bhaskaruni", duration: "3:50", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473946/Badass_a85mi9.mp3" },
                { id: "2023-Leo-song2", title: "Bloody Sweet", artist: "Anirudh Ravichander, Siddharth Basrur", duration: "2:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473943/Bloody-Sweet_nlwdbe.mp3" },
                { id: "2023-Leo-song3", title: "Glimpse of Antony Das", artist: "Anirudh Ravichander", duration: "0:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473667/Glimpse_of_Antony_Das_mpvfdu.mp3" },
                { id: "2023-Leo-song4", title: "Glimpse of Harold Das", artist: "Anirudh Ravichander", duration: "0:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473663/Glimpse_of_Harold_Das_egvrsg.mp3" },
                { id: "2023-Leo-song5", title: "Lokiverse 2.0", artist: "Anirudh Ravichander", duration: "1:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473894/Lokiverse_2.0_x7jocu.mp3" },
                { id: "2023-Leo-song6", title: "Ney Ready", artist: "Anirudh Ravichander, Revanth, Roll Rida, Ritesh G Rao", duration: "4:08", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473940/Ney_Ready_m0j3fh.mp3" },
                { id: "2023-Leo-song7", title: "Prema oh Ayudham", artist: "Anirudh Ravichander, J.V. Sudharshu, Priya Mali", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752473945/Prema_oh_Ayudham_e9bfgs.mp3" },
            ]
        },

        // Salaar
        {
            id: 'movie-2023-Salaar',
            title: "Salaar",
            actors: "Prabhas, Shruti Haasan",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620983/Salaar_cwq43m.jpg",
            songs: [
                { id: "2023-Salaar-song1", title: "Aaru Sethulunnaa", artist: "Kanakavva", duration: "1:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279767/Aaru_Sethulunnaa_osrmal.mp3" },
                { id: "2023-Salaar-song2", title: "Prathi Kadalo", artist: "Child Singers Group 1", duration: "3:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279829/Prathi_Kadalo_yfy3e1.mp3" },
                { id: "2023-Salaar-song3", title: "Sooreede", artist: "Harini Ivaturi", duration: "3:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279787/Sooreede_hvkl3l.mp3" },
                { id: "2023-Salaar-song4", title: "Sound of Salaar", artist: "Ravi Basrur Music Team", duration: "2:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279831/Sound_of_Salaar_xq09em.mp3" },
            ]
        },


        // Adipurush
        {
            id: 'movie-2023-Adipurush',
            title: "Adipurush",
            actors: "Prabhas, Kriti Sanon",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620897/Adipurush_nxtnte.jpg",
            songs: [
                { id: "2023-Adipurush-song1", title: "Shivoham", artist: "Haricharan", duration: "3:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752803614/Shivoham_p70neb.mp3" },
                { id: "2023-Adipurush-song2", title: "Huppa Huiya", artist: "Sukhwinder Singh", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752803608/Huppa_Huiya_soeq2r.mp3" },
                { id: "2023-Adipurush-song3", title: "Ram Sita Ram", artist: "Karthik, Sachet Tandon, Parampara Tandon", duration: "2:26", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752803612/Ram_Sita_Ram_em3ixm.mp3" },
                { id: "2023-Adipurush-song4", title: "Jai Shriam", artist: "Ajay Atul", duration: "2:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752803604/Jai_Shriram_kq7pwh.mp3" },
                { id: "2023-Adipurush-song5", title: "Priya Mithunam", artist: "Karthik, Shweta Mohan", duration: "2:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752803597/Priya_Mithunam_aho3x0.mp3" },
            ]
        },

        // Extra Ordinary Man
        {
            id: 'movie-2023-ExtraOrdinaryMan',
            title: "Extra Ordinary Man",
            actors: "Nithin, Sreeleela",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620901/Extra_Ordinary_Man_umjjag.jpg",
            songs: [
                { id: "2023-ExtraOrdinaryMan-song1", title: "Brush Vesko", artist: "Sanjith Hegde", duration: "4:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279812/Brush_Vesko_fd2fyx.mp3" },
                { id: "2023-ExtraOrdinaryMan-song2", title: "Danger Pilla", artist: "Armaan Malik", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276622/Danger_Pilla_oua4nj.mp3" },
                { id: "2023-ExtraOrdinaryMan-song3", title: "Pette Thaalam", artist: "Maneesha Pandranki, Sai Charan", duration: "1:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279759/Pette_Thaalam_h6ssst.mp3" },
                { id: "2023-ExtraOrdinaryMan-song4", title: "Sirraaku Thaandavam", artist: "Ram Miriyala", duration: "3:57", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279929/Sirraaku_Thaandavam_aacf1k.mp3" },
            ]
        },

        // Hi Nanna
        {
            id: 'movie-2023-HiNanna',
            title: "Hi Nanna",
            actors: "Nani, Mrunal Thakur",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620903/Hi_Nanna_pomtcu.jpg",
            songs: [
                { id: "2023-HiNanna-song9", title: "Samayama", artist: "Anurag Kulkarni, Srihari Krishnakumar", duration: "3:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279859/Samayama_rirhdm.mp3" },
                { id: "2023-HiNanna-song1", title: "Adigaa", artist: "Karthik", duration: "3:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279759/Adigaa_tfx6px.mp3" },
                { id: "2023-HiNanna-song2", title: "Ammaadi", artist: "Kaala Bhairava, Shakthisree Gopalan", duration: "3:33", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279867/Ammaadi_ong8xx.mp3" },
                { id: "2023-HiNanna-song3", title: "Asalelea", artist: "Chinmayi Sripada, Anurag Kulkarni", duration: "1:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276664/Asalelaa_x2wmb6.mp3" },
                { id: "2023-HiNanna-song4", title: "Chedhu Nijam", artist: "Geetha Madhuri", duration: "4:15", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279781/Chedhu_Nijam_e1kvfq.mp3" },
                { id: "2023-HiNanna-song5", title: "Enno Enno", artist: "Bhavana Isvi", duration: "1:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751278647/Enno_Enno_asdxgt.mp3" },
                { id: "2023-HiNanna-song6", title: "Gaaju Bomma", artist: "Hesham Abdul Wahab", duration: "4:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276623/Gaaju_Bomma_isywlb.mp3" },
                { id: "2023-HiNanna-song7", title: "Idhe Idhe", artist: "Hesham Abdul Wahab", duration: "3:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279940/Idhe_Idhe_gxucf5.mp3" },
                { id: "2023-HiNanna-song8", title: "Odiyamma", artist: "Dhruv Vikram, Shruti Haasan, Chinmayi Sripada", duration: "3:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279843/Odiyamma_gdsk2s.mp3" },
            ]
        },

        // Aadikeshava
        {
            id: 'movie-2023-Aadikeshava',
            title: "Aadikeshava",
            actors: "Vaishnav Tej, Sreeleela",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620896/Aadikeshava_etinkz.jpg",
            songs: [
                { id: "2023-Aadikeshava-song1", title: "Hey Bujji Bangaram", artist: "Armaan Malik, Yamini Ghantasala", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276630/Hey_Bujji_Bangaram_be88id.mp3" },
                { id: "2023-Aadikeshava-song2", title: "Leelammo", artist: "Nakash Aziz, Indravathi Chauhan", duration: "3:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279895/Leelammo_wuwtj6.mp3" },
                { id: "2023-Aadikeshava-song3", title: "Sitharala Sithravathi", artist: "Rahul Sipligunj, Ramya Behera", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276642/Sittharala_Sithravathi_yainxq.mp3" },
            ]
        },

        // Tiger Nageswara Rao
        {
            id: 'movie-2023-TigerNageswaraRao',
            title: "Tiger Nageswara Rao",
            actors: "Ravi Teja, Gayatri Bhardwaj",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620983/Tiger_Nageswara_Rao_vmftmg.jpg",
            songs: [
                { id: "2023-TigerNageswaraRao-song1", title: "Samarale Sarvanna", artist: "Hemachandra Vedala", duration: "4:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279786/Samarale_Sariovna_fbfrcn.mp3" },
                { id: "2023-TigerNageswaraRao-song2", title: "Ek Dum Ek Dum", artist: "Anurag Kulkarni", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276590/Ek_Dum_Ek_Dum_nkhxqd.mp3" },
                { id: "2023-TigerNageswaraRao-song3", title: "Rendu Gundala Monagadu", artist: "Kaala Bhairava", duration: "2:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279759/Rendu_Gundela_Monagada_uszn0t.mp3" },
                { id: "2023-TigerNageswaraRao-song4", title: "Veedu", artist: "Anurag Kulkarni", duration: "3:15", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279851/Veedu_wo2jbm.mp3" },
                { id: "2023-TigerNageswaraRao-song5", title: "Icchesukunale", artist: "Sinduri Vishal", duration: "4:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279786/Icchesukuntaale_p24ihj.mp3" },
            ]
        },

        // Bhagavanth Kesari
        {
            id: 'movie-2023-BhagavanthKesari',
            title: "Bhagavanth Kesari",
            actors: "Nandamuri Balakrishna, Sreeleela",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620898/Bhagavanth_Kesari_uiddpe.jpg",
            songs: [
                { id: "2023-BhagavanthKesari-song1", title: "Ganesh Anthem", artist: "Kareemulla, Maneesh Pandranki", duration: "4:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276589/Ganesh_Anthem_h1unva.mp3" },
                { id: "2023-BhagavanthKesari-song2", title: "Ichi Padi Ichi Padi", artist: "Anthony Daasan, Geetha Madhuri, Sahithi Chaganti", duration: "3:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279909/Ichi_Pad_Ichi_Pad_whkawq.mp3" },
                { id: "2023-BhagavanthKesari-song3", title: "Jaaguda Jaaguda", artist: "Jyoti Nooran", duration: "2:59", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279841/Jaaguda_Jaaguda_fbjzzp.mp3" },
                { id: "2023-BhagavanthKesari-song4", title: "Maanu Maaku", artist: "Keerthana Srinivasan", duration: "2:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279805/Maanu_Maaku_n5iq9b.mp3" },
                { id: "2023-BhagavanthKesari-song5", title: "Roar of Kesari", artist: "Maneesha Pandranki", duration: "3:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279786/Roar_of_Kesari_bboxn8.mp3" },
                { id: "2023-BhagavanthKesari-song6", title: "Uyyaalo Uyyaala", artist: "S.P. Charan", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276624/Uyyaalo_Uyyaala_karv1b.mp3" },
            ]
        },

        // Rules Ranjann 
        {
            id: 'movie-2023-RulesRanjann',
            title: "Rules Ranjann",
            actors: "Kiran Abbavaram, Neha Shetty",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620982/Rules_Ranjan_iyzbiq.jpg",
            songs: [
                { id: "2023-RulesRanjann-song1", title: "Naalo Nene Lenu", artist: "Sarath Santhosh", duration: "3:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279762/Naalo_Nene_Lenu_ijym8o.mp3" },
                { id: "2023-RulesRanjann-song2", title: "Sammohanuda", artist: "Shreya Ghoshal", duration: "3:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279766/Sammohanuda_oxudls.mp3" },
                { id: "2023-RulesRanjann-song3", title: "Enduku Ra Babbu", artist: "Rahul Sipligunj, LV Revanth", duration: "3:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279764/Enduku_Ra_Babu_snhqbr.mp3" },
                { id: "2023-RulesRanjann-song4", title: "Dekho Mumbai", artist: "Adnan Sami, Payal Dev", duration: "4:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279784/Dhekho_Mumbai_dvfmur.mp3" },
            ]
        },

        // MAD
        {
            id: 'movie-2023-MAD',
            title: "MAD",
            actors: "Narne Nithiin, Sangeeth Sobhan, Ram Nithin, Sri Gouri Priya, Ananathika Sanilkumar, Gopika Udayan",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620981/MAD_jglq0q.jpg",
            songs: [
                { id: "2023-MAD-song1", title: "College Papa", artist: "Bheems Ceciroleo, Varam, Keerthana Sharma", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276598/College_Papa_b9aokq.mp3" },
                { id: "2023-MAD-song2", title: "Malli Malli Raani Roju", artist: "Sai Charan Bhaskaruni", duration: "2:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279827/Malli_Malli_Raani_Roju_md9i5a.mp3" },
                { id: "2023-MAD-song3", title: "Nuvvu Navvukuntu", artist: "Kapil Kaplan", duration: "3:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279864/Nuvvu_Navvukuntu_hldrnm.mp3" },
                { id: "2023-MAD-song4", title: "Proudse Single", artist: "Nakash Aziz, Bheems Ceciroleo", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279851/Proudse_Single_aat8sv.mp3" },
            ]
        },

        // Skanda
        {
            id: 'movie-2023-Skanda',
            title: "Skanda",
            actors: "Ram Pothineni, Sreeleela",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620983/Skanda_fg8nln.jpg",
            songs: [
                { id: "2023-Skanda-song1", title: "Cult Mama", artist: "Hema Chandra, Ramya Behera, Maahaa", duration: "3:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279928/Cult_Mama_cujy8j.mp3" },
                { id: "2023-Skanda-song2", title: "Dummare Dumma", artist: "Armaan Malik, Ayyan Pranathi", duration: "4:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276611/Dummare_Dumma_jxyqh0.mp3" },
                { id: "2023-Skanda-song3", title: "Gandarabai", artist: "Nakash Aziz, Soujanya Bhagavathula", duration: "4:08", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276610/Gandarabai_b4jwv9.mp3" },
                { id: "2023-Skanda-song4", title: "Nee Chuttu Chuttu", artist: "Sid Sriram, Sanjana Kalmanje", duration: "4:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276599/Nee_Chuttu_Chuttu_ck30jj.mp3" },
            ]
        },


        // Miss Shetty Mr Polishetty
        {
            id: 'movie-2023-MissShettyMrPolishetty',
            title: "Miss Shetty Mr Polishetty",
            actors: "Naveen Polshetty, Anushka Shetty",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620981/Mrs_Shetty_Mr_Polishetty_oohajn.jpg",
            songs: [
                { id: "2023-MissShettyMrPolishetty-song1", title: "Hathavidi", artist: "Dhanush", duration: "4:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279769/Hathavidi_rvdmdk.mp3" },
                { id: "2023-MissShettyMrPolishetty-song2", title: "Lady Luck", artist: "Karthik", duration: "3:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279759/Lady_Luck_kyzoqw.mp3" },
                { id: "2023-MissShettyMrPolishetty-song3", title: "No No No", artist: "M.M. Manasi", duration: "3:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279758/No_No_No_a6oy5a.mp3" },
            ]
        },

        // Kushi
        {
            id: 'movie-2023-Kushi',
            title: "Kushi",
            actors: "Vijay Devarakonda, Samantha",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620902/Kushi_sztjg0.jpg",
            songs: [
                { id: "2023-Kushi-song1", title: "Aradhya", artist: "Sid Sriram, Chinmayi Sripaada", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276592/Aradhya_qk5ls8.mp3" },
                { id: "2023-Kushi-song2", title: "Na Roja Nuvve", artist: "Hesham Abdul Wahab, Manju Sri", duration: "3:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279936/Na_Roja_Nuvve_dx8wly.mp3" },
                { id: "2023-Kushi-song3", title: "Osi Pellama", artist: "Rahul Sipligunj, Saketh", duration: "3:35", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279886/Osi_Pellama_jyo5hw.mp3" },
                { id: "2023-Kushi-song4", title: "Yedhaki Oka Gaayam", artist: "Hesham Abdul Wahab, Divya S Menon", duration: "3:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279798/Yedhaki_Oka_Gaayam_fohpdd.mp3" },
            ]
        },

        // Bro
        {
            id: 'movie-2023-Bro',
            title: "Bro",
            actors: "Pawan Kalyan, Sai Durgha Tej, Ketika Sharma",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620900/Bro_sftczd.jpg",
            songs: [
                { id: "2023-Bro-song1", title: "Bro Rap", artist: "Aditya Iyengar", duration: "2:01", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279756/Bro_Rap_ntwg2a.mp3" },
                { id: "2023-Bro-song2", title: "Bro Theme", artist: "Aditi Bhavaraju, Aditya Iyengar, Adviteeya, Anudeep", duration: "4:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276624/Bro_Theme_uteoqf.mp3" },
                { id: "2023-Bro-song3", title: "Bro", artist: "Arun Kaundinya, Hymneth, Ritesh G Rao, Pavan Charan", duration: "2:35", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279811/Bro_pr4v1i.mp3" },
                { id: "2023-Bro-song4", title: "Its My Time (Rap)", artist: "Sai Charan Bhaskaruni, MC Hari", duration: "4:57", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276640/Its_My_Time_Rap_jedbdi.mp3" },
                { id: "2023-Bro-song5", title: "Jaanavule", artist: "Thaman S, K.Pranati", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279900/Jaanavule_lifwb1.mp3" },
                { id: "2023-Bro-song6", title: "Jeevarne", artist: "Kaala Bhairava", duration: "6:55", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279813/Jeevame_yq8hak.mp3" },
                { id: "2023-Bro-song7", title: "My Dear Markandeya", artist: "Revanth, Snigdha Sharma", duration: "4:15", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276641/My_Dear_Markandeya_mthx2e.mp3" },
                { id: "2023-Bro-song8", title: "Okasaari Putti", artist: "Ravi G", duration: "3:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279776/Okasaari_Putti_wncex8.mp3" },
            ]
        },

        // Bhola Shanka
        {
            id: 'movie-2023-BholaShankar',
            title: "Bhola Shankar",
            actors: "Chiranjeevi, Keerthy Suresh, Thamannah",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620899/Bhola_Shankar_g8ghwc.jpg",
            songs: [
                { id: "2023-BholaShankar-song1", title: "Bholaa Mania", artist: "Mahati Swara Sagar, Revanth LV", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276618/Bholaa_Mania_gcetcf.mp3" },
                { id: "2023-BholaShankar-song2", title: "Jam Jam Jajjanaka", artist: "Anurag Kulkarni, Mangli", duration: "3:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279911/Jam_Jam_Jajjanaka_fk39ki.mp3" },
                { id: "2023-BholaShankar-song3", title: "Kottara Kottu Teerumauru", artist: "Rahul Sipligunj", duration: "3:36", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279895/Kottara_Kottu_Teenumaaru_jwgmmz.mp3" },
                { id: "2023-BholaShankar-song4", title: "Milky Beauty", artist: "Mahati Swara Sagar, Vijay Prakash, Sanjana Kalmanje", duration: "3:53", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279933/Milky_Beauty_umutaw.mp3" },
                { id: "2023-BholaShankar-song5", title: "Rage Of Bholaa", artist: "Asura, Feroz Israel", duration: "3:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279820/Rage_Of_Bholaa_lhxgkt.mp3" },
            ]
        },

        // Baby
        {
            id: 'movie-2023-Baby',
            title: "Baby",
            actors: "Anand Devarakonda, Vaishnavi",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620897/Baby_kjx0bs.jpg",
            songs: [
                { id: "2023-Baby-song1", title: "Chandamama", artist: "Vijay Bulganin, Deepu", duration: "5:50", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279873/Chandamama_viiigw.mp3" },
                { id: "2023-Baby-song2", title: "Chanti Pillala", artist: "Anudeep Dev", duration: "5:06", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279839/Chanti_Pillala_mi3hyr.mp3" },
                { id: "2023-Baby-song3", title: "Deva Raaja", artist: "Arya Dhayal", duration: "5:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279884/Deva_Raaja_tdikpr.mp3" },
                { id: "2023-Baby-song4", title: "Kalakalame", artist: "Sahithi Chaganti", duration: "3:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279781/Kalakalame_zmpzun.mp3" },
                { id: "2023-Baby-song5", title: "O Rendu Prema Meghaalila", artist: "Sreerama Chandra", duration: "5:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279798/O_Rendu_Prema_Meghaalila_oberv0.mp3" },
                { id: "2023-Baby-song6", title: "O Rendu Prema Meghaalila (Reprise)", artist: "Sreerama Chandra", duration: "5:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279854/ORendu_Prema_Meghaalila_Reprise_mjhjds.mp3" },
                { id: "2023-Baby-song7", title: "Premisthunna", artist: "P V N S Rohit", duration: "6:36", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279810/Premisthunna_avsr7b.mp3" },
                { id: "2023-Baby-song8", title: "Ribapappa", artist: "Sri Krishna", duration: "5:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279782/Ribapappa_j6j2mf.mp3" },
            ]
        },

        // Agent
        {
            id: 'movie-2023-Agent',
            title: "Agent",
            actors: "Akhil Akkineni, Sakshi Vaidya",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620898/Agent_xsb7z9.jpg",
            songs: [
                { id: "2023-Agent-song1", title: "Endhe Endhe", artist: "Sanjith Hegde, Hiphop Tamizha, Padmalatha", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279881/Endhe_Endhe_bat6df.mp3" },
                { id: "2023-Agent-song2", title: "Malli Malli", artist: "Hiphop Tamizha", duration: "3:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279869/Malli_Malli_qwyejl.mp3" },
                { id: "2023-Agent-song3", title: "Rama Krishna", artist: "Ram Miriyala", duration: "3:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279854/Rama_Krishna_afhp8o.mp3" },
                { id: "2023-Agent-song4", title: "Wild Saala", artist: "Sravana Bhargavi, Bheems Ceciroleo", duration: "1:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279771/Wild_Saala_pl7dxv.mp3" },
            ]
        },

        // Virupaksha
        {
            id: 'movie-2023-Virupaksha',
            title: "Virupaksha",
            actors: "Sai Dharam Tej, Samyuktha",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620985/Virupaksha_krtetz.jpg",
            songs: [
                { id: "2023-Virupaksha-song1", title: "Kalallo", artist: "Anurag Kulkarni, Madhushree", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279927/Kalallo_weu3e1.mp3" },
                { id: "2023-Virupaksha-song2", title: "Nachavule Nachavule", artist: "Karthik", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279912/Nachavule_Nachavule_nyctmr.mp3" },
                { id: "2023-Virupaksha-song3", title: "Rajile Ilaa", artist: "B. Ajaneesh Loknath", duration: "4:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279835/Ragile_Jwaale_w76cwg.mp3" },
            ]
        },

        // Meter
        {
            id: 'movie-2023-Meter',
            title: "Meter",
            actors: "Kiran Abbavaram, Athulya Ravi",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620981/Meter_be62gj.jpg",
            songs: [
                { id: "2023-Meter-song1", title: "Chamak Chamak Pori", artist: "Arun Kaundinya, M.L. Gayatri", duration: "3:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279761/Chamak_Chamak_Pori_cd6pjw.mp3" },
                { id: "2023-Meter-song2", title: "Meter Title Song", artist: "Sai Karthik", duration: "3:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279760/Meter_Title_Song_pby99q.mp3" },
                { id: "2023-Meter-song3", title: "Oh Baby Jaaripomake", artist: "Dhanunjay", duration: "3:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279761/Oh_Baby_Jaaripomake_jcqgfq.mp3" },
            ]
        },

        // Das Ka Dhamki
        {
            id: 'movie-2023-DasKaDhamki',
            title: "Das Ka Dhamki",
            actors: "Vishwak Sen, Akshara Gowda",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620900/Das_Ka_Dhamki_e28upt.jpg",
            songs: [
                { id: "2023-DasKaDhamki-song1", title: "All Most Padipoyinde Pilla", artist: "Aditya RK, Leon James", duration: "3:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279771/All_Most_Padipoyinde_Pilla_c0jvwc.mp3" },
                { id: "2023-DasKaDhamki-song2", title: "Mawa Bro", artist: "Ram Miriyala", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279773/Mawa_Bro_q0ytpi.mp3" },
                { id: "2023-DasKaDhamki-song3", title: "O Dollar Pillaa", artist: "Mangli", duration: "3:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279775/O_Dollar_Pillagaa_dwomsh.mp3" },
                { id: "2023-DasKaDhamki-song4", title: "Yevarini Yevanitho", artist: "Haricharan", duration: "2:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279756/Yevarini_Yevaritho_arom7m.mp3" },
            ]
        },

        // Vinaro Bhagyamu Vishnu Katha
        {
            id: 'movie-2023-VinaroBhagyamuVishnuKatha',
            title: "Vinaro Bhagyamu Vishnu Katha",
            actors: "Kiran Abbavaram, Kashmira Pardeshi",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620984/Vinaro_Bhagyamu_Vishnu_Katha_hcqbjw.jpg",
            songs: [
                { id: "2023-VinaroBhagyamuVishnuKatha-song1", title: "Chukkalevettu Kondale", artist: "Anurag Kulkarni", duration: "3:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279767/Chukkalettu_Kondale_cmlxku.mp3" },
                { id: "2023-VinaroBhagyamuVishnuKatha-song2", title: "Darshana", artist: "Anurag Kulkarni", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279796/Darshana_bttiy7.mp3" },
                { id: "2023-VinaroBhagyamuVishnuKatha-song3", title: "Oh Bangaram", artist: "Kapil Kapilan", duration: "4:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279771/Oh_Bangaram_fiftdv.mp3" },
                { id: "2023-VinaroBhagyamuVishnuKatha-song4", title: "Pravasanni", artist: "Hymath Mohammed", duration: "2:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279765/Pravasanni_x9wtow.mp3" },
                { id: "2023-VinaroBhagyamuVishnuKatha-song5", title: "Vaasava Suhaasa", artist: "Karunya", duration: "3:36", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279768/Vaasava_Suhaasa_x2ipac.mp3" },
            ]
        },

        // Dasara
        {
            id: 'movie-2023-Dasara',
            title: "Dasara",
            actors: "Nani, Keerthy Suresh",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620900/Dasara_skm8mr.jpg",
            songs: [
                { id: "2023-Dasara-song1", title: "Chamkeela Angeelesi", artist: "Ram Miriyala, Dhee", duration: "3:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279866/Chamkeela_Angeelesi_zeydbn.mp3" },
                { id: "2023-Dasara-song2", title: "Oori Vaari", artist: "Santhosh Narayanan", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279896/Ori_Vaari_ew4yp0.mp3" },
                { id: "2023-Dasara-song3", title: "Cricket Rap", artist: "Santhosh Narayanan", duration: "2:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279799/Cricket_Rap_rh5mir.mp3" },
                { id: "2023-Dasara-song4", title: "Dhoom Dhaam Dhosthaan", artist: "Rahul Sipligunj, Gotte Kanakavva, Gannora Dindu", duration: "4:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276591/Dhoom_Dhaam_Dhosthaan_qhawcw.mp3" },
                { id: "2023-Dasara-song5", title: "Celebration of Vennela", artist: "Santhosh Narayanan", duration: "0:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279759/Celebration_of_Vennela_ldhvpl.mp3" },
                { id: "2023-Dasara-song6", title: "Chithu", artist: "Kanakavva", duration: "1:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279799/Chithu_l9ifzf.mp3" },
                { id: "2023-Dasara-song7", title: "Ede Dharani", artist: "Anurag Kulkarni", duration: "0:53", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279799/Chithu_l9ifzf.mp3" },
                { id: "2023-Dasara-song8", title: "Monna Badilo", artist: "Pavithra Chari", duration: "4:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276600/Monna_Badilo_e9irxm.mp3" },
                { id: "2023-Dasara-song9", title: "Oh Ammalaalo Ammalaalo", artist: "Anurag Kulkarni", duration: "2:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279819/Oh_Ammalaalo_Ammalaalo_r1mmbl.mp3" },
                { id: "2023-Dasara-song10", title: "Silk Bar", artist: "Narsanna, Kanakavva", duration: "2:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279817/Silk_Bar_fohuq5.mp3" },
            ]
        },

        // Writer Padmabhushan
        {
            id: 'movie-2023-WriterPadmabhushan',
            title: "Writer Padmabhushan",
            actors: "Suhas, Tina Shilparaj",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620986/Writer_Padmabushan_dtaq2b.jpg",
            songs: [
                { id: "2023-WriterPadmabhushan-song1", title: "Aybaboi Gandaragolam", artist: "Lakshmi Meghana, Saicharan Bhaskaruni", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279769/Aybaboi_Gandaragolam_u7vd1u.mp3" },
                { id: "2023-WriterPadmabhushan-song2", title: "Kannullo Nee Roopame", artist: "Dhanunjay Seepana", duration: "3:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279774/Kannullo_Nee_Roopame_o6qqyh.mp3" },
            ]
        },

        // Waltair Veerayya
        {
            id: 'movie-2023-WaltairVeerayya',
            title: "Waltair Veerayya",
            actors: "Chiranjeevi, Ravi Teja, Shruti Haasan, Catherine Tresa",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620986/Waltair_Veerayya_imiulh.jpg",
            songs: [
                { id: "2023-WaltairVeerayya-song1", title: "Boss Party", artist: "Nakash Aziz, Devi Sri Prasad, Hari Priya", duration: "3:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279884/Boss_Party_l6tlrl.mp3" },
                { id: "2023-WaltairVeerayya-song2", title: "Neekemo Andamekkkuva", artist: "Mika Singh, Geetha Madhuri, D. Velmurugan", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279938/Neekemo_Andamekkuva_fmole8.mp3" },
                { id: "2023-WaltairVeerayya-song3", title: "Poonakaalu Loading", artist: "Roll Rida, Ram Miriyala", duration: "3:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279915/Poonakaalu_Loading_xkff9g.mp3" },
                { id: "2023-WaltairVeerayya-song4", title: "Sridevi Chiranjeevi", artist: "Jaspreet Jazz, Sameera Bharadwaj", duration: "3:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279876/Sridevi_Chiranjeevi_igdrgg.mp3" },
                { id: "2023-WaltairVeerayya-song5", title: "Veerayya", artist: "Anurag Kulkarni", duration: "4:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276626/Veerayya_mrodcl.mp3" },
            ]
        },

        // Veera Simha Reddy
        {
            id: 'movie-2023-VeeraSimhaReddy',
            title: "Veera Simha Reddy",
            actors: "Nandamuri Balakrishna, Honey Rose, Shruthi Haasan",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620984/Veera_Simha_Reddy_k06fix.jpg",
            songs: [
                { id: "2023-VeeraSimhaReddy-song1", title: "Jai Balayya", artist: "Karimullah", duration: "3:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279909/Jai_Balayya_sadwau.mp3" },
                { id: "2023-VeeraSimhaReddy-song2", title: "Suguna Sundari", artist: "Ram Miriyala, Snigdha Sharma", duration: "4:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751276639/Suguna_Sundari_mz6o4k.mp3" },
            ]
        },



        // Mem Famous
        {
            id: 'movie-2023-MemFamous',
            title: "Mem Famous",
            actors: "Sumanth, Saarya",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620981/Mem_Famous_mmsqib.jpg",
            songs: [
                { id: "2023-MemFamous-song1", title: "Ayyayyo", artist: "Rahul Sipligunj", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279790/Ayyayyo_jhslq2.mp3" },
                { id: "2023-MemFamous-song2", title: "Bangarulokan", artist: "Balaji, Sahithi Chaganti", duration: "3:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279763/Bangarulokam_wpjqk4.mp3" },
                { id: "2023-MemFamous-song3", title: "Dhinkachika", artist: "Kalyan Nayak", duration: "3:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279757/Dhinkachika_k87cyp.mp3" },
                { id: "2023-MemFamous-song4", title: "Dosthulam", artist: "Kaala Bhairava", duration: "4:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279782/Dosthulam_wmozrc.mp3" },
                { id: "2023-MemFamous-song5", title: "Mem Famous Title Song", artist: "Mangli", duration: "3:51", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279762/Mem_Famous_Title_Song_xz6bsj.mp3" },
                { id: "2023-MemFamous-song6", title: "Minimum Song", artist: "Rahul Sipligunj", duration: "3:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279757/Minimum_Song_coedtn.mp3" },
                { id: "2023-MemFamous-song7", title: "Success Song", artist: "Taruni, Kalyan Nayak", duration: "2:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279757/Success_Song_ur2zv2.mp3" },
            ]
        },

        // Balagam
        {
            id: 'movie-2023-Balagam',
            title: "Balagam",
            actors: "Priyadarshi, Kavya Kalyanram",
            year: 2023,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620898/Balagam_jux4z7.jpg",
            songs: [
                { id: "2023-Balagam-song4", title: "Ooru Palletooru", artist: "Mangli, Ram Miriyala, Bheems Ceciroleo", duration: "4:07", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279777/Ooru_Palletooru_yc6vs2.mp3" },
                { id: "2023-Balagam-song5", title: "Potti Pilla", artist: "Ram Miriyala", duration: "3:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751279772/Potti_Pilla_gzuosf.mp3" },
            ]
        }
    ],


    2022: [
        // Dhamaka
        {
            id: 'movie-2022-Dhamaka',
            title: "Dhamaka",
            actors: "Ravi Teja, Sreeleela",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620891/Dhamaka_m20n31.jpg",
            songs: [
                { id: "2022-Dhamaka-song1", title: "Danda Katiyal", artist: "Bheems Ceciroleo, Sahithi Chaganti, Mangli", duration: "4:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895577/Danda_Kadiyal_r4zcpk.mp3" },
                { id: "2022-Dhamaka-song2", title: "Jinthaak", artist: "Bheems Ceciroleo & Mangli", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895073/Jinthaak_xiu1nf.mp3" },
                { id: "2022-Dhamaka-song3", title: "Mass Raja", artist: "Nakash Aziz", duration: "4:01", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895161/Mass_Raja_tmz7xq.mp3" },
                { id: "2022-Dhamaka-song4", title: "Pulsar Bike (Female Version)", artist: "Divya Jyothi", duration: "4:04", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895289/Pulsar_Bike_Female_Version_epnear.mp3" },
                { id: "2022-Dhamaka-song5", title: "Pulsar Bike", artist: "Yallanti Ramana", duration: "3:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895066/Pulsar_Bike_wt6knw.mp3" },
                { id: "2022-Dhamaka-song6", title: "Whats Happening", artist: "Bheems Ceciroleo, Ramya Behra", duration: "4:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895705/Whats_Happening_fav0tt.mp3" },
            ]
        },

        // HIT 2
        {
            id: 'movie-2022-HIT2',
            title: "HIT-2",
            actors: "Adivi Sesh, Meenakshi Chowdary, Nani",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620890/HIT_2_ywn94b.jpg",
            songs: [
                { id: "2022-HIT2-song1", title: "Poratame", artist: "Dr. Sailesh Kolanu", duration: "3:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894784/Poratame_2_fueqtr.mp3" },
                { id: "2022-HIT2-song2", title: "Urike Urike", artist: "Sid Sriram, Ramya Behara", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894744/Urike_Urike_nathiz.mp3" },
            ]
        },

        // Ori Devuda
        {
            id: 'movie-2022-OriDevuda',
            title: "Ori Devuda",
            actors: "Vishwak Sen, Mithila Palkar, Asha Bhat",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620891/Ori_Devuda_qympzh.jpg",
            songs: [
                { id: "2022-OriDevuda-song1", title: "Avunanavaa", artist: "Sid Sriram", duration: "4:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894851/Avunanavaa_ljznke.mp3" },
                { id: "2022-OriDevuda-song2", title: "Gundelonaa", artist: "Anirudh Ravichander", duration: "3:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894633/Gundelonaa_m6dt7q.mp3" },
                { id: "2022-OriDevuda-song3", title: "Marachipole", artist: "Ravi G", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894608/Marachipolene_ojymjm.mp3" },
                { id: "2022-OriDevuda-song4", title: "Ninna Monnaage", artist: "Leon James", duration: "2:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894541/Ninna_Monnalaage_k2juic.mp3" },
                { id: "2022-OriDevuda-song5", title: "Paathashala Loo", artist: "Armaan Malik", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894819/Paathashala_Loo_w6jqnw.mp3" },
                { id: "2022-OriDevuda-song6", title: "Yendhi Ra Life Idhi", artist: "Deepak", duration: "1:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894552/Yendhi_Ra_Life_Idhi_mkj4zh.mp3" },
            ]
        },

        // God Father
        {
            id: 'movie-2022-GodFather',
            title: "God Father",
            actors: "Chiranjeevi, Nayanthara",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620889/God_Father_qgqmpz.jpg",
            songs: [
                { id: "2022-GodFather-song1", title: "Aanayya", artist: "Vaishnavi Kovvuri, Thaman S, Megastar Chiranjeevi, Salman Khan", duration: "3:00", url: "" },
                { id: "2022-GodFather-song2", title: "Blast Baby", artist: "Damini Bhatla, Blaaze", duration: "3:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895094/Blast_Baby_bgd1pj.mp3" },
                { id: "2022-GodFather-song3", title: "Najabhaja", artist: "Sri Krishna, Prudhvi Chandra", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895045/Najabhaja_vamxtw.mp3" },
                { id: "2022-GodFather-song4", title: "Padara Sainika", artist: "Sreerama Chandra", duration: "4:08", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895314/Padara_Sainika_tkebrz.mp3" },
                { id: "2022-GodFather-song5", title: "Thaar Maar Thakkar Maar", artist: "Shreya Ghoshal", duration: "4:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895503/Thaar_Maar_Thakkar_Maar_afpi7h.mp3" },
            ]
        },

        // Nenu Meeku Baaga Kavalsinavaadini
        {
            id: 'movie-2022-NenuMeekuBaagaKavalsinavaadini',
            title: "Nenu Meeku Baaga Kavalsinavaadini",
            actors: "Kiran Abbavaram, Sanjana Anand",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620890/Nenu_Meeku_Baaga_Kavalsinavadini_taco15.jpg",
            songs: [
                { id: "2022-NenuMeekuBaagaKavalsinavaadini-song1", title: "Attaanti Ittaanti", artist: "Keerthana Sharma, Saketh", duration: "3:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894801/Attaanti_Ittaanti_wz6dic.mp3" },
                { id: "2022-NenuMeekuBaagaKavalsinavaadini-song2", title: "Chala Bagundhe", artist: "Aditya Iyengar", duration: "3:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894739/Chala_Bagundhe_sspijx.mp3" },
                { id: "2022-NenuMeekuBaagaKavalsinavaadini-song3", title: "Lawyer Papa", artist: "Ram Miriyala", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894800/Lawyer_Papa_lfrpvg.mp3" },
                { id: "2022-NenuMeekuBaagaKavalsinavaadini-song4", title: "Manase", artist: "Sri Krishna, Ramya Behara", duration: "2:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894569/Manase_crugqt.mp3" },
                { id: "2022-NenuMeekuBaagaKavalsinavaadini-song5", title: "Nachav Abbai", artist: "Dhanunjay Seepana, Lipsika", duration: "4:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894856/Nachav_Abbai_vzn33h.mp3" },
            ]
        },

        // Oke Oka Jeevitham
        {
            id: 'movie-2022-OkeOkaJeevitham',
            title: "Oke Oka Jeevitham",
            actors: "Sharwanand, Ritu Varma",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620893/Oke_Oka_Jeevitham_b1gdcu.jpg",
            songs: [
                { id: "2022-OkeOkaJeevitham-song2", title: "Maari Poye", artist: "Karthi, Travis King", duration: "4:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895499/Maari_Poye_vxtnde.mp3" },
            ]
        },

        // Macherla Niyojakavargam
        {
            id: 'movie-2022-MacherlaNiyojakavargam',
            title: "Macherla Niyojakavargam",
            actors: "Nithin, Krithi Shetty",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620890/Macherla_Niyojakavargam_sei3zq.jpg",
            songs: [
                { id: "2022-MacherlaNiyojakavargam-song1", title: "Adirindey", artist: "Sanjith Hegde", duration: "3:59", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895498/Adirindey_xzavly.mp3" },
                { id: "2022-MacherlaNiyojakavargam-song2", title: "Chill Maro", artist: "Nakash Aziz, Sanjana Kalmanje", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895193/Chill_Maro_iymhil.mp3" },
                { id: "2022-MacherlaNiyojakavargam-song3", title: "Pori Superoo", artist: "Mahati Swara Sagar, Rahul Sipligunj, Geetha Madhuri", duration: "2:13", url: "" },
                { id: "2022-MacherlaNiyojakavargam-song4", title: "Ra Ra Reddy", artist: "Aditya Iyengar, Lipsika", duration: "4:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894942/Pori_Superoo_runhlk.mp3" },
                { id: "2022-MacherlaNiyojakavargam-song5", title: "Ranu Ranu Antune Chinnado", artist: "Lipsika", duration: "0:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894553/Ranu_Ranu_Antune_Chinnado_bopn5a.mp3" },
            ]
        },

        // Sita Ramam
        {
            id: 'movie-2022-SitaRamam',
            title: "Sita Ramam",
            actors: "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620896/Sita_Ramam_hkdaoq.jpg",
            songs: [
                { id: "2022-SitaRamam-song1", title: "Eppudu Ninnu", artist: "Yasin Nizar", duration: "3:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894811/Eppudo_Ninnu_fu1rpi.mp3" },
                { id: "2022-SitaRamam-song2", title: "Inthandham", artist: "SPB Charan", duration: "3:36", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894709/Inthandham_fcfkx3.mp3" },
                { id: "2022-SitaRamam-song3", title: "Kaannunna Kalyanam", artist: "Anurag Kulkarni, Sinduri S", duration: "3:51", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894738/Kaanunna_Kalyanam_eogr0o.mp3" },
                { id: "2022-SitaRamam-song4", title: "Nene Aa Nene", artist: "Hariharan, K S Chitra", duration: "3:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894772/Nene_Aa_Nene_xt7s1a.mp3" },
                { id: "2022-SitaRamam-song5", title: "Ninnati Theepi", artist: "Sunitha", duration: "2:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894597/Ninnati_Theepi_fivbg4.mp3" },
                { id: "2022-SitaRamam-song6", title: "Oh Prema", artist: "Kapil Kapilan, Chinmayi Sripada", duration: "3:25", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894678/Oh_Prema_qoe3gr.mp3" },
                { id: "2022-SitaRamam-song7", title: "Oh Sita Hey Rama", artist: "Sushmitha Narasimhan, Feji Ashwin, Priya Sushma", duration: "4:06", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894805/Oh_Sita_Hey_Rama_zp6zd4.mp3" },
                { id: "2022-SitaRamam-song8", title: "Sita Ramam Theme", artist: "Vishal Chandrasekhar", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894678/Sita_Ramam_Theme_rko6eh.mp3" },
                { id: "2022-SitaRamam-song9", title: "Tharal Tharal", artist: "SenSongsMp3.Com", duration: "1:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894540/Tharali_Tharali_dxryiz.mp3" },
                { id: "2022-SitaRamam-song10", title: "Yevarini Adaganu", artist: "Sai Vignesh", duration: "2:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894581/Yevarini_Adaganu_y7wokx.mp3" },
            ]
        },


        // Ramarao On Duty
        {
            id: 'movie-2022-RamaraoOnDuty',
            title: "Ramarao On Duty",
            actors: "Ravi Teja, Anveshi Jain, Rajisha Vijayan",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620893/Ramarao_On_Duty_eydbnm.jpg",
            songs: [
                { id: "2022-RamaraoOnDuty-song1", title: "Sottala Buggallo", artist: "Haripriya, Nakul Abhyankar", duration: "4:08", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895636/Sottala_Buggallo_idytrf.mp3" },
                { id: "2022-RamaraoOnDuty-song2", title: "Usuraagithe", artist: "Sreerama Chandra", duration: "3:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895165/Usuraagithe_nn1udy.mp3" },
                { id: "2022-RamaraoOnDuty-song3", title: "King Of The Crowd", artist: "Lavita Lobo", duration: "2:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894967/King_of_The_Crowd_qwl6ml.mp3" },
                { id: "2022-RamaraoOnDuty-song4", title: "Naa Peru Seesa", artist: "Shreya Ghoshal, Sam CS", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895207/Naa_Peru_Seesa_gs2ijs.mp3" },
                { id: "2022-RamaraoOnDuty-song5", title: "Bul Bul Tarang", artist: "Sid Sriram", duration: "3:35", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895265/Bul_Bul_Tarang_e4xfxz.mp3" },
            ]
        },

        // The Warrior
        {
            id: 'movie-2022-TheWarrior',
            title: "The Warrior",
            actors: "Ram Pothineni, Krithi Shetty",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620895/The_Warrior_akm63b.jpg",
            songs: [
                { id: "2022-TheWarrior-song1", title: "Dhada Dhada", artist: "Haricharan", duration: "4:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895721/Dhada_Dhada_jskrq1.mp3" },
                { id: "2022-TheWarrior-song2", title: "Bullet Song", artist: "Silambarasan TR and Haripriya", duration: "4:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895642/Bullet_Song_z2mn1a.mp3" },
                { id: "2022-TheWarrior-song3", title: "Whistle Song", artist: "Anthony Daasan, Sririsha Jayaseelan", duration: "3:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895369/Whistle_Song_j5jfj3.mp3" },
                { id: "2022-TheWarrior-song4", title: "Colours", artist: "Jaspreet Jasz", duration: "4:20", url: "" },
            ]
        },

        // Pakka Commercial
        {
            id: 'movie-2022-PakkaCommercial',
            title: "Pakka Commercial",
            actors: "Gopichand, Raashii Khanna",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620892/Pakka_Commercial_zvatpd.jpg",
            songs: [
                { id: "2022-PakkaCommercial-song1", title: "Andala Raasi", artist: "Saicharan Bhaskaruni, Ramya Behara", duration: "4:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895562/Andala_Raasi_xvhwbx.mp3" },
                { id: "2022-PakkaCommercial-song2", title: "Adhirindhi Mastaru Mee Posteru", artist: "Sri Krishna, Sahithi Chaganti", duration: "3:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895282/Adhirindhi_Mastaru_Mee_Posteru_ntsc9p.mp3" },
                { id: "2022-PakkaCommercial-song3", title: "Pakka Commercial", artist: "Jakes Bejoy, Hemachandra", duration: "4:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895602/Pakka_Commercial_lvmtjl.mp3" },
                { id: "2022-PakkaCommercial-song4", title: "Lehanga Lo Lady Don", artist: "Vijay Prakash, MM Sreelekha", duration: "4:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895369/Lehanga_Lo_Lady_Donu_api93h.mp3" },
            ]
        },

        // F3
        {
            id: 'movie-2022-F3FunandFrustration',
            title: "F3 - Fun and Frustration",
            actors: "Venkatesh, Varun Tej, Tamannaah Bhatia, Mehreen Pirzada",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620889/F3_awdwjj.jpg",
            songs: [
                { id: "2022-F3FunandFrustration-song1", title: "Woo Aaa Aha Aha", artist: "Sunidhi Chauhan, Lavita Lobo, Sagar, S.P. Abhishek", duration: "4:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895442/Woo_Aaa_Aha_Aha_u8dkcq.mp3" },
                { id: "2022-F3FunandFrustration-song2", title: "Ningi Nela", artist: "Chinnaponnu", duration: "1:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894649/Ningi_Nela_xxzegj.mp3" },
                { id: "2022-F3FunandFrustration-song3", title: "Lab Dab Lab Dab Daboo", artist: "Ram Miriyala", duration: "4:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895434/Lab_Dab_Lab_Dab_Dabboo_ozvn9k.mp3" },
                { id: "2022-F3FunandFrustration-song4", title: "Life Ante Itta Vundalaa", artist: "Rahul Sipligunj, Geetha Madhuri", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895577/Life_Ante_Itta_Vundaala_k4p6ot.mp3" },
            ]
        },

        // Sarkaru Vaari Paata
        {
            id: 'movie-2022-SarkaruVaariPaata',
            title: "Sarkaru Vaari Paata",
            actors: "Mahesh Babu, Keerthy Suresh",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620894/Sarkaaru_Vaari_Paata_ym55vl.jpg",
            songs: [
                { id: "2022-SarkaruVaariPaata-song1", title: "Ma Ma Mahesha", artist: "Jonita Gandhi, Sri Krishna", duration: "3:51", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895658/Ma_Ma_Mahesha_mddjj5.mp3" },
                { id: "2022-SarkaruVaariPaata-song2", title: "Sarkaru Vaari Paata", artist: "Harika Narayan", duration: "2:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894998/Sarkaru_Vaari_Paata_yb8auc.mp3" },
                { id: "2022-SarkaruVaariPaata-song3", title: "Penny", artist: "Nakash Aziz", duration: "4:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895705/Penny_mmz83n.mp3" },
                { id: "2022-SarkaruVaariPaata-song4", title: "Kalaavathi", artist: "Sid Sriram", duration: "3:59", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895467/Kalaavathi_wdzdqf.mp3" },
                { id: "2022-SarkaruVaariPaata-song5", title: "Murari Vaa", artist: "Armaan Malik, Geetha Madhuri", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895318/Murari_Vaa_wlczqa.mp3" },
                { id: "2022-SarkaruVaariPaata-song6", title: "Sarkaru Vaari Paata Rap", artist: "Chorus", duration: "3:51", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895399/Sarkaru_Vaari_Paata_Rap_vmrufa.mp3" },
            ]
        },

        // Acharya
        {
            id: 'movie-2022-Acharya',
            title: "Acharya",
            actors: "Chiranjeevi, Ram Charan, Pooja Hegde",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620888/Acharya_ojuzwn.jpg",
            songs: [
                { id: "2022-Acharya-song1", title: "Neelambari", artist: "Ramya Behara, Anurag Kulkarni", duration: "4:14", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895178/Neelambari_wpzscy.mp3" },
                { id: "2022-Acharya-song2", title: "Putuka Thone", artist: "Anurag Kulkarni", duration: "4:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894844/Putuka_Thone_wdscdx.mp3" },
                { id: "2022-Acharya-song3", title: "Acharya Slokam", artist: "M.L. Shruti", duration: "3:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894901/Acharya_Slokam_s3raws.mp3" },
                { id: "2022-Acharya-song4", title: "Laahe Laahe", artist: "Harika Narayan, Sahithi Chaganti", duration: "4:10", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894771/Laahe_Laahe_tygynl.mp3" },
                { id: "2022-Acharya-song5", title: "Saana Kastham", artist: "Revanth, Geetha Madhuri", duration: "4:06", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895365/Saana_Kastam_zzle9o.mp3" },
                { id: "2022-Acharya-song6", title: "Bhale Bhale Banjara", artist: "Shankar Mahadevan and Rahul Sipligunj", duration: "4:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894770/Bhale_Bhale_Banjara_mvivmx.mp3" },
            ]
        },

        // RRR
        {
            id: 'movie-2022-RRR',
            title: "RRR",
            actors: "NTR, Ram Charan, Alia Bhatt",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620894/RRR_hwxzun.jpg",
            songs: [
                { id: "2022-RRR-song1", title: "Naatu Naatu", artist: "Rahul Sipligunj, Kaala Bhairava", duration: "3:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894685/Nattu_Nattu_gn5q44.mp3" },
                { id: "2022-RRR-song2", title: "Dosti", artist: "Hemachandra", duration: "5:04", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894897/Dosti_hpjs02.mp3" },
                { id: "2022-RRR-song3", title: "Komuram Bheemudo", artist: "Kaala Bhairava", duration: "4:08", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894862/Komuram_Bheemudo_mus89t.mp3" },
                { id: "2022-RRR-song4", title: "Etthara Jenda", artist: "Vishal Mishra, Prudhvi Chandra, MM Keeravaani", duration: "3:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894661/Etthara_Jenda_c95yuw.mp3" },
                { id: "2022-RRR-song5", title: "Janani", artist: "M. M. Keeravaani, Chorus", duration: "3:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894634/Janani_px8rlq.mp3" },
                { id: "2022-RRR-song6", title: "Raamam Raaghavam", artist: "M. M. Keeravaani, Charu Hariharan", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894864/Raamam_Raaghavam_ksvetg.mp3" },
            ]
        },

        // Radhe Shyam
        {
            id: 'movie-2022-RadheShyam',
            title: "Radhe Shyam",
            actors: "Prabhas, Pooja Hegde",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620896/Radhe_Shyam_yyntfv.jpg",
            songs: [
                { id: "2022-RadheShyam-song1", title: "Ninnele", artist: "Anurag Kulkarni, Shreya Ghoshal", duration: "4:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894824/Ninnele_jurawc.mp3" },
                { id: "2022-RadheShyam-song2", title: "Nagumomu Thaarale", artist: "Sid Sriram", duration: "2:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894568/Nagumomu_Thaarale_hbwi5s.mp3" },
                { id: "2022-RadheShyam-song3", title: "Ee Raathale", artist: "Yuvan Shankar Raja, Harini Ivaturi", duration: "3:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894943/Ee_Raathale_vy8efn.mp3" },
                { id: "2022-RadheShyam-song4", title: "Sundhara Vadana", artist: "Aishwarya Ravichandran", duration: "1:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894559/Sundhara_Vadhana_rtkqau.mp3" },
                { id: "2022-RadheShyam-song5", title: "Sanchari", artist: "Anirudh Ravichander", duration: "2:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894615/Sanchari_qo78ny.mp3" },
                { id: "2022-RadheShyam-song6", title: "Krishna Krishna", artist: "Sathya Yamini", duration: "1:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894558/Krishna_Krishna_nhblxw.mp3" },
            ]
        },

        // Aadavallu Meeku Johaarlu
        {
            id: 'movie-2022-AadavalluMeekuJohaarlu',
            title: "Aadavallu Meeku Johaarlu",
            actors: "Sharwanand, Rashmika Mandanna, Ruchita Sadineni",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620887/Aadavallu_Meeku_Joharlu_kowpgm.jpg",
            songs: [
                { id: "2022-AadavalluMeekuJohaarlu-song1", title: "Kalaga Kalaga", artist: "Mahalingam", duration: "2:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894588/Kalaga_Kalaga_gtup3y.mp3" },
                { id: "2022-AadavalluMeekuJohaarlu-song2", title: "Oh My Aadhya", artist: "Yazin Nizar", duration: "4:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894785/Oh_My_Aadhya_n9winl.mp3" },
                { id: "2022-AadavalluMeekuJohaarlu-song3", title: "Aadavallu Meeku Johaarlu", artist: "Devi Sri Prasad", duration: "3:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894996/Aadavaallu_Meeku_Johaarlu_qbz0hk.mp3" },
                { id: "2022-AadavalluMeekuJohaarlu-song4", title: "Awesome", artist: "Sagar", duration: "3:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894620/Awesome_lzeapw.mp3" },
                { id: "2022-AadavalluMeekuJohaarlu-song5", title: "Mangalyam", artist: "Jaspreet Jasz", duration: "3:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894640/Mangalyam_sbeo4f.mp3" },
            ]
        },

        // Bheemla Nayak
        {
            id: 'movie-2022-BheemlaNayak',
            title: "Bheemla Nayak",
            actors: "Pawan Kalyan, Rana Daggubati, Nithya Menen",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620887/Bheemla_Nayak_defyte.jpg",
            songs: [
                { id: "2022-BheemlaNayak-song1", title: "Bheemla Nayak", artist: "Thaman S, Sri Krishna, Prithvi Chandra, Ram Miriyala", duration: "5:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895727/Bheemla_Nayak_vuaxb4.mp3" },
                { id: "2022-BheemlaNayak-song2", title: "Adavi Gusagusalu", artist: "Manisha Eerabathini, Sri Krishna", duration: "4:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895704/Adavi_Gusagusalu_gayw8e.mp3" },
                { id: "2022-BheemlaNayak-song3", title: "Lala Bheemla (D Version)", artist: "Arun Kaundinya", duration: "3:36", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895026/Lala_Bheemla_DJ_Version_bouaka.mp3" },
                { id: "2022-BheemlaNayak-song4", title: "Lala Bheemla", artist: "Arun Kaundinya", duration: "2:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894924/Lala_Bheemla_d7dvy4.mp3" },
                { id: "2022-BheemlaNayak-song5", title: "Bheemla Back on Duty", artist: "Chorus", duration: "4:07", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895361/Bheemla_Back_on_Duty_ycxqov.mp3" },
                { id: "2022-BheemlaNayak-song6", title: "Adavi Thalli Maata", artist: "Kummari Durgavva, Sahithi Chaganti", duration: "2:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894896/Adavi_Thalli_Maata_asyecy.mp3" },
                { id: "2022-BheemlaNayak-song7", title: "O Sandamama", artist: "Mohana Bhogaraju", duration: "2:35", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894980/O_Sandamama_xovtse.mp3" },
            ]
        },

        // DJ Tillu
        {
            id: 'movie-2022-DJTillu',
            title: "DJ Tillu",
            actors: "Siddu Jonnalagadda, Neha Shetty",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620889/DJ_Tillu_igast6.jpg",
            songs: [
                { id: "2022-DJTillu-song1", title: "Pataas Pilla", artist: "Anirudh Ravichander", duration: "3:15", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894686/Pataas_Pilla_nfpkrb.mp3" },
                { id: "2022-DJTillu-song2", title: "Tillu Anna DJ Pedithe", artist: "Ram Miriyala", duration: "3:06", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894603/Tillu_Anna_DJ_Pedithe_hfd6ik.mp3" },
                { id: "2022-DJTillu-song3", title: "Nuvvala (Female Version)", artist: "Yamini Ghantasala", duration: "2:04", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894557/Nuvvala_Female_Version_odvtvw.mp3" },
                { id: "2022-DJTillu-song4", title: "Nuvvala", artist: "Siddhu Jonnalagadda", duration: "2:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894608/Nuvvala_qmfad7.mp3" },
            ]
        },

        // Sehari
        {
            id: 'movie-2022-Sehari',
            title: "Sehari",
            actors: "Harsh Kanumilli, Simran Choudhary",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620895/Sehari_fmczmc.jpg",
            songs: [
                { id: "2022-Sehari-song1", title: "Naa Disha Neeve", artist: "Yazin Nizar", duration: "3:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894657/Naa_Disha_Neeve_ixfcpz.mp3" },
                { id: "2022-Sehari-song2", title: "Subbalachmi", artist: "Anurag Kulkarni", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894726/Subbalachmi_ctafyj.mp3" },
                { id: "2022-Sehari-song3", title: "Idhi Chala Baagundhile", artist: "Sid Sriram", duration: "3:57", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894833/Idhi_Chala_Baagundhile_a4fxul.mp3" },
                { id: "2022-Sehari-song4", title: "Rama Rama", artist: "Jassie Gift", duration: "3:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894704/Rama_Rama_umkyhq.mp3" },
                { id: "2022-Sehari-song5", title: "Manase Siwanga", artist: "Yashika Slikka", duration: "3:19", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894746/Manase_Swayanga_qk75c0.mp3" },
                { id: "2022-Sehari-song6", title: "Rap Battle", artist: "Pranav Chaganty, Abhinav Gomatam", duration: "2:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894657/Rap_Battle_yjfooe.mp3" },
                { id: "2022-Sehari-song7", title: "Wrongu Ringa", artist: "Prashanth R Vihari", duration: "2:04", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894573/Wrongu_Ringa_hg133k.mp3" },
                { id: "2022-Sehari-song8", title: "Life Of Varun", artist: "Mangli, Pranav Chaganty", duration: "3:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894721/Life_Of_Varun_mvq8e1.mp3" },
                { id: "2022-Sehari-song9", title: "Sehari", artist: "Anurag Kulkarni", duration: "3:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894707/Sehari_g9ly8g.mp3" },
            ]
        },

        // Khiladi
        {
            id: 'movie-2022-Khiladi',
            title: "Khiladi",
            actors: "Ravi Teja, Dimple Hayathi",
            year: 2022,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620890/Khiladi_as0zrr.jpg",
            songs: [
                { id: "2022-Khiladi-song1", title: "Full Kicku", artist: "Sagar, Mamta Sharma", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895206/Full_Kicku_an4xqe.mp3" },
                { id: "2022-Khiladi-song2", title: "Khiladi", artist: "Ram Miriyala", duration: "3:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895232/Khiladi_jc7k3y.mp3" },
                { id: "2022-Khiladi-song3", title: "Ishtam", artist: "Hari Priya", duration: "2:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751894958/Ishtam_jp762p.mp3" },
                { id: "2022-Khiladi-song4", title: "Catch Me", artist: "Neha Bhasin, Jaspreet Jasz", duration: "3:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895120/Catch_Me_cgp5mc.mp3" },
                { id: "2022-Khiladi-song5", title: "Atta Sudake", artist: "Devi Sri Prasad, Sameera Bharadwaj", duration: "3:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1751895067/Atta_Sudake_clgozg.mp3" },
            ]
        },
    ],

    2021: [

        // Shyam Singha Roy
        {
            id: 'movie-2021-ShyamSinghaRoy',
            title: "Shyam Singha Roy",
            actors: "Nani, Sai Pallavi, Kriti Shetty",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621158/Shyam_Singha_Roy_kksarj.jpg",
            songs: [
                { id: "2021-ShyamSinghaRoy-song1", title: "Rise of Shyam", artist: "Vishal Dadlani, Anurag Kulkarni, Cizzy", duration: "3:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153852/Rise_of_Shyam_nmfkgg.mp3" },
                { id: "2021-ShyamSinghaRoy-song2", title: "Edo Edo", artist: "Chaitra Ambadipudi", duration: "3:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153272/Edo_Edo_heoh8n.mp3" },
                { id: "2021-ShyamSinghaRoy-song3", title: "Sirivennela", artist: "Anurag Kulkarni", duration: "4:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153469/Sirivennala_rpa9qq.mp3" },
                { id: "2021-ShyamSinghaRoy-song4", title: "Pranavalaya", artist: "Anurag Kulkarni", duration: "4:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153478/Pranavalaya_g892w7.mp3" },
                { id: "2021-ShyamSinghaRoy-song5", title: "Sirivennela (Female Version)", artist: "Chaitra Ambadipudi", duration: "2:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153257/Sirivennela_Female_Version_d0qrnc.mp3" },
            ]
        },

        // Pushpa - The Rise
        {
            id: 'movie-2021-PushpaTheRise',
            title: "Pushpa - The Rise",
            actors: "Allu Arjun, Rashmika Mandanna",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621176/Pushpa_-_The_Rise_pnvptk.jpg",
            songs: [
                { id: "2021-PushpaTheRise-song1", title: "Srivalli", artist: "Sid Sriram", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153788/Srivalli_hxuw35.mp3" },
                { id: "2021-PushpaTheRise-song2", title: "Oo Antava Oo Oo Antava", artist: "Indravathi Chauhan", duration: "3:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153801/Oo_Antava_Oo_Oo_Antava_riata8.mp3" },
                { id: "2021-PushpaTheRise-song3", title: "Eyy Bidda Idhi Naa Adda", artist: "Nakash Aziz", duration: "3:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153896/Eyy_Bidda_Idhi_Naa_Adda_jygsgi.mp3" },
                { id: "2021-PushpaTheRise-song4", title: "Dakko Dakko Meka", artist: "Shivam", duration: "5:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154498/Dakko_Dakko_Meka_ymshu3.mp3" },
                { id: "2021-PushpaTheRise-song5", title: "Saami Saami", artist: "Mounika Yadav", duration: "3:49", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153820/Saami_Saami_an80rl.mp3" },
            ]
        },

        // Akhanda
        {
            id: 'movie-2021-Akhanda',
            title: "Akhanda",
            actors: "Nandamuri Balakrishna, Pragya Jaiswal",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621092/Akhanda_gxzhrh.jpg",
            songs: [
                { id: "2021-Akhanda-song1", title: "Amma", artist: "Mohana Bhogaraj", duration: "3:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153612/Amma_jxvxlj.mp3" },
                { id: "2021-Akhanda-song2", title: "Jai Balayya", artist: "Geetha Madhuri, Sahithi Chaganti, Satya Yamini, Aditi Bhavaraju", duration: "4:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153412/Jai_Balayya_fyh4vz.mp3" },
                { id: "2021-Akhanda-song3", title: "Adigaa Adigaa", artist: "S P Charan, ML Shruthi", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154040/Adigaa_Adigaa_qabbqn.mp3" },
                { id: "2021-Akhanda-song4", title: "Akhanda Mass Jathara", artist: "Balakrishna, Thaman S", duration: "0:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153172/Akhanda_Mass_Jathara_gk1xdz.mp3" },
                { id: "2021-Akhanda-song5", title: "Akhanda", artist: "Shankar Mahadevan, Siddharth Mahadevan & Shivam Mahadevan", duration: "4:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154456/Akhanda_ibjsd2.mp3" },
            ]
        },

        // Varudu Kavalenu
        {
            id: 'movie-2021-VaruduKavalenu',
            title: "Varudu Kavalenu",
            actors: "Naga Shourya, Ritu Varma",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621180/Varudu_Kavalenu_yc462x.jpg",
            songs: [
                { id: "2021-VaruduKavalenu-song1", title: "Kola Kalle Ilaa", artist: "Sid Sriram", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153851/Kola_Kalle_Ilaa_nhqpdo.mp3" },
                { id: "2021-VaruduKavalenu-song2", title: "Digu Digu Digu Naaga", artist: "Shreya Goshal", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153624/Digu_Digu_Digu_Naaga_qcy0vr.mp3" },
                { id: "2021-VaruduKavalenu-song3", title: "Manasulone Nilichipoke", artist: "Chinmayi Sripada", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153803/Manasulone_Nilichipoke_g6nofm.mp3" },
                { id: "2021-VaruduKavalenu-song4", title: "Vaddaanam", artist: "Geetha Madhuri, Sri Krishna", duration: "4:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154318/Vaddaanam_p3yvms.mp3" },
                { id: "2021-VaruduKavalenu-song5", title: "What To Do", artist: "Amala Chebolu", duration: "2:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153614/What_To_Do_pnqc0p.mp3" },
                { id: "2021-VaruduKavalenu-song6", title: "Chenguna Chenguna", artist: "Sinduri", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153449/Chenguna_Chenguna_x2i3vf.mp3" },
            ]
        },

        // Most Eligible Bachelor
        {
            id: 'movie-2021-MostEligibleBachelor',
            title: "Most Eligible Bachelor",
            actors: "Akhil Akkineni, Pooja Hegde",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621099/Most_Eligible_Bachelor_ra2k7w.jpg",
            songs: [
                { id: "2021-MostEligibleBachelor-song1", title: "Guche Gulabi", artist: "Armaan Malik", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154227/Guche_Gulabi_hjjt8h.mp3" },
                { id: "2021-MostEligibleBachelor-song2", title: "Leharayi", artist: "Sid Sriram", duration: "4:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154133/Leharaayi_cbthwa.mp3" },
                { id: "2021-MostEligibleBachelor-song3", title: "Chitti Adugu", artist: "Ziya ul Haq", duration: "4:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154064/Chitti_Adugu_eclzth.mp3" },
                { id: "2021-MostEligibleBachelor-song4", title: "Manasa Manasa", artist: "Sid Sriram", duration: "4:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154459/Manasa_Manasa_k3gwwe.mp3" },
                { id: "2021-MostEligibleBachelor-song5", title: "Ye Zindagi", artist: "Hariya Nafisa, Gopi Sunder", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153851/Ye_Zindagi_pmtvbr.mp3" },
            ]
        },

        

        // Maha Samudram
        {
            id: 'movie-2021-MahaSamudram',
            title: "Maha Samudram",
            actors: "Sharwanand, Anu Emmanuel",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621097/Maha_Samudram_xegpbx.jpg",
            songs: [
                { id: "2021-MahaSamudram-song1", title: "Hey Rambha Rambha", artist: "Chaitan Bharadwaj", duration: "3:34", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153664/Hey_Rambha_Rambha_wyv2vy.mp3" },
                { id: "2021-MahaSamudram-song2", title: "Jagadale Raani", artist: "Hemachandra", duration: "3:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153185/Jagadale_Raani_h4iylt.mp3" },
                { id: "2021-MahaSamudram-song5", title: "Hey Thikamaka Modhale", artist: "Haricharan, Nutana Mohan", duration: "3:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153754/Hey_Thikamaka_Modhale_ibiweg.mp3" },
            ]
        },

        // Love Story
        {
            id: 'movie-2021-LoveStory',
            title: "Love Story",
            actors: "Naga Chaitanya, Sai Pallavi",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621095/Love_Story_cqigm9.jpg",
            songs: [
                { id: "2021-LoveStory-song1", title: "Ay Pilla", artist: "Haricharan", duration: "4:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153899/Ay_Pilla_lwmfrc.mp3" },
                { id: "2021-LoveStory-song2", title: "Winner Bro", artist: "Abhijith Rao", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153759/Winner_Winner_Bro_molhmj.mp3" },
                { id: "2021-LoveStory-song3", title: "Saranga Dariya", artist: "Mangli", duration: "3:50", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153731/Saranga_Dariya_yezj2r.mp3" },
                { id: "2021-LoveStory-song4", title: "Evo Evo Kalale", artist: "Jonita Gandhi, Nakul Abhyankar", duration: "4:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154201/Evo_Evo_Kalale_sq2qfi.mp3" },
                { id: "2021-LoveStory-song5", title: "Nee Chitram Choosi", artist: "Anurag Kulkarni", duration: "4:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154429/Nee_Chitram_Choosi_itrdzw.mp3" },
            ]
        },

        // Maestro
        {
            id: 'movie-2021-Maestro',
            title: "Maestro",
            actors: "Nithin, Tamannaah Bhatia, Nabha Natesh",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621100/Maestro_ggpala.jpg",
            songs: [
                { id: "2021-Maestro-song1", title: "Baby O Baby", artist: "Anurag Kulkarni", duration: "4:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154014/Baby_O_Baby_odai6y.mp3" },
                { id: "2021-Maestro-song2", title: "Shuru Karo", artist: "Revanth", duration: "3:51", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153696/Shuru_Karo_xivgph.mp3" },
                { id: "2021-Maestro-song3", title: "Vennello Aadipilla", artist: "Sweekar Agasthi", duration: "3:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153646/Vennello_Aadapilla_tvb9bb.mp3" },
                { id: "2021-Maestro-song4", title: "La La La", artist: "Dhanunjay Seepana", duration: "2:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153580/La_La_La_cuoztf.mp3" },
            ]
        },

        // Gully Rowdy
        {
            id: 'movie-2021-GullyRowdy',
            title: "Gully Rowdy",
            actors: "Sundeep Kishan, Laavanya Sharma, Neha Shetty",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621095/Gully_Rowdy_ncegup.jpg",
            songs: [
                { id: "2021-GullyRowdy-song1", title: "Puttine Prema", artist: "Ram Miriyala", duration: "3:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153301/Puttine_Prema_qthqak.mp3" },
            ]
        },


        // Sridevi Soda Center
        {
            id: 'movie-2021-SrideviSodaCenter',
            title: "Sridevi Soda Center",
            actors: "Sudheer Babu, Anandhi",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621162/Sridevi_Soda_Center_q9yoaw.jpg",
            songs: [
                { id: "2021-SrideviSodaCenter-song4", title: "Mandhuloda", artist: "Dhanunjay Seepana", duration: "4:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153492/Mandhuloda_d3dnvu.mp3" },
            ]
        },

        // Paagal
        {
            id: 'movie-2021-Paagal',
            title: "Paagal",
            actors: "Vishwak Sen, Nivetha Pethuraj",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621104/Paagal_rvrdnq.jpg",
            songs: [
                { id: "2021-Paagal-song1", title: "Kanapadava", artist: "Anand Aravindakshan", duration: "1:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153203/Kanapadava_scrsxj.mp3" },
                { id: "2021-Paagal-song2", title: "Ee Single Chinode", artist: "Benny Dayal", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153459/Ee_Single_Chinnode_djge8l.mp3" },
                { id: "2021-Paagal-song3", title: "Saradaga Kasepu", artist: "Karthik, Purnima", duration: "4:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153480/Saradaga_Kasepaina_wvpxff.mp3" },
                { id: "2021-Paagal-song4", title: "Paagal", artist: "Ram Miriyala", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153235/Paagal_rhtsqg.mp3" },
                { id: "2021-Paagal-song5", title: "You Are My Love", artist: "Rahul Sipligunj", duration: "2:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153230/You_Are_My_Love_nxfxt7.mp3" },
                { id: "2021-Paagal-song6", title: "Amma Amma Nee Vennela", artist: "Sid Sriram, Veda Vagdevi", duration: "5:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153548/Amma_Amma_Nee_Vennela_eygc9d.mp3" },
                { id: "2021-Paagal-song7", title: "Enno Ennenno Vinnani Gaani", artist: "Anthony Daasan", duration: "2:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153215/Enno_Ennenno_Vinnam_Gaani_g2xus5.mp3" },
                { id: "2021-Paagal-song8", title: "Aagave Nuvvagave", artist: "Sid Sriram", duration: "3:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153568/Aagave_Nuvvagave_h7asir.mp3" },
                { id: "2021-Paagal-song9", title: "Kanapadava Female Version", artist: "Sameera Bharadwaj", duration: "1:26", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153171/Kanapadava_Female_Version_cyvd5p.mp3" },
            ]
        },

        // MAD
        {
            id: 'movie-2021-MAD',
            title: "MAD",
            actors: "Narne Nithiin, Sangeeth Sobhan, Ram Nithin, Sri Gouri Priya, Ananathika Sanilkumar, Gopika Udayan",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621100/MAD_nal386.jpg",
            songs: [
                { id: "2021-MAD-song1", title: "College Papa", artist: "Bheems Ceciroleo, Varam, Keerthana Sharma", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153852/College_Papa_iyc4js.mp3" },
                { id: "2021-MAD-song2", title: "Malli Malli Raani Roju", artist: "Sai Charan Bhaskaruni", duration: "2:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153573/Malli_Malli_Raani_Roju_sctqoc.mp3" },
                { id: "2021-MAD-song3", title: "Nuvvu Nuvvukuntu", artist: "Kapil Kapilan", duration: "3:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153617/Nuvvu_Navvukuntu_iguucl.mp3" },
                { id: "2021-MAD-song4", title: "Proudse Single", artist: "Nakash Aziz, Bheems Ceciroleo", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153589/Proudse_Single_yreneh.mp3" },
            ]
        },

        // SR Kalyanamandapam
        {
            id: 'movie-2021-SRKalyanamandapam',
            title: "SR Kalyanamandapam",
            actors: "Kiran Abbavaram, Priyanka Jawalkar",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621185/SR_Kalyanamandapam_lff3q4.jpg",
            songs: [
                { id: "2021-SRKalyanamandapam-song2", title: "Sigggendhukura Mama", artist: "Anurag Kulkarni", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153268/Siggendhukura_Mama_egu33m.mp3" },
                { id: "2021-SRKalyanamandapam-song3", title: "Choosale Kallaraa", artist: "Sid Sriram", duration: "3:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153288/Choosale_Kallaraa_pjjryv.mp3" },
                { id: "2021-SRKalyanamandapam-song4", title: "Chukkalu Chunni", artist: "Anurag Kulkarni", duration: "3:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153272/Chukkala_Chunni_wt3tsi.mp3" },
            ]
        },

        // Narappa
        {
            id: 'movie-2021-Narappa',
            title: "Narappa",
            actors: "Venkatesh Daggubati, Priyamani, Ammu Abhirami",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621096/Narappa_mumakh.jpg",
            songs: [
                { id: "2021-Narappa-song1", title: "Rage of Narappa", artist: "Revanth, Sai Charan, Sri Krishna", duration: "4:03", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153451/Rage_of_Narappa_rzwggx.mp3" },
                { id: "2021-Narappa-song2", title: "Oo Narappa", artist: "Dhanunjay, Varam", duration: "3:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153234/Oo_Narappa_oomw3g.mp3" },
                { id: "2021-Narappa-song5", title: "Chalaaki Chinnamma", artist: "Aditya Iyengar, Nutana Mohan", duration: "3:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153221/Chalaaki_Chinnammi_aysygy.mp3" },
            ]
        },

        // Vakeel Saab
        {
            id: 'movie-2021-VakeelSaab',
            title: "Vakeel Saab",
            actors: "Pawan Kalyan, Nivetha Thomas, Anjali, Ananya Nagalla and Shruti Haasan",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621179/Vakeel_Saab_ee1xm2.jpg",
            songs: [
                { id: "2021-VakeelSaab-song1", title: "Maguva Maguva", artist: "Sid Sriram", duration: "4:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154127/Maguva_Maguva_deqvuv.mp3" },
                { id: "2021-VakeelSaab-song2", title: "Kanti Papa", artist: "Armaan Malik, Deepu, Thaman S", duration: "4:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154560/Kanti_Papa_jwdzsq.mp3" },
                { id: "2021-VakeelSaab-song3", title: "Maguva Maguva (Female)", artist: "Mohana Bhogaraju", duration: "2:57", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153612/Maguva_Maguva_Female_ecrgr4.mp3" },
                { id: "2021-VakeelSaab-song4", title: "Sathyameva Jayathe", artist: "Shankar Mahadevan, Prithvi Chandra, Thaman S", duration: "3:50", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153909/Sathyameva_Jayathe_xlpguz.mp3" },
                { id: "2021-VakeelSaab-song5", title: "Kadulu Kadulu", artist: "Thaman S", duration: "2:56", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153601/Kadhulu_Kadhulu_s2acab.mp3" },
            ]
        },

        // Rang de
        {
            id: 'movie-2021-Rangde',
            title: "Rang de",
            actors: "Nithin, Keerthy Suresh",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621179/Rang_De_cpyhkf.jpg",
            songs: [
                { id: "2021-Rangde-song1", title: "Emito Idhi", artist: "Kapil Kapilan & Haripriya", duration: "4:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154485/Emito_Idhi_spztky.mp3" },
                { id: "2021-Rangde-song2", title: "Oorantha", artist: "Mangli", duration: "4:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154490/Oorantha_j82cme.mp3" },
                { id: "2021-Rangde-song3", title: "Naa Kanulu Yepudu", artist: "Sid Sriram", duration: "4:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154538/Naa_Kanulu_Yepudu_jw8plo.mp3" },
                { id: "2021-Rangde-song4", title: "Bus Stande", artist: "Sagar", duration: "3:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153647/Bus_Stande_iph2el.mp3" },
                { id: "2021-Rangde-song5", title: "Choosi Nerchukoku", artist: "David Simon", duration: "3:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153600/Choosi_Nerchukoku_zjs9ov.mp3" },
                { id: "2021-Rangde-song6", title: "Rangule", artist: "Shweta Mohan", duration: "4:21", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154477/Rangule_nexnnc.mp3" },
            ]
        },

        // Jathi Ratnalu
        {
            id: 'movie-2021-JathiRatnalu',
            title: "Jathi Ratnalu",
            actors: "Naveen Polishetty, Priyadarshi, Rahul Ramakrishna, Faria Abdullah",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621098/Jathi_Ratnalu_s7hypo.jpg",
            songs: [
                { id: "2021-JathiRatnalu-song1", title: "Chitti", artist: "Ram Miriyala", duration: "3:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153450/Chitti_w6ezyv.mp3" },
                { id: "2021-JathiRatnalu-song2", title: "Mana Jathi Ratnalu", artist: "Rahul Sipligunj", duration: "3:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153410/Mana_JathiRatnalu_md2dl8.mp3" },
                { id: "2021-JathiRatnalu-song3", title: "Chanchalguda Jail Lo", artist: "Yogi Sekar", duration: "2:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153190/Chanchalguda_Jail_Lo_jbw3zy.mp3" },
            ]
        },

        // Sreekaram
        {
            id: 'movie-2021-Sreekaram',
            title: "Sreekaram",
            actors: "Sharwanand, Priyanka Mohan",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621162/Sreekaram_acnfxn.jpg",
            songs: [
                { id: "2021-Sreekaram-song1", title: "Sankranthi Sandhalle", artist: "Anurag Kulkarni, Mohana Bhogaraju", duration: "3:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153881/Sankranthi_Sandhalle_kihv8c.mp3" },
                { id: "2021-Sreekaram-song2", title: "Bhalegundi Baalaa", artist: "Penchal Das", duration: "4:33", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154538/Bhalegundi_Baalaa_j8i6pi.mp3" },
                { id: "2021-Sreekaram-song3", title: "Sreekaram", artist: "Prudhvi Chandra", duration: "4:25", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154548/Sreekaram_hj7cfv.mp3" },
                { id: "2021-Sreekaram-song4", title: "Hey Abbayi", artist: "Nutana Mohan, Hymalath", duration: "3:42", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153326/Hey_Abbayi_zmlzvj.mp3" },
            ]
        },

        // Uppena
        {
            id: 'movie-2021-Uppena',
            title: "Uppena",
            actors: "Panja Vaisshnav Tej, Krithi Shetty",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621180/Uppena_fhq1kn.jpg",
            songs: [
                { id: "2021-Uppena-song1", title: "Ninne Naa Ninne", artist: "Sameera", duration: "1:27", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153477/Ninne_Naa_Ninne_yfo5m2.mp3" },
                { id: "2021-Uppena-song2", title: "Sandram Lona Neerantha", artist: "Sean Roldan", duration: "4:00", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153899/Sandram_Lona_Neerantha_dg6xe3.mp3" },
                { id: "2021-Uppena-song3", title: "Ranguladdhukunna", artist: "Yazin Nizar, Haripriya", duration: "4:22", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154556/Ranguladdhukunna_oc11nc.mp3" },
                { id: "2021-Uppena-song4", title: "Eswara", artist: "Devi Sri Prasad", duration: "3:27", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153687/Eswara_ydjsuq.mp3" },
                { id: "2021-Uppena-song5", title: "Jala Jala Jalapaatham Nuvvu", artist: "Shreya Ghoshal, Jaspreet Jasz", duration: "4:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154391/Jala_Jala_Jalapaatham_Nuvvu_rkxvro.mp3" },
                { id: "2021-Uppena-song6", title: "Dhak Dhak Dhak", artist: "Sarath Santhosh, Hari Priya", duration: "1:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153550/Dhak_Dhak_Dhak_xt3uv5.mp3" },
                { id: "2021-Uppena-song7", title: "Nee Kannu Neeli Samudram", artist: "Javed Ali", duration: "5:09", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154589/Nee_Kannu_Neeli_Samudram_ni28ds.mp3" },
                { id: "2021-Uppena-song8", title: "Silaka Silaka", artist: "Kailash Kher", duration: "2:47", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153616/Silaka_Silaka_yuwufk.mp3" },
            ]
        },

        // 30 Rojullo Preminchadam Ela
        {
            id: 'movie-2021-30RojulloPreminchadamEla',
            title: "30 Rojullo Preminchadam Ela",
            actors: "Pradeep Machiraju, Amritha Aiyer",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621092/30_Rojullo_Preminchadam_Ela_xm1cvp.jpg",
            songs: [
                { id: "2021-30RojulloPreminchadamEla-song1", title: "Idhega Sneham", artist: "Armaan Malik", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153412/Idera_Sneham_bsx5gu.mp3" },
                { id: "2021-30RojulloPreminchadamEla-song2", title: "Neeli Neeli Aakasam", artist: "Sid Sriram, Sunitha", duration: "4:43", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153580/Neeli_Neeli_Aakasam_mrguww.mp3" },
                { id: "2021-30RojulloPreminchadamEla-song3", title: "Wah Wah Mere Bava", artist: "Rahul Sipligunj", duration: "3:46", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153314/Wah_Wah_Mere_Bava_b1s3qb.mp3" },
                { id: "2021-30RojulloPreminchadamEla-song4", title: "Meeko Dhandam", artist: "Dhananjay, Mohana Bhogaraju", duration: "4:27", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153469/Meeko_Dhandam_ewgihk.mp3" },
                { id: "2021-30RojulloPreminchadamEla-song5", title: "Amma Nannu Malle Penchavaa", artist: "Master Rishon Rubens, Anup Rubens", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153653/Amma_Nannu_Mallee_Penchavaa_grgazz.mp3" },
            ]
        },

        // Alludu Adhurs
        {
            id: 'movie-2021-AlluduAdhurs',
            title: "Alludu Adhurs",
            actors: "Bellamkonda Sreenivas, Nabha Natesh, Anu Emmanuel",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621094/Alludu_Adhurs_r2ihev.jpg",
            songs: [
                { id: "2021-AlluduAdhurs-song1", title: "Nadhila Nadhila", artist: "Sagar & Haripriya", duration: "4:08", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153802/Nadhila_Nadhila_mcagb2.mp3" },
                { id: "2021-AlluduAdhurs-song2", title: "Hola Chika (Hi Girl)", artist: "Jaspreet Jasz, Ramya Reddy", duration: "4:04", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153808/Hola_Chica_Hi_Girl_h0zpmw.mp3" },
                { id: "2021-AlluduAdhurs-song3", title: "Ramba Ooravasi Menaka", artist: "Mangli & Hemachandra", duration: "3:59", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153635/Ramba_Ooravasi_Menaka_cenzss.mp3" },
                { id: "2021-AlluduAdhurs-song4", title: "Alludu Adhurs", artist: "Jaspreet Jasz & Vaishnavi", duration: "4:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153694/Alludu_Adhurs_e8lrty.mp3" },
                { id: "2021-AlluduAdhurs-song5", title: "Padipoya", artist: "Javed Ali", duration: "3:57", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153664/Padipoya_bz61b3.mp3" },
            ]
        },

        // RED
        {
            id: 'movie-2021-RED',
            title: "RED",
            actors: "Ram Pothineni, Nivetha Pethuraj, Malvika Sharma, Amritha Aiyer",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621159/RED_krpnrw.jpg",
            songs: [
                { id: "2021-RED-song1", title: "Nuvve Nuvve", artist: "Ramya Behara, Anurag Kulkarni", duration: "4:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154109/Nuvve_Nuvve_bfejam.mp3" },
                { id: "2021-RED-song2", title: "Dinchak", artist: "Saketh, Keerthana Sharma", duration: "5:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154563/Dinchak_rni6g2.mp3" },
                { id: "2021-RED-song3", title: "Mouname Unna", artist: "Dinakar, Nutana Mohan", duration: "4:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154498/Mounanga_Unna_vzzsas.mp3" },
                { id: "2021-RED-song4", title: "Kaun Acha Kaun Lucha", artist: "Anurag Kulkarni", duration: "4:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154507/Kaun_Acha_Kaun_Lucha_zxrlbf.mp3" },
            ]
        },

        // Krack
        {
            id: 'movie-2021-Krack',
            title: "Krack",
            actors: "Ravi Teja, Shruti Haasan",
            year: 2021,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621168/Krack_f6eol5.jpg",
            songs: [
                { id: "2021-Krack-song1", title: "The Theme Of Krack", artist: "Sri Krishna & Sai Charan", duration: "2:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153206/The_Theme_Of_Katari_uuzjez.mp3" },
                { id: "2021-Krack-song2", title: "Mass Biryani", artist: "Rahul Nambiar, Sahithi Chaganti", duration: "3:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153695/Mass_Biriyani_q82pvv.mp3" },
                { id: "2021-Krack-song3", title: "Korameesam Polkoda", artist: "Ramya Behara", duration: "3:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153678/Korameesam_Polisoda_siieop.mp3" },
                { id: "2021-Krack-song4", title: "Balega Tagilavey Bangaram", artist: "Anirudh Ravichander", duration: "3:39", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752153690/Balega_Tagilavey_Bangaram_z6wgqs.mp3" },
                { id: "2021-Krack-song5", title: "Bhoom Bhaddhal", artist: "Mangli, Simha, S. Thaman", duration: "4:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752154375/Bhoom_Bhaddhal_qt5qvt.mp3" },
            ]
        }


    ],

    2020: [

        // Solo Brathuke So Better
        {
            id: 'movie-2020-SoloBrathukeSoBetter',
            title: "Solo Brathuke So Better",
            actors: "Sai Dharam Tej, Nabha Natesh",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621090/Solo_Brathuke_So_Better_opvzla.jpg",
            songs: [
                { id: "2020-SoloBrathukeSoBetter-song1", title: "Solo Brathuke So Better", artist: "Vishal Dadlani", duration: "3:01", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559718/Solo_Brathuke_So_Better_cc32dw.mp3" },
                { id: "2020-SoloBrathukeSoBetter-song2", title: "Amrutha", artist: "Nakash Aziz", duration: "3:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559726/Amrutha_qlmon8.mp3" },
                { id: "2020-SoloBrathukeSoBetter-song3", title: "No Pelli", artist: "Armaan Malik", duration: "3:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559720/No_Pelli_jendxy.mp3" },
                { id: "2020-SoloBrathukeSoBetter-song4", title: "Hey Idi Nenena", artist: "Sid Sriram", duration: "4:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559746/Hey_Idi_Nenena_xc1yxg.mp3" },
            ]
        },

        // Middle Class Melodies
        {
            id: 'movie-2020-MiddleClassMelodies',
            title: "Middle Class Melodies",
            actors: "Anand Devarakonda, Varsha Bollamma",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621088/Middle_Class_Melodies_bxy8md.jpg",
            songs: [
                { id: "2020-MiddleClassMelodies-song1", title: "Manchido cheddadho", artist: "Vijay Yesudas", duration: "4:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559711/Manchido_Cheddadho_lw5iyh.mp3" },
                { id: "2020-MiddleClassMelodies-song2", title: "The Guntur Song", artist: "Anurag Kulkarni", duration: "1:12", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559105/The_Guntur_Song_t4teck.mp3" },
                { id: "2020-MiddleClassMelodies-song3", title: "Sandhya", artist: "Sweekar Agasthi", duration: "3:55", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559153/Sandhya_xgxfde.mp3" },
                { id: "2020-MiddleClassMelodies-song4", title: "Keelugurram", artist: "Anurag Kulkarni, Sweekar Agasthi & Ramya Behara", duration: "4:55", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559712/Keelugurram_i0tlhi.mp3" },
                { id: "2020-MiddleClassMelodies-song5", title: "Sambasiva", artist: "Ram Miriyala", duration: "2:45", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559108/Sambasiva_v26avi.mp3" },
                { id: "2020-MiddleClassMelodies-song6", title: "Vechani Mattilo", artist: "Sweekar Agasthi", duration: "2:35", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559105/Vechani_Mattilo_hlprcd.mp3" },
            ]
        },

        // Colour Photo
        {
            id: 'movie-2020-ColourPhoto',
            title: "Colour Photo",
            actors: "Suhas, Chandini Chowdary",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621088/Color_Photo_blwwrg.jpg",
            songs: [
                { id: "2020-ColourPhoto-song1", title: "Aere Aakasham", artist: "Anurag Kulkarni", duration: "3:26", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559727/Arere_Aakasham_yvgo3m.mp3" },
                { id: "2020-ColourPhoto-song2", title: "Tharagathi Gadhi", artist: "Kaala Bhairava", duration: "3:33", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559731/Tharagathi_Gadhi_qlvdzg.mp3" },
                { id: "2020-ColourPhoto-song3", title: "College Song", artist: "Hema Chandra", duration: "2:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559716/College_Song_wtg3fh.mp3" },
                { id: "2020-ColourPhoto-song4", title: "Tharagathi Pathos", artist: "Kaala Bhairava", duration: "2:02", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559719/Tharagathi_Pathos_bwxt2a.mp3" },
                { id: "2020-ColourPhoto-song5", title: "Ekaantham", artist: "Ramya Behara", duration: "3:15", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559723/Ekaantham_i2uhiw.mp3" },
            ]
        },

        // V
        {
            id: 'movie-2020-V',
            title: "V",
            actors: "Nani, Nivetha Thomas",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621093/V_fxfxgm.jpg",
            songs: [
                { id: "2020-V-song1", title: "Baby Touch Me Now", artist: "Shweta Yadav", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559734/Baby_Touch_Me_Now_mpekky.mp3" },
                { id: "2020-V-song2", title: "Manasu Maree", artist: "Amit Trivedi, Shashaa Tirupati & Yazin Nizar", duration: "4:28", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559767/Manasu_Maree_zdkeya.mp3" },
                { id: "2020-V-song3", title: "Ranga Rangeli", artist: "Yazin Nizar, Nikhita Gandhi", duration: "3:29", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559732/Ranga_Rangeli_n1hpsu.mp3" },
                { id: "2020-V-song4", title: "Vastunna Vachesunna", artist: "Shreya Ghoshal, Amit Trivedi, Anurag Kulkarni", duration: "3:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559734/Vastunna_Vachestunna_fkedhk.mp3" },
            ]
        },

        // Bheeshma
        {
            id: 'movie-2020-Bheeshma',
            title: "Bheeshma",
            actors: "Nithiin, Rashmika Mandanna",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621086/Bheeshma_o7po8b.jpg",
            songs: [
                { id: "2020-Bheeshma-song1", title: "Hey Choosa", artist: "Sanjana Kalamanje", duration: "3:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559719/Hey_Choosa_lr7vxw.mp3" },
                { id: "2020-Bheeshma-song2", title: "Super Cute", artist: "Nakash Aziz", duration: "3:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559743/Super_Cute_kkr2pk.mp3" },
                { id: "2020-Bheeshma-song3", title: "Sara Sari", artist: "Anurag Kulkarni", duration: "4:01", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559742/Sara_Sari_fltjh1.mp3" },
                { id: "2020-Bheeshma-song4", title: "Singles Anthem", artist: "Anurag Kulkarni", duration: "3:23", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559724/Singles_Anthem_pfth0d.mp3" },
                { id: "2020-Bheeshma-song5", title: "Whattey Beauty", artist: "Dhanunjay, Amala Chebolu", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559739/Whattey_Beauty_d1kinh.mp3" },
            ]
        },

        // Jaanu
        {
            id: 'movie-2020-Jaanu',
            title: "Jaanu",
            actors: "Sharwanand, Samantha Ruth Prabhu",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621090/Jaanu_zblavk.jpg",
            songs: [
                { id: "2020-Jaanu-song1", title: "Pranam", artist: "Chinmayi Sripada, Gowtham Bharadwaj", duration: "3:20", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559728/Pranam_ctesg4.mp3" },
                { id: "2020-Jaanu-song2", title: "Naa Kale Kalai", artist: "Brinda", duration: "2:17", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559714/Naa_Kale_Kalai_lbsbts.mp3" },
                { id: "2020-Jaanu-song3", title: "Anantham", artist: "Chinmayi Sripaada, Govind Vasantha", duration: "8:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559768/Anantham_nxfqav.mp3" },
                { id: "2020-Jaanu-song4", title: "The Life Of Ram", artist: "Pradeep Kumar", duration: "6:04", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559765/The_Life_Of_Ram_y5qlrt.mp3" },
                { id: "2020-Jaanu-song5", title: "Oohale", artist: "Chinmayi Sripaada, Govind Vasantha", duration: "4:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559766/Oohale_yuaeya.mp3" },
                { id: "2020-Jaanu-song6", title: "Inthena", artist: "Chinmayi Sripada", duration: "5:25", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559757/Inthena_kwvbo9.mp3" },
            ]
        },

        // Disco Raja
        {
            id: 'movie-2020-DiscoRaja',
            title: "Disco Raja",
            actors: "Ravi Teja, Payal Rajput, Nabha Natesh, Tanya Hope",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621091/Disco_Raja_ulu2cl.jpg",
            songs: [
                { id: "2020-DiscoRaja-song1", title: "Rum Pum Pum", artist: "Ravi Teja, Bappi Lahiri, Sri Krishna", duration: "3:26", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559730/Rum_Pum_Bum_tdrzrh.mp3" },
                { id: "2020-DiscoRaja-song2", title: "Freak Out", artist: "Ravi Teja, Thaman S", duration: "2:16", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559713/Freak_Out_rjpwbr.mp3" },
                { id: "2020-DiscoRaja-song3", title: "Dilliwala", artist: "Aditya Iyengar, Geetha Madhuri, Rahul Nambiar", duration: "5:11", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559756/Dilliwala_pzwi5z.mp3" },
                { id: "2020-DiscoRaja-song4", title: "Nuvvu Naatho Emannavo", artist: "S.P. Balasubramanyam", duration: "5:40", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559770/Nuvvu_Naatho_Emannavo_jpuutg.mp3" },
            ]
        },

        // Ala Vaikuntapuramuloo
        {
            id: 'movie-2020-AlaVaikuntapuramuloo',
            title: "Ala Vaikuntapuramuloo",
            actors: "Allu Arjun, Pooja Hegde",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621087/Ala_Vaikunthapurramulo_md2ybh.jpg",
            songs: [
                { id: "2020-AlaVaikuntapuramuloo-song1", title: "Buttabomma", artist: "Armaan Malik", duration: "3:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559722/Buttabomma_ukqc2e.mp3" },
                { id: "2020-AlaVaikuntapuramuloo-song2", title: "OMG Daddy", artist: "Roll Rida, Rahul Nambiar, Lady Kash, Rahul Sipligunj, Blaze", duration: "3:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559737/OMG_Daddy_je81cz.mp3" },
                { id: "2020-AlaVaikuntapuramuloo-song3", title: "Samajavaragamana", artist: "Sid Sriram", duration: "3:48", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559738/Samajavaragamana_reiqel.mp3" },
                { id: "2020-AlaVaikuntapuramuloo-song4", title: "Sitharala Sirapadu", artist: "Sooranna, Saketh Komanduri", duration: "3:4", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559718/Sittharala_Sirapadu_bmbhta.mp3" },
                { id: "2020-AlaVaikuntapuramuloo-song5", title: "Ramuloo Ramulaa", artist: "Anurag Kulkarni, Mangli", duration: "4:5", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559743/Ramuloo_Ramulaa_qe6e9b.mp3" },
                { id: "2020-AlaVaikuntapuramuloo-song6", title: "Ala Vaikunthapurramuloo", artist: "Sri Krishna, Priya Sisters", duration: "3:13", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559733/Ala_Vaikunthapurramuloo_rb1mae.mp3" },
                { id: "2020-AlaVaikuntapuramuloo-song7", title: "Samajavaragamana (Female)", artist: "Shreya Ghoshal", duration: "4:6", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559746/Samajavaragamana_Female_bf81fx.mp3" },
            ]
        },

        // Sarileru Neekevvaru
        {
            id: 'movie-2020-SarileruNeekevvaru',
            title: "Sarileru Neekevvaru",
            actors: "Mahesh Babu, Rashmika Mandanna",
            year: 2020,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621181/Sarileru_Neekevvaru_abpomv.jpg",
            songs: [
                { id: "2020-SarileruNeekevvaru-song1", title: "Suryudivo Chandrudivo", artist: "B Praak", duration: "4:32", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559751/Suryudivo_Chandrudivo_ukpxdp.mp3" },
                { id: "2020-SarileruNeekevvaru-song2", title: "Sarileru Neekevvaru Title Song", artist: "Devi Sri Prasad", duration: "2:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559715/Sarileru_Neekevvaru_Title_Song_iacji0.mp3" },
                { id: "2020-SarileruNeekevvaru-song3", title: "Sarileru Neekevvaru Anthem", artist: "Shankar Mahadevan", duration: "4:31", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559750/Sarileru_Neekevvaru_Anthem_uqv3xc.mp3" },
                { id: "2020-SarileruNeekevvaru-song4", title: "Mind Block", artist: "Blaaze, Ranina Reddy, Devi Sri Prasad", duration: "4:24", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559752/Mind_Block_nronil.mp3" },
                { id: "2020-SarileruNeekevvaru-song5", title: "He Is So Cute", artist: "Madhu Priya", duration: "3:30", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752559745/He_Is_So_Cute_i43dru.mp3" },
            ]
        }
    ],

    2019: [

        // Venky Mama
        {
            id: 'movie-2019-VenkyMama',
            title: "Venky Mama",
            actors: "Venkatesh, Naga Chaitanya, Raashii Khanna, Payal Rajput",
            year: 2019,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621007/Venky_Mama_rfbn2k.jpg",
            songs: [
                { id: "2019-VenkyMama-song1", title: "Yennallako", artist: "Prithvi Chandhra", duration: "3:36", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752821804/Yennallako_d2wfqd.mp3" },
                { id: "2019-VenkyMama-song2", title: "Nuvvu Nenu", artist: "Anurag Kulkarni, Nandita Jyothi", duration: "3:54", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752819627/Nuvvu_Nenu_o9tzxx.mp3" },
                { id: "2019-VenkyMama-song3", title: "Venky Mama", artist: "Sri Krishna", duration: "4:18", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752819639/Venky_Mama_c2ces8.mp3" },
                { id: "2019-VenkyMama-song4", title: "Coca Cola Pepsi", artist: "Aditi Bhavaraju, Ramya Behara, Simha & Hanuman", duration: "3:41", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752821803/Coca_Cola_Pepsi_r2g4df.mp3" },
            ]
        },

        // 90ML
        {
            id: 'movie-2019-90ML',
            title: "90ML",
            actors: "Kartikeya, Neha Solanki",
            year: 2019,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753620999/90ML_krveuz.jpg",
            songs: [
                { id: "2019-90ML-song1", title: "Singilu Singilu", artist: "Rahul Sipligunj, MM Mansi", duration: "3:58", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752562003/Singilu_Singilu_phzt7g.mp3" },
                { id: "2019-90ML-song2", title: "Anukoledhey", artist: "Ramya Behara", duration: "2:37", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752561761/Anukoledhey_ziyufv.mp3" },
                { id: "2019-90ML-song3", title: "90 ML", artist: "Anurag Kulkarni", duration: "3:44", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752562006/90_ML_ucdvsj.mp3" },
                { id: "2019-90ML-song4", title: "Vandella Life Lona", artist: "Sahithi, Saicharan", duration: "4:05", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752562068/Vandella_Life_Lona_qquq2r.mp3" },
                { id: "2019-90ML-song5", title: "Vellipothundhe", artist: "Anup Rubens", duration: "2:38", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752562007/Vellipothundhe_scgzxo.mp3" },
            ]
        },

        // Gaddalakonda Ganesh
        {
            id: 'movie-2019-GaddalakondaGanesh',
            title: "Gaddalakonda Ganesh",
            actors: "Varun Tej, Pooja Hegde",
            year: 2019,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621003/Gadddalakonda_Ganesh_gds8kd.jpg",
            songs: [
                { id: "2019-GaddalakondaGanesh-song1", title: "Elluvocchi Godaramma", artist: "SP Balasubrahmanyam, P Susheela", duration: "3:25", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752819476/Elluvochi_Godaramma_iqpjwc.mp3" },
                { id: "2019-GaddalakondaGanesh-song2", title: "Waika Waika", artist: "Anurag Kulkarni", duration: "3:27", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752821801/Waka_Waka_dxvh08.mp3" },
                { id: "2019-GaddalakondaGanesh-song3", title: "Gagana Vedhilo", artist: "Anurag Kulkarni, Sweta Subramanian", duration: "3:15", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752821796/Gagana_Veedhilo_ae9pjc.mp3" },
                { id: "2019-GaddalakondaGanesh-song4", title: "Jarraaa Jarraaa", artist: "Anurag Kulkarni, Uma Neha", duration: "3:1", url: "https://res.cloudinary.com/ruthwik/video/upload/v1752819340/Jarraaa_Jarraaa_sh4ihp.mp3" },
            ]
        },

        // Nani's Gang Leader
        {
            id: 'movie-2019-GangLeader',
            title: "Nani's Gang Leader",
            actors: "Nani, Priyanka Mohan",
            year: 2019,
            imageUrl: "https://res.cloudinary.com/ruthwik/image/upload/v1753621006/Nani_s_Gang_Leader_ptxk1s.jpg",
            songs: [
                { id: "2019-GangLeader-song1", title: "Hoyna Hoyna", artist: "Inno Genga", duration: "4:31", url: "" },
                { id: "2019-GangLeader-song2", title: "Ninu Chuse Anandam", artist: "Sid Sriram", duration: "4:54", url: "" },
                { id: "2019-GangLeader-song3", title: "Ra Ra (Roar of the Revengers)", artist: "Prudhvi Chandra, Bashermax", duration: "4:06", url: "" },
                { id: "2019-GangLeader-song4", title: "Gang-u Leader", artist: "Anirudh Ravichander", duration: "2:58", url: "" },
            ]
        },


    ],


};


