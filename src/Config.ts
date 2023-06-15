export class Config {
    static NUMBER_UNIVERSAL_HOLD = 52;
    static NUMBER_PERSONAL_HOLD = 6;
    static TIMEOUT_CHOOSE_CHESS = 30;
    static TIMEOUT_CHUNK = 30;

    static Colors= ["red", "green","yellow","blue"];
    static ColorValue:any= {"red":"#ff0000", "green":"#00a300","yellow":"#ffc400","blue":"#008cf8"};

    static MagicMap= [
        {
            "makeup":{
                6:{
                    name:"rocket",
                    clip:2
                },
                10:{
                    name:"defender",
                    clip:0
                },
                0:{
                    name:"plus",
                    clip:1
                 },
            }
        },
        {
            "makeup":{
                10:{
                    name:"rocket",
                    clip:1
                },
                30:{
                    name:"defender",
                    clip:0
                },
                35:{
                    name:"plus",
                    clip:2
                 },
            }
        },
    ];
}
