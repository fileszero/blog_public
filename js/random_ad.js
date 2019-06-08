(function () {
    var doc_src = [
        function () {/*
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- contents_bottom -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-4453105403920084"
            data-ad-slot="5021986846"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    */},
        function () {/*
        <a href="//af.moshimo.com/af/c/click?a_id=1457629&p_id=1024&pc_id=1450&pl_id=17206&guid=ON" target="_blank" rel="nofollow">
        <img src="//image.moshimo.com/af-img/0330/000000017206.png" width="640" height="100" style="border:none;"></a>
        <img src="//i.moshimo.com/af/i/impression?a_id=1457629&p_id=1024&pc_id=1450&pl_id=17206" width="1" height="1" style="border:none;">
    */},
        function () {/*
        <a href="//af.moshimo.com/af/c/click?a_id=1483663&p_id=1&pc_id=1&pl_id=3974&guid=ON" target="_blank" rel="nofollow"><img src="//image.moshimo.com/af-img/0001/000000003974.jpg" width="468" height="60" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=1483663&p_id=1&pc_id=1&pl_id=3974" width="1" height="1" style="border:none;"></img>
    */},
        function () {/*
        <a href="//af.moshimo.com/af/c/click?a_id=1483673&p_id=1874&pc_id=3658&pl_id=26115&guid=ON" target="_blank" rel="nofollow"><img src="//image.moshimo.com/af-img/0402/000000026115.png" width="468" height="60" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=1483673&p_id=1874&pc_id=3658&pl_id=26115" width="1" height="1" style="border:none;">
    */},
        function () {/*
        <a href="//af.moshimo.com/af/c/click?a_id=1483679&p_id=912&pc_id=1132&pl_id=11846&guid=ON" target="_blank" rel="nofollow"><img src="//image.moshimo.com/af-img/0274/000000011846.jpg" width="468" height="60" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=1483679&p_id=912&pc_id=1132&pl_id=11846" width="1" height="1" style="border:none;"></img>
    */},
        function () {/*
        <a href="//af.moshimo.com/af/c/click?a_id=1483680&p_id=1743&pc_id=3327&pl_id=24836&guid=ON" target="_blank" rel="nofollow"><img src="//image.moshimo.com/af-img/0303/000000024836.jpg" width="468" height="60" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=1483680&p_id=1743&pc_id=3327&pl_id=24836" width="1" height="1" style="border:none;"></img>
    */},
    ];
    var rand = Math.floor(Math.random() * doc_src.length);
    var doc = doc_src[rand].toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    document.write(doc);
})();
