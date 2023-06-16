export class Config {
    static NUMBER_UNIVERSAL_HOLD = 52;
    static NUMBER_PERSONAL_HOLD = 6;
    static TIMEOUT_CHOOSE_CHESS = 30;
    static TIMEOUT_CHUNK = 30;

    static Colors = ["red", "green", "yellow", "blue"];
    static ColorValue: any = { "red": "#ff0000", "green": "#00a300", "yellow": "#ffc400", "blue": "#008cf8" };

    static MagicMap = [{"makeup":{"6":{"name":"plus","clip":1},"11":{"name":"plus","clip":1},"14":{"name":"plus","clip":1},"15":{"name":"rocket","clip":2},"22":{"name":"rocket","clip":2},"23":{"name":"rocket","clip":2},"40":{"name":"defender","clip":0},"46":{"name":"defender","clip":0},"48":{"name":"defender","clip":0}}},{"makeup":{"14":{"name":"defender","clip":0},"15":{"name":"defender","clip":0},"18":{"name":"defender","clip":0},"25":{"name":"plus","clip":1},"28":{"name":"rocket","clip":2},"33":{"name":"rocket","clip":2},"35":{"name":"plus","clip":1},"41":{"name":"rocket","clip":2},"50":{"name":"plus","clip":1}}},{"makeup":{"3":{"name":"plus","clip":1},"11":{"name":"defender","clip":0},"22":{"name":"rocket","clip":2},"28":{"name":"rocket","clip":2},"31":{"name":"rocket","clip":2},"33":{"name":"defender","clip":0},"37":{"name":"plus","clip":1},"41":{"name":"defender","clip":0},"51":{"name":"plus","clip":1}}},{"makeup":{"5":{"name":"rocket","clip":2},"12":{"name":"rocket","clip":2},"16":{"name":"defender","clip":0},"23":{"name":"plus","clip":1},"33":{"name":"plus","clip":1},"41":{"name":"rocket","clip":2},"46":{"name":"defender","clip":0},"50":{"name":"plus","clip":1},"51":{"name":"defender","clip":0}}},{"makeup":{"2":{"name":"plus","clip":1},"12":{"name":"rocket","clip":2},"27":{"name":"defender","clip":0},"31":{"name":"defender","clip":0},"37":{"name":"rocket","clip":2},"38":{"name":"plus","clip":1},"41":{"name":"rocket","clip":2},"42":{"name":"defender","clip":0},"48":{"name":"plus","clip":1}}},{"makeup":{"12":{"name":"defender","clip":0},"15":{"name":"rocket","clip":2},"19":{"name":"plus","clip":1},"25":{"name":"defender","clip":0},"27":{"name":"rocket","clip":2},"37":{"name":"plus","clip":1},"40":{"name":"rocket","clip":2},"42":{"name":"defender","clip":0},"43":{"name":"plus","clip":1}}},{"makeup":{"5":{"name":"plus","clip":1},"7":{"name":"rocket","clip":2},"11":{"name":"defender","clip":0},"15":{"name":"rocket","clip":2},"17":{"name":"plus","clip":1},"18":{"name":"defender","clip":0},"24":{"name":"defender","clip":0},"31":{"name":"plus","clip":1},"48":{"name":"rocket","clip":2}}},{"makeup":{"5":{"name":"rocket","clip":2},"11":{"name":"plus","clip":1},"20":{"name":"rocket","clip":2},"22":{"name":"plus","clip":1},"25":{"name":"defender","clip":0},"28":{"name":"rocket","clip":2},"35":{"name":"plus","clip":1},"45":{"name":"defender","clip":0},"49":{"name":"defender","clip":0}}},{"makeup":{"1":{"name":"plus","clip":1},"2":{"name":"rocket","clip":2},"7":{"name":"defender","clip":0},"11":{"name":"rocket","clip":2},"18":{"name":"defender","clip":0},"20":{"name":"plus","clip":1},"29":{"name":"plus","clip":1},"38":{"name":"rocket","clip":2},"40":{"name":"defender","clip":0}}},{"makeup":{"1":{"name":"defender","clip":0},"6":{"name":"plus","clip":1},"14":{"name":"rocket","clip":2},"18":{"name":"defender","clip":0},"19":{"name":"rocket","clip":2},"22":{"name":"rocket","clip":2},"35":{"name":"plus","clip":1},"41":{"name":"plus","clip":1},"44":{"name":"defender","clip":0}}},{"makeup":{"2":{"name":"defender","clip":0},"5":{"name":"plus","clip":1},"7":{"name":"defender","clip":0},"14":{"name":"rocket","clip":2},"18":{"name":"rocket","clip":2},"22":{"name":"rocket","clip":2},"25":{"name":"plus","clip":1},"42":{"name":"defender","clip":0},"50":{"name":"plus","clip":1}}},{"makeup":{"2":{"name":"plus","clip":1},"4":{"name":"defender","clip":0},"6":{"name":"rocket","clip":2},"18":{"name":"plus","clip":1},"24":{"name":"rocket","clip":2},"31":{"name":"defender","clip":0},"33":{"name":"plus","clip":1},"36":{"name":"defender","clip":0},"44":{"name":"rocket","clip":2}}},{"makeup":{"6":{"name":"plus","clip":1},"14":{"name":"plus","clip":1},"17":{"name":"defender","clip":0},"25":{"name":"rocket","clip":2},"27":{"name":"rocket","clip":2},"35":{"name":"defender","clip":0},"40":{"name":"plus","clip":1},"50":{"name":"rocket","clip":2},"51":{"name":"defender","clip":0}}},{"makeup":{"5":{"name":"defender","clip":0},"6":{"name":"rocket","clip":2},"10":{"name":"plus","clip":1},"27":{"name":"plus","clip":1},"28":{"name":"defender","clip":0},"29":{"name":"rocket","clip":2},"30":{"name":"rocket","clip":2},"37":{"name":"plus","clip":1},"41":{"name":"defender","clip":0}}},{"makeup":{"6":{"name":"rocket","clip":2},"16":{"name":"defender","clip":0},"22":{"name":"plus","clip":1},"24":{"name":"defender","clip":0},"31":{"name":"plus","clip":1},"32":{"name":"rocket","clip":2},"37":{"name":"rocket","clip":2},"41":{"name":"defender","clip":0},"46":{"name":"plus","clip":1}}},{"makeup":{"2":{"name":"plus","clip":1},"4":{"name":"plus","clip":1},"9":{"name":"rocket","clip":2},"23":{"name":"defender","clip":0},"25":{"name":"defender","clip":0},"32":{"name":"plus","clip":1},"36":{"name":"rocket","clip":2},"37":{"name":"defender","clip":0},"42":{"name":"rocket","clip":2}}},{"makeup":{"1":{"name":"rocket","clip":2},"12":{"name":"defender","clip":0},"20":{"name":"plus","clip":1},"28":{"name":"defender","clip":0},"35":{"name":"rocket","clip":2},"41":{"name":"rocket","clip":2},"43":{"name":"defender","clip":0},"48":{"name":"plus","clip":1},"49":{"name":"plus","clip":1}}},{"makeup":{"17":{"name":"defender","clip":0},"19":{"name":"plus","clip":1},"27":{"name":"plus","clip":1},"28":{"name":"rocket","clip":2},"30":{"name":"rocket","clip":2},"41":{"name":"defender","clip":0},"44":{"name":"plus","clip":1},"49":{"name":"rocket","clip":2},"50":{"name":"defender","clip":0}}},{"makeup":{"4":{"name":"defender","clip":0},"12":{"name":"plus","clip":1},"17":{"name":"plus","clip":1},"19":{"name":"rocket","clip":2},"28":{"name":"defender","clip":0},"37":{"name":"rocket","clip":2},"41":{"name":"plus","clip":1},"48":{"name":"rocket","clip":2},"51":{"name":"defender","clip":0}}},{"makeup":{"1":{"name":"rocket","clip":2},"2":{"name":"rocket","clip":2},"3":{"name":"plus","clip":1},"23":{"name":"defender","clip":0},"27":{"name":"plus","clip":1},"37":{"name":"defender","clip":0},"41":{"name":"plus","clip":1},"45":{"name":"defender","clip":0},"46":{"name":"rocket","clip":2}}},{"makeup":{"2":{"name":"rocket","clip":2},"3":{"name":"plus","clip":1},"10":{"name":"defender","clip":0},"15":{"name":"plus","clip":1},"17":{"name":"defender","clip":0},"18":{"name":"rocket","clip":2},"29":{"name":"defender","clip":0},"31":{"name":"rocket","clip":2},"38":{"name":"plus","clip":1}}},{"makeup":{"5":{"name":"plus","clip":1},"6":{"name":"rocket","clip":2},"14":{"name":"plus","clip":1},"16":{"name":"defender","clip":0},"22":{"name":"plus","clip":1},"28":{"name":"rocket","clip":2},"29":{"name":"defender","clip":0},"46":{"name":"defender","clip":0},"48":{"name":"rocket","clip":2}}},{"makeup":{"6":{"name":"rocket","clip":2},"14":{"name":"defender","clip":0},"15":{"name":"rocket","clip":2},"27":{"name":"plus","clip":1},"28":{"name":"plus","clip":1},"30":{"name":"rocket","clip":2},"40":{"name":"defender","clip":0},"42":{"name":"plus","clip":1},"49":{"name":"defender","clip":0}}},{"makeup":{"5":{"name":"rocket","clip":2},"7":{"name":"rocket","clip":2},"9":{"name":"plus","clip":1},"30":{"name":"plus","clip":1},"31":{"name":"defender","clip":0},"35":{"name":"plus","clip":1},"36":{"name":"defender","clip":0},"40":{"name":"defender","clip":0},"50":{"name":"rocket","clip":2}}},{"makeup":{"7":{"name":"plus","clip":1},"15":{"name":"defender","clip":0},"20":{"name":"plus","clip":1},"24":{"name":"plus","clip":1},"29":{"name":"rocket","clip":2},"41":{"name":"defender","clip":0},"42":{"name":"defender","clip":0},"46":{"name":"rocket","clip":2},"48":{"name":"rocket","clip":2}}},{"makeup":{"5":{"name":"rocket","clip":2},"10":{"name":"rocket","clip":2},"23":{"name":"defender","clip":0},"27":{"name":"defender","clip":0},"28":{"name":"defender","clip":0},"31":{"name":"plus","clip":1},"32":{"name":"plus","clip":1},"37":{"name":"rocket","clip":2},"40":{"name":"plus","clip":1}}},{"makeup":{"1":{"name":"plus","clip":1},"5":{"name":"rocket","clip":2},"17":{"name":"defender","clip":0},"20":{"name":"rocket","clip":2},"27":{"name":"plus","clip":1},"30":{"name":"defender","clip":0},"35":{"name":"plus","clip":1},"46":{"name":"rocket","clip":2},"51":{"name":"defender","clip":0}}},{"makeup":{"3":{"name":"rocket","clip":2},"4":{"name":"plus","clip":1},"16":{"name":"plus","clip":1},"20":{"name":"rocket","clip":2},"25":{"name":"defender","clip":0},"29":{"name":"defender","clip":0},"46":{"name":"plus","clip":1},"48":{"name":"defender","clip":0},"51":{"name":"rocket","clip":2}}},{"makeup":{"3":{"name":"defender","clip":0},"10":{"name":"rocket","clip":2},"19":{"name":"rocket","clip":2},"22":{"name":"plus","clip":1},"29":{"name":"rocket","clip":2},"30":{"name":"defender","clip":0},"32":{"name":"defender","clip":0},"40":{"name":"plus","clip":1},"42":{"name":"plus","clip":1}}},{"makeup":{"17":{"name":"plus","clip":1},"27":{"name":"defender","clip":0},"31":{"name":"rocket","clip":2},"35":{"name":"rocket","clip":2},"38":{"name":"defender","clip":0},"40":{"name":"defender","clip":0},"45":{"name":"plus","clip":1},"49":{"name":"rocket","clip":2},"51":{"name":"plus","clip":1}}}];
}
