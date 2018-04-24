Ext.define('Common.ProvSelector', {

    xtype: 'provSelector',

    statics: {
        getCityData:function(provID){
            var newCityArray=[];
            for(var i=0;i<Common.ProvSelector.city.length;i++){
                if(Common.ProvSelector.city[i][2]==provID){
                    newCityArray.push(Common.ProvSelector.city[i]);
                }
            }
            return newCityArray;
        },
        getCityDataByName:function(provName){
            var newCityArray=[];
            for(var i=0;i<Common.ProvSelector.city.length;i++){
                if(Common.ProvSelector.city[i][1]==provName){
                    newCityArray.push(Common.ProvSelector.city[i]);
                }
            }
            return newCityArray;
        },
        prov: [[
            1,
            "北京市",
            1,
            "直辖市"
        ], [
            2,
            "天津市",
            2,
            "直辖市"
        ], [
            3,
            "河北省",
            5,
            "省份"
        ], [
            4,
            "山西省",
            6,
            "省份"
        ], [
            5,
            "内蒙古自治区",
            32,
            "自治区"
        ], [
            6,
            "辽宁省",
            8,
            "省份"
        ], [
            7,
            "吉林省",
            9,
            "省份"
        ], [
            8,
            "黑龙江省",
            10,
            "省份"
        ], [
            9,
            "上海市",
            3,
            "直辖市"
        ], [
            10,
            "江苏省",
            11,
            "省份"
        ], [
            11,
            "浙江省",
            12,
            "省份"
        ], [
            12,
            "安徽省",
            13,
            "省份"
        ], [
            13,
            "福建省",
            14,
            "省份"
        ], [
            14,
            "江西省",
            15,
            "省份"
        ], [
            15,
            "山东省",
            16,
            "省份"
        ], [
            16,
            "河南省",
            17,
            "省份"
        ], [
            17,
            "湖北省",
            18,
            "省份"
        ], [
            18,
            "湖南省",
            19,
            "省份"
        ], [
            19,
            "广东省",
            20,
            "省份"
        ], [
            20,
            "海南省",
            24,
            "省份"
        ], [
            21,
            "广西壮族自治区",
            28,
            "自治区"
        ], [
            22,
            "甘肃省",
            21,
            "省份"
        ], [
            23,
            "陕西省",
            27,
            "省份"
        ], [
            24,
            "新 疆维吾尔自治区",
            31,
            "自治区"
        ], [
            25,
            "青海省",
            26,
            "省份"
        ], [
            26,
            "宁夏回族自治区",
            30,
            "自治区"
        ], [
            27,
            "重庆市",
            4,
            "直辖市"
        ], [
            28,
            "四川省",
            22,
            "省份"
        ], [
            29,
            "贵州省",
            23,
            "省份"
        ], [
            30,
            "云南省",
            25,
            "省份"
        ], [
            31,
            "西藏自治区",
            29,
            "自治区"
        ], [
            32,
            "台湾省",
            7,
            "省份"
        ], [
            33,
            "澳门特别行政区",
            33,
            "特别行政区"
        ], [
            34,
            "香港特别行政区",
            34,
            "特别行政区"
        ]],
        city: [[
            1,
            "北京市",
            1,
            1
        ], [
            2,
            "天津市",
            2,
            2
        ], [
            3,
            "上海市",
            9,
            3
        ], [
            4,
            "重庆市",
            27,
            4
        ], [
            5,
            "邯郸市",
            3,
            5
        ], [
            6,
            "石家庄市",
            3,
            6
        ], [
            7,
            "保定市",
            3,
            7
        ], [
            8,
            "张家口市",
            3,
            8
        ], [
            9,
            "承德市",
            3,
            9
        ], [
            10,
            "唐山市",
            3,
            10
        ], [
            11,
            "廊坊市",
            3,
            11
        ], [
            12,
            "沧州市",
            3,
            12
        ], [
            13,
            "衡水市",
            3,
            13
        ], [
            14,
            "邢台市",
            3,
            14
        ], [
            16,
            "朔州市",
            4,
            16
        ], [
            17,
            "忻州市",
            4,
            17
        ], [
            18,
            "太原市",
            4,
            18
        ], [
            19,
            "大同市",
            4,
            19
        ], [
            20,
            "阳泉市",
            4,
            20
        ], [
            21,
            "晋中市",
            4,
            21
        ], [
            22,
            "长治市",
            4,
            22
        ], [
            23,
            "晋城市",
            4,
            23
        ], [
            24,
            "临汾市",
            4,
            24
        ], [
            25,
            "吕梁市",
            4,
            25
        ], [
            26,
            "运城市",
            4,
            26
        ], [
            27,
            "沈阳市",
            6,
            27
        ], [
            28,
            "铁岭市",
            6,
            28
        ], [
            29,
            "大连市",
            6,
            29
        ], [
            30,
            "鞍山市",
            6,
            30
        ], [
            31,
            "抚顺市",
            6,
            31
        ], [
            32,
            "本溪市",
            6,
            32
        ], [
            33,
            "丹东市",
            6,
            33
        ], [
            34,
            "锦州市",
            6,
            34
        ], [
            35,
            "营口市",
            6,
            35
        ], [
            36,
            "阜新市",
            6,
            36
        ], [
            37,
            "辽阳市",
            6,
            37
        ], [
            38,
            "朝阳市",
            6,
            38
        ], [
            39,
            "盘锦市",
            6,
            39
        ], [
            40,
            "葫芦岛市",
            6,
            40
        ], [
            41,
            "长春市",
            7,
            41
        ], [
            42,
            "吉林市",
            7,
            42
        ], [
            43,
            "延边朝鲜族自治州",
            7,
            43
        ], [
            44,
            "四平市",
            7,
            44
        ], [
            45,
            "通化市",
            7,
            45
        ], [
            46,
            "白城市",
            7,
            46
        ], [
            47,
            "辽源市",
            7,
            47
        ], [
            48,
            "松原市",
            7,
            48
        ], [
            49,
            "白山市",
            7,
            49
        ], [
            50,
            "哈尔滨市",
            8,
            50
        ], [
            51,
            "齐齐哈尔市",
            8,
            51
        ], [
            52,
            "鸡西市",
            8,
            52
        ], [
            53,
            "牡丹江市",
            8,
            53
        ], [
            54,
            "七台河市",
            8,
            54
        ], [
            55,
            "佳木斯市",
            8,
            55
        ], [
            56,
            "鹤岗市",
            8,
            56
        ], [
            57,
            "双鸭山市",
            8,
            57
        ], [
            58,
            "绥化市",
            8,
            58
        ], [
            59,
            "黑河市",
            8,
            59
        ], [
            60,
            "大兴安岭地区",
            8,
            60
        ], [
            61,
            "伊春市",
            8,
            61
        ], [
            62,
            "大庆市",
            8,
            62
        ], [
            63,
            "南京市",
            10,
            63
        ], [
            64,
            "无锡市",
            10,
            64
        ], [
            65,
            "镇江市",
            10,
            65
        ], [
            66,
            "苏州市",
            10,
            66
        ], [
            67,
            "南通市",
            10,
            67
        ], [
            68,
            "扬州市",
            10,
            68
        ], [
            69,
            "盐城市",
            10,
            69
        ], [
            70,
            "徐州市",
            10,
            70
        ], [
            71,
            "淮安市",
            10,
            71
        ], [
            72,
            "连云港市",
            10,
            72
        ], [
            73,
            "常州市",
            10,
            73
        ], [
            74,
            "泰州市",
            10,
            74
        ], [
            75,
            "宿迁市",
            10,
            75
        ], [
            76,
            "舟山市",
            11,
            76
        ], [
            77,
            "衢州市",
            11,
            77
        ], [
            78,
            "杭州市",
            11,
            78
        ], [
            79,
            "湖州市",
            11,
            79
        ], [
            80,
            "嘉兴市",
            11,
            80
        ], [
            81,
            "宁波市",
            11,
            81
        ], [
            82,
            "绍兴市",
            11,
            82
        ], [
            83,
            "温州市",
            11,
            83
        ], [
            84,
            "丽水市",
            11,
            84
        ], [
            85,
            "金华市",
            11,
            85
        ], [
            86,
            "台州市",
            11,
            86
        ], [
            87,
            "合肥市",
            12,
            87
        ], [
            88,
            "芜湖市",
            12,
            88
        ], [
            89,
            "蚌埠市",
            12,
            89
        ], [
            90,
            "淮南市",
            12,
            90
        ], [
            91,
            "马鞍山市",
            12,
            91
        ], [
            92,
            "淮北市",
            12,
            92
        ], [
            93,
            "铜陵市",
            12,
            93
        ], [
            94,
            "安庆市",
            12,
            94
        ], [
            95,
            "黄山市",
            12,
            95
        ], [
            96,
            "滁州市",
            12,
            96
        ], [
            97,
            "阜阳市",
            12,
            97
        ], [
            98,
            "宿州市",
            12,
            98
        ], [
            99,
            "巢湖市",
            12,
            99
        ], [
            100,
            "六安市",
            12,
            100
        ], [
            101,
            "亳州市",
            12,
            101
        ], [
            102,
            "池州市",
            12,
            102
        ], [
            103,
            "宣城市",
            12,
            103
        ], [
            104,
            "福州市",
            13,
            104
        ], [
            105,
            "厦门市",
            13,
            105
        ], [
            106,
            "宁德市",
            13,
            106
        ], [
            107,
            "莆田市",
            13,
            107
        ], [
            108,
            "泉州市",
            13,
            108
        ], [
            109,
            "漳州市",
            13,
            109
        ], [
            110,
            "龙岩市",
            13,
            110
        ], [
            111,
            "三明市",
            13,
            111
        ], [
            112,
            "南平市",
            13,
            112
        ], [
            113,
            "鹰潭市",
            14,
            113
        ], [
            114,
            "新余市",
            14,
            114
        ], [
            115,
            "南昌市",
            14,
            115
        ], [
            116,
            "九江市",
            14,
            116
        ], [
            117,
            "上饶市",
            14,
            117
        ], [
            118,
            "抚州市",
            14,
            118
        ], [
            119,
            "宜春市",
            14,
            119
        ], [
            120,
            "吉安市",
            14,
            120
        ], [
            121,
            "赣州市",
            14,
            121
        ], [
            122,
            "景德镇市",
            14,
            122
        ], [
            123,
            "萍乡市",
            14,
            123
        ], [
            124,
            "菏泽市",
            15,
            124
        ], [
            125,
            "济南市",
            15,
            125
        ], [
            126,
            "青岛市",
            15,
            126
        ], [
            127,
            "淄博市",
            15,
            127
        ], [
            128,
            "德州市",
            15,
            128
        ], [
            129,
            "烟台市",
            15,
            129
        ], [
            130,
            "潍坊市",
            15,
            130
        ], [
            131,
            "济宁市",
            15,
            131
        ], [
            132,
            "泰安市",
            15,
            132
        ], [
            133,
            "临沂市",
            15,
            133
        ], [
            134,
            "滨州市",
            15,
            134
        ], [
            135,
            "东营市",
            15,
            135
        ], [
            136,
            "威海市",
            15,
            136
        ], [
            137,
            "枣庄市",
            15,
            137
        ], [
            138,
            "日照市",
            15,
            138
        ], [
            139,
            "莱芜市",
            15,
            139
        ], [
            140,
            "聊城市",
            15,
            140
        ], [
            141,
            "商丘市",
            16,
            141
        ], [
            142,
            "郑州市",
            16,
            142
        ], [
            143,
            "安阳市",
            16,
            143
        ], [
            144,
            "新乡市",
            16,
            144
        ], [
            145,
            "许昌市",
            16,
            145
        ], [
            146,
            "平顶山市",
            16,
            146
        ], [
            147,
            "信阳市",
            16,
            147
        ], [
            148,
            "南阳市",
            16,
            148
        ], [
            149,
            "开封市",
            16,
            149
        ], [
            150,
            "洛阳市",
            16,
            150
        ], [
            151,
            "济源市",
            16,
            151
        ], [
            152,
            "焦作市",
            16,
            152
        ], [
            153,
            "鹤壁市",
            16,
            153
        ], [
            154,
            "濮阳市",
            16,
            154
        ], [
            155,
            "周口市",
            16,
            155
        ], [
            156,
            "漯河市",
            16,
            156
        ], [
            157,
            "驻马店市",
            16,
            157
        ], [
            158,
            "三门峡市",
            16,
            158
        ], [
            159,
            "武汉市",
            17,
            159
        ], [
            160,
            "襄樊市",
            17,
            160
        ], [
            161,
            "鄂州市",
            17,
            161
        ], [
            162,
            "孝感市",
            17,
            162
        ], [
            163,
            "黄冈市",
            17,
            163
        ], [
            164,
            "黄石市",
            17,
            164
        ], [
            165,
            "咸宁市",
            17,
            165
        ], [
            166,
            "荆州市",
            17,
            166
        ], [
            167,
            "宜昌市",
            17,
            167
        ], [
            168,
            "恩施土家族苗族自治州",
            17,
            168
        ], [
            169,
            "神农架林区",
            17,
            169
        ], [
            170,
            "十堰市",
            17,
            170
        ], [
            171,
            "随州市",
            17,
            171
        ], [
            172,
            "荆门市",
            17,
            172
        ], [
            173,
            "仙桃市",
            17,
            173
        ], [
            174,
            "天门市",
            17,
            174
        ], [
            175,
            "潜江市",
            17,
            175
        ], [
            176,
            "岳阳市",
            18,
            176
        ], [
            177,
            "长沙市",
            18,
            177
        ], [
            178,
            "湘潭市",
            18,
            178
        ], [
            179,
            "株洲市",
            18,
            179
        ], [
            180,
            "衡阳市",
            18,
            180
        ], [
            181,
            "郴州市",
            18,
            181
        ], [
            182,
            "常德市",
            18,
            182
        ], [
            183,
            "益阳市",
            18,
            183
        ], [
            184,
            "娄底市",
            18,
            184
        ], [
            185,
            "邵阳市",
            18,
            185
        ], [
            186,
            "湘西土家族苗族自治州",
            18,
            186
        ], [
            187,
            "张家界市",
            18,
            187
        ], [
            188,
            "怀化市",
            18,
            188
        ], [
            189,
            "永州市",
            18,
            189
        ], [
            190,
            "广州市",
            19,
            190
        ], [
            191,
            "汕尾市",
            19,
            191
        ], [
            192,
            "阳江市",
            19,
            192
        ], [
            193,
            "揭阳市",
            19,
            193
        ], [
            194,
            "茂名市",
            19,
            194
        ], [
            195,
            "惠州市",
            19,
            195
        ], [
            196,
            "江门市",
            19,
            196
        ], [
            197,
            "韶关市",
            19,
            197
        ], [
            198,
            "梅州市",
            19,
            198
        ], [
            199,
            "汕头市",
            19,
            199
        ], [
            200,
            "深圳市",
            19,
            200
        ], [
            201,
            "珠海市",
            19,
            201
        ], [
            202,
            "佛山市",
            19,
            202
        ], [
            203,
            "肇庆市",
            19,
            203
        ], [
            204,
            "湛江市",
            19,
            204
        ], [
            205,
            "中山市",
            19,
            205
        ], [
            206,
            "河源市",
            19,
            206
        ], [
            207,
            "清远市",
            19,
            207
        ], [
            208,
            "云浮市",
            19,
            208
        ], [
            209,
            "潮州市",
            19,
            209
        ], [
            210,
            "东莞市",
            19,
            210
        ], [
            211,
            "兰州市",
            22,
            211
        ], [
            212,
            "金昌市",
            22,
            212
        ], [
            213,
            "白银市",
            22,
            213
        ], [
            214,
            "天水市",
            22,
            214
        ], [
            215,
            "嘉峪关市",
            22,
            215
        ], [
            216,
            "武威市",
            22,
            216
        ], [
            217,
            "张掖市",
            22,
            217
        ], [
            218,
            "平凉市",
            22,
            218
        ], [
            219,
            "酒泉市",
            22,
            219
        ], [
            220,
            "庆阳市",
            22,
            220
        ], [
            221,
            "定西市",
            22,
            221
        ], [
            222,
            "陇南市",
            22,
            222
        ], [
            223,
            "临夏回族自治州",
            22,
            223
        ], [
            224,
            "甘南藏族自治州",
            22,
            224
        ], [
            225,
            "成都市",
            28,
            225
        ], [
            226,
            "攀枝花市",
            28,
            226
        ], [
            227,
            "自贡市",
            28,
            227
        ], [
            228,
            "绵阳市",
            28,
            228
        ], [
            229,
            "南充市",
            28,
            229
        ], [
            230,
            "达州市",
            28,
            230
        ], [
            231,
            "遂宁市",
            28,
            231
        ], [
            232,
            "广安市",
            28,
            232
        ], [
            233,
            "巴中市",
            28,
            233
        ], [
            234,
            "泸州市",
            28,
            234
        ], [
            235,
            "宜宾市",
            28,
            235
        ], [
            236,
            "资阳市",
            28,
            236
        ], [
            237,
            "内江市",
            28,
            237
        ], [
            238,
            "乐山市",
            28,
            238
        ], [
            239,
            "眉山市",
            28,
            239
        ], [
            240,
            "凉山彝族自治州",
            28,
            240
        ], [
            241,
            "雅安市",
            28,
            241
        ], [
            242,
            "甘孜藏族自治州",
            28,
            242
        ], [
            243,
            "阿坝藏族羌族自治州",
            28,
            243
        ], [
            244,
            "德阳市",
            28,
            244
        ], [
            245,
            "广元市",
            28,
            245
        ], [
            246,
            "贵阳市",
            29,
            246
        ], [
            247,
            "遵义市",
            29,
            247
        ], [
            248,
            "安顺市",
            29,
            248
        ], [
            249,
            "黔南布依族苗族自治州",
            29,
            249
        ], [
            250,
            "黔东南苗族侗族自治州",
            29,
            250
        ], [
            251,
            "铜仁地区",
            29,
            251
        ], [
            252,
            "毕节地区",
            29,
            252
        ], [
            253,
            "六盘水市",
            29,
            253
        ], [
            254,
            "黔西南布依族苗族自治州",
            29,
            254
        ], [
            255,
            "海口市",
            20,
            255
        ], [
            256,
            "三亚市",
            20,
            256
        ], [
            257,
            "五指山市",
            20,
            257
        ], [
            258,
            "琼海市",
            20,
            258
        ], [
            259,
            "儋州市",
            20,
            259
        ], [
            260,
            "文昌市",
            20,
            260
        ], [
            261,
            "万宁市",
            20,
            261
        ], [
            262,
            "东方市",
            20,
            262
        ], [
            263,
            "澄迈县",
            20,
            263
        ], [
            264,
            "定安县",
            20,
            264
        ], [
            265,
            "屯昌县",
            20,
            265
        ], [
            266,
            "临高县",
            20,
            266
        ], [
            267,
            "白沙黎族自治县",
            20,
            267
        ], [
            268,
            "昌江黎族自治县",
            20,
            268
        ], [
            269,
            "乐东黎族自治县",
            20,
            269
        ], [
            270,
            "陵水黎族自治县",
            20,
            270
        ], [
            271,
            "保亭黎族苗族自治县",
            20,
            271
        ], [
            272,
            "琼中黎族苗族自治县",
            20,
            272
        ], [
            273,
            "西双版纳傣族自治州",
            30,
            273
        ], [
            274,
            "德宏傣族景颇族自治州",
            30,
            274
        ], [
            275,
            "昭通市",
            30,
            275
        ], [
            276,
            "昆明市",
            30,
            276
        ], [
            277,
            "大理白族自治州",
            30,
            277
        ], [
            278,
            "红河哈尼族彝族自治州",
            30,
            278
        ], [
            279,
            "曲靖市",
            30,
            279
        ], [
            280,
            "保山市",
            30,
            280
        ], [
            281,
            "文山壮族苗族自治州",
            30,
            281
        ], [
            282,
            "玉溪市",
            30,
            282
        ], [
            283,
            "楚雄彝族自治州",
            30,
            283
        ], [
            284,
            "普洱市",
            30,
            284
        ], [
            285,
            "临沧市",
            30,
            285
        ], [
            286,
            "怒江傈傈族自治州",
            30,
            286
        ], [
            287,
            "迪庆藏族自治州",
            30,
            287
        ], [
            288,
            "丽江市",
            30,
            288
        ], [
            289,
            "海北藏族自治州",
            25,
            289
        ], [
            290,
            "西宁市",
            25,
            290
        ], [
            291,
            "海东地区",
            25,
            291
        ], [
            292,
            "黄南藏族自治州",
            25,
            292
        ], [
            293,
            "海南藏族自治州",
            25,
            293
        ], [
            294,
            "果洛藏族自治州",
            25,
            294
        ], [
            295,
            "玉树藏族自治州",
            25,
            295
        ], [
            296,
            "海西蒙古族藏族自治州",
            25,
            296
        ], [
            297,
            "西安市",
            23,
            297
        ], [
            298,
            "咸阳市",
            23,
            298
        ], [
            299,
            "延安市",
            23,
            299
        ], [
            300,
            "榆林市",
            23,
            300
        ], [
            301,
            "渭南市",
            23,
            301
        ], [
            302,
            "商洛市",
            23,
            302
        ], [
            303,
            "安康市",
            23,
            303
        ], [
            304,
            "汉中市",
            23,
            304
        ], [
            305,
            "宝鸡市",
            23,
            305
        ], [
            306,
            "铜川市",
            23,
            306
        ], [
            307,
            "防城港市",
            21,
            307
        ], [
            308,
            "南宁市",
            21,
            308
        ], [
            309,
            "崇左市",
            21,
            309
        ], [
            310,
            "来宾市",
            21,
            310
        ], [
            311,
            "柳州市",
            21,
            311
        ], [
            312,
            "桂林市",
            21,
            312
        ], [
            313,
            "梧州市",
            21,
            313
        ], [
            314,
            "贺州市",
            21,
            314
        ], [
            315,
            "贵港市",
            21,
            315
        ], [
            316,
            "玉林市",
            21,
            316
        ], [
            317,
            "百色市",
            21,
            317
        ], [
            318,
            "钦州市",
            21,
            318
        ], [
            319,
            "河池市",
            21,
            319
        ], [
            320,
            "北海市",
            21,
            320
        ], [
            321,
            "拉萨市",
            31,
            321
        ], [
            322,
            "日喀则地区",
            31,
            322
        ], [
            323,
            "山南地区",
            31,
            323
        ], [
            324,
            "林芝地区",
            31,
            324
        ], [
            325,
            "昌都地区",
            31,
            325
        ], [
            326,
            "那曲地区",
            31,
            326
        ], [
            327,
            "阿里地区",
            31,
            327
        ], [
            328,
            "银川市",
            26,
            328
        ], [
            329,
            "石嘴山市",
            26,
            329
        ], [
            330,
            "吴忠市",
            26,
            330
        ], [
            331,
            "固原市",
            26,
            331
        ], [
            332,
            "中卫市",
            26,
            332
        ], [
            333,
            "塔城地区",
            24,
            333
        ], [
            334,
            "哈密地区",
            24,
            334
        ], [
            335,
            "和田地区",
            24,
            335
        ], [
            336,
            "阿勒泰地区",
            24,
            336
        ], [
            337,
            "克孜勒苏柯尔克孜自治州",
            24,
            337
        ], [
            338,
            "博尔塔拉蒙古自治州",
            24,
            338
        ], [
            339,
            "克拉玛依市",
            24,
            339
        ], [
            340,
            "乌鲁木齐市",
            24,
            340
        ], [
            341,
            "石河子市",
            24,
            341
        ], [
            342,
            "昌吉回族自治州",
            24,
            342
        ], [
            343,
            "五家渠市",
            24,
            343
        ], [
            344,
            "吐鲁番地区",
            24,
            344
        ], [
            345,
            "巴音郭楞蒙古自治州",
            24,
            345
        ], [
            346,
            "阿克苏地区",
            24,
            346
        ], [
            347,
            "阿拉尔市",
            24,
            347
        ], [
            348,
            "喀什地区",
            24,
            348
        ], [
            349,
            "图木舒克市",
            24,
            349
        ], [
            350,
            "伊犁哈萨克自治州",
            24,
            350
        ], [
            351,
            "呼伦贝尔市",
            5,
            351
        ], [
            352,
            "呼和浩特市",
            5,
            352
        ], [
            353,
            "包头市",
            5,
            353
        ], [
            354,
            "乌海市",
            5,
            354
        ], [
            355,
            "乌兰察布市",
            5,
            355
        ], [
            356,
            "通辽市",
            5,
            356
        ], [
            357,
            "赤峰市",
            5,
            357
        ], [
            358,
            "鄂尔多斯市",
            5,
            358
        ], [
            359,
            "巴彦淖尔市",
            5,
            359
        ], [
            360,
            "锡林郭勒盟",
            5,
            360
        ], [
            361,
            "兴安盟",
            5,
            361
        ], [
            362,
            "阿拉善盟",
            5,
            362
        ], [
            363,
            "台北市",
            32,
            363
        ], [
            364,
            "高雄市",
            32,
            364
        ], [
            365,
            "基隆市",
            32,
            365
        ], [
            366,
            "台中市",
            32,
            366
        ], [
            367,
            "台南市",
            32,
            367
        ], [
            368,
            "新竹市",
            32,
            368
        ], [
            369,
            "嘉义市",
            32,
            369
        ], [
            370,
            "澳门特别行政区",
            33,
            370
        ], [
            371,
            "香港特别行政区",
            34,
            371
        ]]
    }
});