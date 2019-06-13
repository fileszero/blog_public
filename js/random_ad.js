(function () {
    var doc_src = [{ "a_id": "1483683", "p_id": "1891", "pc_id": "3696", "pl_id": "26259", "guid": "ON", "width": "468", "height": "120", "af_img": "1133/000000026259.jpg" },
    { "a_id": "1483683", "p_id": "1891", "pc_id": "3696", "pl_id": "26261", "guid": "ON", "width": "640", "height": "100", "af_img": "1133/000000026261.jpg" },
    { "a_id": "1483683", "p_id": "1891", "pc_id": "3696", "pl_id": "26253", "guid": "ON", "width": "469", "height": "120", "af_img": "1133/000000026253.jpg" },
    { "a_id": "1483683", "p_id": "1891", "pc_id": "3696", "pl_id": "26255", "guid": "ON", "width": "640", "height": "100", "af_img": "1133/000000026255.jpg" },
    { "a_id": "1483673", "p_id": "1874", "pc_id": "3658", "pl_id": "26115", "guid": "ON", "width": "468", "height": "60", "af_img": "0402/000000026115.png" },
    { "a_id": "1483673", "p_id": "1874", "pc_id": "3658", "pl_id": "26124", "guid": "ON", "width": "728", "height": "90", "af_img": "0402/000000026124.png" },
    { "a_id": "1483672", "p_id": "1871", "pc_id": "3648", "pl_id": "26017", "guid": "ON", "width": "468", "height": "60", "af_img": "1211/000000026017.jpg" },
    { "a_id": "1483680", "p_id": "1743", "pc_id": "3327", "pl_id": "24836", "guid": "ON", "width": "468", "height": "60", "af_img": "0303/000000024836.jpg" },
    { "a_id": "1483680", "p_id": "1743", "pc_id": "3327", "pl_id": "24837", "guid": "ON", "width": "468", "height": "60", "af_img": "0303/000000024837.jpg" },
    { "a_id": "1486222", "p_id": "1580", "pc_id": "2879", "pl_id": "22925", "guid": "ON", "width": "468", "height": "60", "af_img": "0899/000000022925.png" },
    { "a_id": "1486222", "p_id": "1580", "pc_id": "2879", "pl_id": "22926", "guid": "ON", "width": "468", "height": "60", "af_img": "0899/000000022926.png" },
    { "a_id": "1486222", "p_id": "1580", "pc_id": "2879", "pl_id": "22927", "guid": "ON", "width": "468", "height": "60", "af_img": "0899/000000022927.png" },
    { "a_id": "1486222", "p_id": "1580", "pc_id": "2879", "pl_id": "23020", "guid": "ON", "width": "468", "height": "60", "af_img": "0899/000000023020.gif" },
    { "a_id": "1486222", "p_id": "1580", "pc_id": "2879", "pl_id": "23021", "guid": "ON", "width": "728", "height": "90", "af_img": "0899/000000023021.png" },
    { "a_id": "1439526", "p_id": "1469", "pc_id": "2603", "pl_id": "22010", "guid": "ON", "width": "728", "height": "90", "af_img": "0671/000000022010.jpg" },
    { "a_id": "1439526", "p_id": "1469", "pc_id": "2603", "pl_id": "21995", "guid": "ON", "width": "468", "height": "60", "af_img": "0671/000000021995.jpg" },
    { "a_id": "1439526", "p_id": "1469", "pc_id": "2603", "pl_id": "21841", "guid": "ON", "width": "728", "height": "90", "af_img": "0671/000000021841.jpg" },
    { "a_id": "1487026", "p_id": "1431", "pc_id": "2500", "pl_id": "26693", "guid": "ON", "width": "468", "height": "60", "af_img": "0697/000000026693.png" },
    { "a_id": "1487026", "p_id": "1431", "pc_id": "2500", "pl_id": "26683", "guid": "ON", "width": "728", "height": "90", "af_img": "0697/000000026683.jpg" },
    { "a_id": "1486216", "p_id": "1386", "pc_id": "2364", "pl_id": "20739", "guid": "ON", "width": "468", "height": "60", "af_img": "0598/000000020739.png" },
    { "a_id": "1486216", "p_id": "1386", "pc_id": "2364", "pl_id": "20740", "guid": "ON", "width": "728", "height": "90", "af_img": "0598/000000020740.png" },
    { "a_id": "1487032", "p_id": "1314", "pc_id": "2178", "pl_id": "19805", "guid": "ON", "width": "728", "height": "90", "af_img": "0523/000000019805.png" },
    { "a_id": "1487032", "p_id": "1314", "pc_id": "2178", "pl_id": "19806", "guid": "ON", "width": "728", "height": "90", "af_img": "0523/000000019806.png" },
    { "a_id": "1487032", "p_id": "1314", "pc_id": "2178", "pl_id": "19807", "guid": "ON", "width": "728", "height": "90", "af_img": "0523/000000019807.png" },
    { "a_id": "1487027", "p_id": "1272", "pc_id": "2060", "pl_id": "19423", "guid": "ON", "width": "728", "height": "90", "af_img": "0459/000000019423.jpg" },
    { "a_id": "1487027", "p_id": "1272", "pc_id": "2060", "pl_id": "19392", "guid": "ON", "width": "468", "height": "60", "af_img": "0459/000000019392.jpg" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18511", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018511.jpg" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18512", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018512.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18513", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018513.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18514", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018514.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18515", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018515.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18516", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018516.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18517", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018517.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18521", "guid": "ON", "width": "600", "height": "100", "af_img": "0349/000000018521.png" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18522", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018522.png" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18524", "guid": "ON", "width": "728", "height": "90", "af_img": "0349/000000018524.png" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18526", "guid": "ON", "width": "630", "height": "185", "af_img": "0349/000000018526.png" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18529", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018529.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18532", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018532.jpg" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18535", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018535.png" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18536", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018536.jpg" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18537", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018537.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18538", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018538.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18539", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018539.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18540", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018540.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18541", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018541.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18542", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018542.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18543", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018543.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18544", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018544.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "18545", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000018545.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19137", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019137.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19138", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019138.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19139", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019139.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19140", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019140.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19144", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019144.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19152", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019152.gif" },
    { "a_id": "1439514", "p_id": "1225", "pc_id": "1925", "pl_id": "19153", "guid": "ON", "width": "468", "height": "60", "af_img": "0349/000000019153.gif" },
    { "a_id": "1457629", "p_id": "1024", "pc_id": "1450", "pl_id": "17205", "guid": "ON", "width": "468", "height": "120", "af_img": "0330/000000017205.png" },
    { "a_id": "1457629", "p_id": "1024", "pc_id": "1450", "pl_id": "17206", "guid": "ON", "width": "640", "height": "100", "af_img": "0330/000000017206.png" },
    { "a_id": "1457629", "p_id": "1024", "pc_id": "1450", "pl_id": "15157", "guid": "ON", "width": "728", "height": "90", "af_img": "0330/000000015157.jpg" },
    { "a_id": "1457629", "p_id": "1024", "pc_id": "1450", "pl_id": "15159", "guid": "ON", "width": "728", "height": "90", "af_img": "0330/000000015159.jpg" },
    { "a_id": "1486207", "p_id": "1035", "pc_id": "1467", "pl_id": "15140", "guid": "ON", "width": "468", "height": "60", "af_img": "0334/000000015140.jpg" },
    { "a_id": "1486207", "p_id": "1035", "pc_id": "1467", "pl_id": "15141", "guid": "ON", "width": "728", "height": "90", "af_img": "0334/000000015141.jpg" },
    { "a_id": "1486207", "p_id": "1035", "pc_id": "1467", "pl_id": "15131", "guid": "ON", "width": "468", "height": "60", "af_img": "0334/000000015131.jpg" },
    { "a_id": "1486207", "p_id": "1035", "pc_id": "1467", "pl_id": "15132", "guid": "ON", "width": "728", "height": "90", "af_img": "0334/000000015132.jpg" },
    { "a_id": "1486207", "p_id": "1035", "pc_id": "1467", "pl_id": "15122", "guid": "ON", "width": "468", "height": "60", "af_img": "0334/000000015122.jpg" },
    { "a_id": "1486207", "p_id": "1035", "pc_id": "1467", "pl_id": "15123", "guid": "ON", "width": "728", "height": "90", "af_img": "0334/000000015123.jpg" },
    { "a_id": "1436897", "p_id": "932", "pc_id": "1188", "pl_id": "12500", "guid": "ON", "width": "728", "height": "90", "af_img": "0285/000000012500.gif" },
    { "a_id": "1436897", "p_id": "932", "pc_id": "1188", "pl_id": "12501", "guid": "ON", "width": "468", "height": "60", "af_img": "0285/000000012501.gif" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "21447", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000021447.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "21448", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000021448.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "21445", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000021445.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "21446", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000021446.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "21429", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000021429.jpg" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "21430", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000021430.jpg" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "14103", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000014103.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "14104", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000014104.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13985", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000013985.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13986", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013986.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13975", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000013975.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13976", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013976.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13799", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013799.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13789", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000013789.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13790", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013790.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13780", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000013780.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13781", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013781.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13548", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000013548.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13549", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013549.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13031", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013031.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13021", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000013021.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "13022", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000013022.png" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "12630", "guid": "ON", "width": "728", "height": "90", "af_img": "0288/000000012630.jpg" },
    { "a_id": "1483684", "p_id": "936", "pc_id": "1196", "pl_id": "12631", "guid": "ON", "width": "468", "height": "60", "af_img": "0288/000000012631.jpg" },
    { "a_id": "1483679", "p_id": "912", "pc_id": "1132", "pl_id": "11846", "guid": "ON", "width": "468", "height": "60", "af_img": "0274/000000011846.jpg" },
    { "a_id": "1483679", "p_id": "912", "pc_id": "1132", "pl_id": "11847", "guid": "ON", "width": "728", "height": "90", "af_img": "0274/000000011847.jpg" },
    { "a_id": "1436900", "p_id": "170", "pc_id": "185", "pl_id": "4153", "guid": "ON", "width": "728", "height": "90", "af_img": "0068/000000004153.gif" },
    { "a_id": "1436900", "p_id": "170", "pc_id": "185", "pl_id": "4154", "guid": "ON", "width": "468", "height": "60", "af_img": "0068/000000004154.gif" },
    { "a_id": "1436900", "p_id": "170", "pc_id": "185", "pl_id": "4156", "guid": "ON", "width": "728", "height": "90", "af_img": "0068/000000004156.gif" },
    { "a_id": "1436900", "p_id": "170", "pc_id": "185", "pl_id": "4158", "guid": "ON", "width": "728", "height": "90", "af_img": "0068/000000004158.gif" },
    { "a_id": "1436900", "p_id": "170", "pc_id": "185", "pl_id": "4159", "guid": "ON", "width": "468", "height": "60", "af_img": "0068/000000004159.gif" },
    { "a_id": "1487029", "p_id": "109", "pc_id": "109", "pl_id": "2554", "guid": "ON", "width": "468", "height": "60", "af_img": "0045/000000002554.gif" },
    { "a_id": "1487031", "p_id": "110", "pc_id": "110", "pl_id": "2539", "guid": "ON", "width": "468", "height": "60", "af_img": "0045/000000002539.gif" },
    { "a_id": "1487031", "p_id": "110", "pc_id": "110", "pl_id": "2542", "guid": "ON", "width": "468", "height": "60", "af_img": "0045/000000002542.gif" },
    { "a_id": "1487031", "p_id": "110", "pc_id": "110", "pl_id": "2529", "guid": "ON", "width": "468", "height": "60", "af_img": "0045/000000002529.gif" },
    { "a_id": "1487031", "p_id": "110", "pc_id": "110", "pl_id": "2532", "guid": "ON", "width": "468", "height": "60", "af_img": "0045/000000002532.gif" },
    { "a_id": "1487031", "p_id": "110", "pc_id": "110", "pl_id": "2536", "guid": "ON", "width": "728", "height": "90", "af_img": "0045/000000002536.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "620", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000000620.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1220", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001220.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1226", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001226.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1232", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001232.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1238", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001238.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1244", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001244.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1250", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001250.gif" },
    { "a_id": "1439513", "p_id": "54", "pc_id": "54", "pl_id": "1251", "guid": "ON", "width": "468", "height": "60", "af_img": "0032/000000001251.gif" },
    { "a_id": "1487030", "p_id": "16", "pc_id": "16", "pl_id": "5190", "guid": "ON", "width": "468", "height": "60", "af_img": "0003/000000005190.png" },
    { "a_id": "1487030", "p_id": "16", "pc_id": "16", "pl_id": "92", "guid": "ON", "width": "468", "height": "60", "af_img": "0003/000000000092.png" },
    { "a_id": "1487030", "p_id": "16", "pc_id": "16", "pl_id": "93", "guid": "ON", "width": "468", "height": "60", "af_img": "0003/000000000093.png" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "3974", "guid": "ON", "width": "468", "height": "60", "af_img": "0001/000000003974.jpg" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "19217", "guid": "ON", "width": "728", "height": "90", "af_img": "0001/000000019217.jpg" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "3968", "guid": "ON", "width": "468", "height": "60", "af_img": "0001/000000003968.jpg" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "1328", "guid": "ON", "width": "468", "height": "60", "af_img": "0001/000000001328.jpg" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "7", "guid": "ON", "width": "468", "height": "60", "af_img": "0001/000000000007.gif" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "9", "guid": "ON", "width": "468", "height": "60", "af_img": "0001/000000000009.gif" },
    { "a_id": "1483663", "p_id": "1", "pc_id": "1", "pl_id": "9206", "guid": "ON", "width": "602", "height": "102", "af_img": "0001/000000009206.png" },
    { "a_id": "1486219", "p_id": "132", "pc_id": "138", "pl_id": "3113", "guid": "ON", "width": "468", "height": "60", "af_img": "0045/000000003113.gif" },
    { "a_id": "1486219", "p_id": "132", "pc_id": "138", "pl_id": "3118", "guid": "ON", "width": "728", "height": "90", "af_img": "0045/000000003118.gif" }];
    var rand = Math.floor(Math.random() * doc_src.length);
    var doc = doc_src[rand];
    var link_tpl = '<a href="//af.moshimo.com/af/c/click?a_id=${a_id}&p_id=${p_id}&pc_id=${pc_id}&pl_id=${pl_id}&guid=${guid}" target="_blank" rel="nofollow">'
        + '<img src="//image.moshimo.com/af-img/${af_img}" width="${width}" height="${height}" style="border:none;"></a>'
        + '<img src="//i.moshimo.com/af/i/impression?a_id=${a_id}&p_id=${p_id}&pc_id=${pc_id}&pl_id=${pl_id}" width="1" height="1" style="border:none;">'
    for (const key in doc) {
        if (doc.hasOwnProperty(key)) {
            link_tpl = link_tpl.split("${" + key + "}").join(doc[key]); // replace
        }
    }
    document.getElementById("random_ad").innerHTML = link_tpl;
    //document.write(link_tpl);
})();