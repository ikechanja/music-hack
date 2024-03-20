<script setup>
import { gsap, Power2 } from "gsap";
    onMounted(async() => {
    const tl1 = gsap.timeline({ delay: 1 });
    const firstBg1 = document.querySelectorAll(".text__bg1");
    const word1 = document.querySelectorAll(".text__word1");

    tl1.to(
    firstBg1, 
    {
        scaleX: 1,
        duration: 0.4,
        ease: Power2.easeOut,
    })
    .to(
        word1,
        {
        opacity: 1,
        duration: 0.1,
        },
        "-=0.1"
    )
    .to(firstBg1, {
        scaleX: 0,
        duration: 0.4,
        ease: Power2.easeOut,
    });
    const tl2 = gsap.timeline({ delay: 1.5 });
    const firstBg2 = document.querySelectorAll(".text__bg2");
    const word2 = document.querySelectorAll(".text__word2");
    tl2.to(
    firstBg2, 
    {
        scaleX: 1,
        duration: 0.4,
        ease: Power2.easeOut,
    })
    .to(
        word2,
        {
        opacity: 1,
        duration: 0.1,
        },
        "-=0.1"
    )
    .to(firstBg2, {
        scaleX: 0,
        duration: 0.4,
        ease: Power2.easeOut,
    });
})
</script>
<template>
    <div class="bg-sky-700 pb-24">
        <div class="mx-auto max-w-screen-md px-6 pt-6">
            <Header />
            <section class="mt-8">
                <div class="border-4 border-gray-200 p-4 rounded-xl">
                    <h1 class="md:text-7xl text-4xl text-slate-100 text">
                        <span class="text__word1">音楽を</span>
                        <span class="text__bg1"></span>
                    </h1>
                    <h1 class="md:text-7xl text-4xl text-right text-slate-100 text">
                        <span class="text__word2">ハックせよ。</span>
                        <span class="text__bg2"></span>
                    </h1>
                </div>
                <div class="flex justify-center">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
            </section>
        </div>
    </div>
    <div class="mx-auto max-w-screen-md px-6 pt-6">
        <h1 class="text-4xl font-bold"><span class="text-sky-700 underline">ミュージックハッカソン</span>へようこそ。</h1>
        <div class="bg-sky-700 text-slate-100 p-8 my-8 rounded-xl">
            <p>
                ミュージックハッカソンは、福岡で活動するトラックメイカー「池ちゃん」
                が考案した、謂わば「DTMer」の祭典です。
            </p>
            <p>
                プログラマの祭典である「ハッカソン」より着想を得て、
                「音楽×ハッカソン」をかけ合わせた新感覚音楽イベントです。
            </p>
        </div>
        <h1 class="text-4xl mb-4 font-bold"><span class="text-amber-500 underline">苦しみながら</span>曲を作ろう。</h1>
        <h1 class="text-4xl font-bold">それが<span class="text-amber-500 underline">楽しい</span>のだから。</h1>
        <div class="bg-amber-500 text-slate-100 p-8 my-8 rounded-xl">
            <p>
                曲はちょっと作業をしたからといって出来ません。
                想像力を働かせて、沢山のパワーを使って1曲が仕上がります。
                そんな壮大な物語を持っている曲を1日で作る事など、
                普通じゃできません。
            </p>
            <p>
                その不可能を可能にする原動力がこのイベントにはあります。
                右を見ても、左を見ても必死に同じ空間で音楽を作っている仲間がいます。
                その仲間と共に、最高の作品を作っていきましょう。
            </p>
        </div>
    </div>
    <div class="bg-sky-700 text-slate-100">
        <div class="mx-auto max-w-screen-md px-6 pt-6 pb-6">
            <h1 class="text-4xl font-bold">ミュージックハッカソンとは。</h1>
            <p class="my-8">
                ミュージックハッカソンは、1泊2日で曲を作り、人前で発表する
                というプレッシャーの中で皆と切磋琢磨する喜びを分かち合うイベントです。
            </p>
            <h1 class="text-3xl font-bold">泊まれて音楽も出来る施設は福岡にしかない…！</h1>
            <p class="my-8">
                いわゆる、合宿施設は全国に沢山ありますが、レコーディングスタジオがあって
                同じ建物内でご飯やシャワー、寝泊まりができる施設は
                福岡田川にある「いいかねPalette」しかありません。
            </p>
            <h1 class="text-3xl font-bold">そしてミュージックハッカソンは生まれました！</h1>
            <p class="my-8">
                構想は「池ちゃん」から始まりましたが、同じ福岡のトラックメイカーである
                「やましょー」に話したところ、「絶対楽しいからやろう」という事になり、
                昨年第1回目が開催され、大好評でイベントを成功させる事ができました。
            </p>
        </div>
    </div>
    <div class="mx-auto max-w-screen-md px-6 pt-6 pb-6">
        <h1 class="text-4xl font-bold">イベント立ち上げメンバー</h1>
        <div class="md:grid grid-cols-2 gap-4 mt-8">
            <div class="md:flex">
                <img class="my-8 rounded-xl" src="/assets//img/ikechan.webp">
            </div>
            <div class="flex ml-8 items-center">
                <div>
                    <h1 class="text-4xl font-bold">池ちゃん</h1>
                    <p class="my-8">
                        福岡を拠点に置くトラックメイカー。
                        中学生の頃から楽曲制作を始めている。
                        テレビ番組やYouTuberの楽曲制作で音楽作家活動をしたのち現在は、様々なシンガーに楽曲提供をしている。
                    </p>
                    <p>Xのリンクは<a class="underline" href="https://twitter.com/ikechan_music" target="_blank" rel="noopener noreferrer">こちら</a></p>
                    <p>オフィシャルブログは<a class="underline" href="https://ikechan.pages.dev/" target="_blank" rel="noopener noreferrer">こちら</a></p>
                </div>
            </div>
        </div>
        <div class="md:grid grid-cols-2 gap-4 mt-8">
            <div class="md:flex">
                <img class="my-8 rounded-xl" src="/assets//img/yamasho.webp">
            </div>
            <div class="flex ml-8 items-center">
                <div>
                    <h1 class="text-4xl font-bold">よっと / yoxtellar</h1>
                    <p class="my-8">
                        中学生の頃、パソコンで楽器を弾かずに音楽が作れることに感動してDTMにハマり、
                        作ってはインターネットに公開を繰り返して10年以上制作を続けている。
                        現在はVRChatでの活動がメインでライブやDTMコミュニティー運営などを行っている。
                    </p>
                    <p>Xのリンクは<a class="underline" href="https://twitter.com/yoxtellar" target="_blank" rel="noopener noreferrer">こちら</a></p>
                    <p>ポートフォリオは<a class="underline" href="https://yoxtellar.myportfolio.com/" target="_blank" rel="noopener noreferrer">こちら</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-amber-500 text-slate-100">
        <div class="mx-auto max-w-screen-md px-6 pt-6 pb-6">
            <h1 class="text-4xl font-bold">主なイベント内容</h1>
            <p class="my-8">イベント内容としてはシンプルに…</p>
            <div class="bg-slate-100 border-4 border-gray-200 p-4 rounded-xl">
                <h1 class="text-amber-500 text-4xl font-bold text-center">1泊2日で曲を作る！</h1>
            </div>
            <p class="my-8">
                作曲のテーマは当日にChatGPTに決めてもらいます。<br>
                最後にはレコーディング準拠の最高のリスニング環境で作った楽曲を作る事が出来ます。<br>
                その他、BBQをしたり、お酒を飲んだり、ゲームをしたりと、盛りだくさんのイベントです！
            </p>
        </div>
    </div>
    <div class="mx-auto max-w-screen-md px-6 pt-6 pb-6">
        <h1 class="text-4xl font-bold">当日の流れ</h1>
        <h2 class="text-4xl font-bold text-sky-700 mt-8">1日目</h2>
        <ol class="relative border-s border-gray-200 dark:border-gray-700 my-8">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12:00~</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">現地ロビー集合、自由教室へ移動</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">いいかねPaletteに12時に集合してもらい、その後自由教室に移動します。</p>
                <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a> -->
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12:10~</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">開会式、自己紹介</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">開会式を行い、自己紹介を各自してもらいます。</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12:30~</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">制作開始</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ChatGPTでテーマが決まった後、ミュージックハッカソン開始となります。自由教室で思う存分作曲をしてください。</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">15:00~</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">チェックイン　集合：ロビー</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">15時にチェックインをします。いいかねPaletteロビーに集まってください。</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">17:00~18:00</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">コントロールルームで音出し会</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">コントロールルームで音を出す事ができます。自身の過去曲等を流して、次の日のお披露目会でどんな風に鳴るかを確認する事が出来ます。</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">18:00~20:30</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">BBQ・レクリエーション・交流会</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">BBQをしつつ、レクリエーションを行い、トラックメイカー同士で交流ができるようにします。</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">20:30~21:00</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">自由教室→シェアライブラリー移動</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">自由教室からシェアライブラリに移動して、翌日の昼まで曲を作りこめます！</p>
            </li>
        </ol>
        <h2 class="text-4xl font-bold text-amber-500 mt-8">2日目</h2>
        <ol class="relative border-s border-gray-200 dark:border-gray-700 my-8">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00~</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">チェックアウト</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">いいかねPaletteのルールに伴い、10時にはチェックアウトしてもらいます。</p>
                <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a> -->
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12:00</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">制作終了</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">12時に制作時間終了となります。シェアライブラリから撤収してください。</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12:00~</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">お昼休憩</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">14時から始まる発表会に備えて、腹ごしらえしてください！</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-amber-500 dark:text-gray-500">14:00~17:00</time>
                <h3 class="text-lg font-semibold text-amber-500 dark:text-white">発表会・閉会式</h3>
                <p class="text-base font-normal text-amber-500 dark:text-gray-400">皆さんの渾身の力作を爆音で聴きましょう！</p>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">18:00</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">解散</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">これにて、ミュージックハッカソン終了となります。お疲れ様でした！</p>
            </li>
        </ol>
    </div>
    <div class="mx-auto max-w-screen-md px-6 pt-6 pb-6">
        <h1 class="text-4xl font-bold">申込までの流れ</h1>
        <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-8">                  
            <li class="mb-10 ms-6">            
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">①申し込み期間 <!--<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>--></h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3/20~4/27</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">申し込み期間は3/20~4/27 23:59までです。</p>
                <NuxtLink to="/application" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">申し込む <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></NuxtLink>
                <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
        </svg> Download ZIP</a> -->
            </li>
            <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">②事前オンライン説明会</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4/28</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">4/28 20:00~に事前オンライン説明会を行います。</p>
            </li>
            <li class="ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">③当日</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">5/11~5/12</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">当日を楽しみましょう！</p>
            </li>
        </ol>
    </div>
</template>

<style scoped>
.text__bg1{
    display: block;
    width: 100%;
    height: 72px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #fff;
    transform-origin: left;
    transform: scaleX(0);
}
.text{
    position: relative;
}
.text__word1{
    opacity: 0;
}

.text__bg2{
    display: block;
    width: 100%;
    height: 72px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #fff;
    transform-origin: right;
    transform: scaleX(0);
}
.text{
    position: relative;
}
.text__word2{
    opacity: 0;
}

.container {
  position: relative;
  width: 24px;
  height: 24px;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: #fff;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.text-scroll {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: .25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}
</style>
