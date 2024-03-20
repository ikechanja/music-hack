<script setup>
</script>
<template>
    <div class="bg-sky-700 pb-12">
        <div class="mx-auto max-w-screen-md px-6 pt-6">
            <Header />
            <h1 class="text-4xl font-bold text-slate-100 text-center mt-8">申込フォーム</h1>
        </div>
    </div>
    <div class="mx-auto max-w-screen-md px-6 pt-6">
        <p>改めて、参加要件をご確認の上、お申込みください。</p>
        <h1 class="text-2xl font-bold my-4">企画詳細</h1>
        <p class="my-4">ミュージックハッカソンは音楽版ハッカソンです。限られた時間で音楽を作り、よりよい作品をつくりつつ、音楽仲間との交流を深めるイベントです。</p>
        <p class="my-4">
            日時：2024/05/11　~　2024/05/12（1泊2日）<br>
            場所：福岡県田川市 いいかねPalette（現地に12:00集合）<br>
            参加要件：ノートPCを持参して曲が作れる方
        </p>
        <p class="my-4">定員：18名（先着順）</p>
        <h1 class="text-2xl font-bold my-4">参加費</h1>
        <p class="my-4">
            13,000円<br>
            （宿泊費、施設利用料、レコーディングルーム、BBQ区画費用、食材費、その他運営費用含む）
        </p>
        <h1 class="text-2xl font-bold my-4">持ってくるもの</h1>
        <p class="my-4">
            ・自分のDTM用のPC, Mac<br>
            ・宿泊用品
        </p>
        <h1 class="text-2xl font-bold my-4">アクセスについて</h1>
        <p class="my-4">
            ■福岡空港から<br>
            　・車で69分<br>
            ■西鉄天神高速バスターミナルから<br>
            　①西鉄バス【特急】ノンストップ飯塚・田川（後藤寺・伊田・県立大）行で85分→<br>
            　②西鉄後藤寺営業所から車で10分<span class="font-bold">（運営が送迎します）</span><br>
            ■JR博多駅から<br>
            　①JR篠栗線【快速】直方行 で40分→<br>
            　②JR新飯塚駅からJR後藤寺線田川後藤寺行 で21分→<br>
            　③田川後藤寺駅からから車で10分<span class="font-bold">（運営が送迎します）</span><br>
        </p>
        <h1 class="text-2xl font-bold my-4">注意事項</h1>
        <p class="my-4">
            ①イベントについてのお問い合わせの窓口は運営チームの池ちゃんです。いいかねPaletteへのお問い合わせはご遠慮ください。<br>
            ②参加費は一日目の集合時に集めます。混乱を防ぐため、準備をお願いします。<br>
            ③宿泊部屋はドミトリーと教室部屋です。ドミトリーが最大10名までとなっています。男女混同で利用することも想定されますのでご了承ください。ドミトリーや教室の様子については、下記を参考にされてください。
        </p>
        <img src="/assets/img/contact.png">
        <h1 class="text-2xl font-bold my-4">タイムスケジュール</h1>
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
        <h1 class="text-2xl font-bold my-4 text-center">申込フォーム</h1>
        <!-- <form class="my-8" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe5MCDxqpWGUW6NSXc9NWjLBfmaoYlQkUe59hEjXORSd1RVFA/formResponse" method="POST" id="mG61Hd" target="_self">
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Q1.メールアドレス<span class="font-bold text-red-500">*</span></label>
                <input type="email" id="email" name="emailAddress" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required />
            </div>
            <div class="mb-6">
                <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Q2.お名前（本名）<span class="font-bold text-red-500">*</span></label>
                <input type="text" id="fullname" name="entry.338571803" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="山田　太郎" required />
            </div>
            <div class="mb-6">
                <label for="nickname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Q3.お名前（音楽活動名・Discordネーム）<span class="font-bold text-red-500">*</span></label>
                <input type="text" id="nickname" name="entry.1171286583" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ハッカソン" required />
            </div>
            <div class="mb-6">
                <label for="discord" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Q4.Discord IDを教えてください<span class="font-bold text-red-500">*</span></label>
                <input type="text" id="discord" name="entry.361329560" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ikechan" required />
            </div>
            <p>Q5-1.いいかねPaletteまでどのように来る予定ですか？<span class="font-bold text-red-500">*</span></p>
            <div class="flex items-center my-2">
                <input id="bus" type="radio" value="電車・バス（最寄りの後藤時バス停まで）" name="entry.1430286056" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="bus" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">電車・バス（最寄りの後藤時バス停まで）</label>
            </div>
            <div class="flex items-center my-2">
                <input id="car" type="radio" value="車で（自車、レンタカー含む）" name="entry.1430286056" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="car" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">車で（自車、レンタカー含む）</label>
            </div>
            <p class="mt-4">Q5-2.<span class="font-bold">（電車・バスの方のみ）</span><br>最寄りのバス停からPaletteまで車で送迎いたします。ご希望の時間帯を教えてください。</p>
            <div class="flex items-center my-2">
                <input id="time-1" type="radio" value="10:00" name="entry.2065618855" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="time-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">10:00</label>
            </div>
            <div class="flex items-center my-2">
                <input id="time-2" type="radio" value="10:20" name="entry.2065618855" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="time-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">10:20</label>
            </div>
            <div class="flex items-center my-2">
                <input id="time-3" type="radio" value="10:40" name="entry.2065618855" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="time-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">10:40</label>
            </div>
            <div class="flex items-center my-2">
                <input id="time-4" type="radio" value="11:00" name="entry.2065618855" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="time-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">11:00</label>
            </div>
            <div class="flex items-center my-2">
                <input id="time-5" type="radio" value="11:20" name="entry.2065618855" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="time-5" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">11:20</label>
            </div>
            <div class="flex items-center my-2">
                <input id="time-6" type="radio" value="11:40" name="entry.2065618855" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="time-7" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">11:40</label>
            </div>
            <p>Q6.宿泊形態の希望をお聞かせください。<span class="font-bold text-red-500">*</span></p>
            <div class="flex items-center my-2">
                <input id="keitai-1" type="radio" value="ドミトリー希望" name="entry.844862827" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="keitai-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ドミトリー希望</label>
            </div>
            <div class="flex items-center my-2">
                <input id="keitai-2" type="radio" value="どちらでも良い（教室宿泊、ドミトリー）" name="entry.844862827" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="keitai-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">どちらでも良い（教室宿泊、ドミトリー）</label>
            </div>
            <p>Q6.食物アレルギーがありますか？<span class="font-bold text-red-500">*</span></p>
            <div class="flex items-center my-2">
                <input id="arerl-1" type="radio" value="ある" name="entry.1827625033" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="arerl-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ある</label>
            </div>
            <div class="flex items-center my-2">
                <input id="arerl-2" type="radio" value="ない" name="entry.1827625033" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="arerl-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ない</label>
            </div>
            <div class="mb-6">
                <label for="arel-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Q6-2.<span class="font-bold">（あると答えた方のみ）</span><br>何のアレルギーですか？</label>
                <input type="text" id="arel-name" name="entry.1442963946" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="卵" />
            </div>
            <p>Q7.当日はイベントの様子を写真に撮る予定です。次回開催の広報での写真の利用に関して、当てはまる項目を選択してください。<span class="font-bold text-red-500">*</span></p>
            <div class="flex items-center my-2">
                <input id="photo-1" type="radio" value="顔が写っている写真でも掲載OK" name="entry.2006012632" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="photo-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">顔が写っている写真でも掲載OK</label>
            </div>
            <div class="flex items-center my-2">
                <input id="photo-2" type="radio" value="顔を隠してなら掲載OK" name="entry.2006012632" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="photo-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">顔を隠してなら掲載OK</label>
            </div>
            <div class="flex items-center my-2">
                <input id="photo-3" type="radio" value="全身を隠してなら掲載OK" name="entry.2006012632" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="photo-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">全身を隠してなら掲載OK</label>
            </div>
            <div class="flex items-center my-2">
                <input id="photo-4" type="radio" value="自分が写っている写真は掲載NG" name="entry.2006012632" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="photo-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">自分が写っている写真は掲載NG</label>
            </div>
            <p>Q8.キャンセルポリシーに同意しますか？（同意頂けない場合は参加をお断りさせて頂きます。）<span class="font-bold text-red-500">*</span></p>
            <div class="bg-gray-200 my-8 p-4 rounded-xl">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">・キャンセルポリシー</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">2日前で50%、前日・当日は100%のキャンセル料となります。<br>（いいかねPalette側のキャンセル料です）</p>
            </div>
            <div class="flex items-center my-2">
                <input id="policy-yes" type="radio" value="はい" name="entry.1160639168" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="policy-yes" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">はい</label>
            </div>
            <div class="flex items-center my-2">
                <input id="policy-no" type="radio" value="いいえ" name="entry.1160639168" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                <label for="policy-no" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">いいえ</label>
            </div>
            <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 w-full">送信</button>
        </form> -->
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe5MCDxqpWGUW6NSXc9NWjLBfmaoYlQkUe59hEjXORSd1RVFA/viewform?embedded=true" width="100%" height="3721" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
</template>

<style scoped></style>