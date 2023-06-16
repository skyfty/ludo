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
                48:{
                    name:"rocket",
                    clip:2
                },
                12:{
                    name:"rocket",
                    clip:2
                },
                6:{
                    name:"defender",
                    clip:0
                },
                0:{
                    name:"plus",
                    clip:1
                 },
                 19:{
                     name:"plus",
                     clip:1
                  },
                  25:{
                      name:"rocket",
                      clip:2
                   },
                   31:{
                       name:"defender",
                       clip:0
                    },
            }
        }
    ];
}
