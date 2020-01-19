import React, { Component } from 'react'
import Panzoom from '@panzoom/panzoom'
import CST from '../config/CST'

export default class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        const elem = document.getElementById('map')
        const panzoom = Panzoom(elem, CST.PANZOOM)

        this.setState({panzoom: panzoom})
    }

    handleZoomIn() {
        const panzoom = this.state.panzoom
        panzoom.zoomIn()

        this.setState({panzoom: panzoom})
    }

    handleZoomOut() {
        const panzoom = this.state.panzoom
        panzoom.zoomOut()

        this.setState({panzoom: panzoom})
    }

    render() {
        return (
            <div className="map-wrapper" id="map-wrapper">
                <div className="zoom">
                    <button onClick={() => this.handleZoomIn()}>+</button>
                    <button onClick={() => this.handleZoomOut()}>-</button>
                </div>

                <svg id="map" viewBox="0 0 1519 1384">
                    <g id="seats_bg" className="seats_bg" transform="translate(26.000000, 277.000000)">
                        <path d="M105.9,611.2 L39.7,641.5 C36.6,642.9 32.8,641.4 31.6,638.2 C14.6,595.3 5.5,556.9 0.4,527.7 C-2.84772206e-14,525.3 1,522.9 3.1,521.6 C17.5,512.5 31.9,503.3 46.3,494.2 C49.4,492.2 53.6,493.5 55.1,496.9 C58.5,504.8 62.7,514.3 67.7,525 C73.1,536.6 86.1,564.3 103.7,594.3 C104.9,596.3 106.5,599.1 108.6,602.5 C110.5,605.6 109.2,609.7 105.9,611.2 Z"></path>
                        <path d="M192.5,722.9 L128.9,788 C126.4,790.6 122.2,790.4 119.9,787.6 C97.2,760.1 73.2,725.9 51.6,683 C47,673.9 42.8,664.9 39,656 C37.7,653 39,649.5 42,648.1 L111.1,616.5 C113.8,615.3 117,616.2 118.7,618.7 C129.9,635.9 146.3,659.6 167.6,685.7 C176,695.9 184.3,705.6 192.6,714.7 C194.8,717 194.7,720.6 192.5,722.9 Z"></path>
                        <path d="M317.9,833.2 L253.4,906.9 C251.3,909.3 247.7,909.6 245.2,907.7 C208.1,879.4 183.5,855.5 173,845 C161.3,833.3 147.4,819.3 132.5,802.4 C130.4,800 130.5,796.4 132.7,794.2 L196.8,728.5 C199.2,726.1 203.1,726.1 205.5,728.6 C250.1,775.5 288.6,804.3 301.7,813.8 C304.1,815.5 309.2,819.3 316.7,824.4 C319.7,826.3 320.3,830.5 317.9,833.2 Z"></path>
                        <path d="M457.3,900.2 L410.7,1003.9 C410.7,1003.9 410.6,1003.9 410.6,1003.9 C410.6,1003.9 410.6,1003.9 410.6,1003.9 C371.8,987.3 345.5,972.8 336.4,967.7 C307.8,951.6 282.5,935 260.8,919.3 C257.9,917.2 257.5,913.1 259.8,910.4 L325,835.9 C327,833.7 330.3,833.2 332.8,834.8 C351.2,846.6 376.6,861.7 407.1,877.1 C424.4,885.8 441.2,893.4 457.4,900.2 C457.3,900.1 457.3,900.1 457.3,900.2 L457.3,900.2 Z"></path>
                        <path d="M1365.2,611.2 L1431.4,641.5 C1434.5,642.9 1438.3,641.4 1439.5,638.2 C1456.5,595.3 1465.6,556.9 1470.7,527.7 C1471.1,525.3 1470.1,522.9 1468,521.6 C1453.6,512.5 1439.2,503.3 1424.8,494.2 C1421.7,492.2 1417.5,493.5 1416,496.9 C1412.6,504.8 1408.4,514.3 1403.4,525 C1398,536.6 1385,564.3 1367.4,594.3 C1366.2,596.3 1364.6,599.1 1362.5,602.5 C1360.7,605.6 1361.9,609.7 1365.2,611.2 Z"></path>
                        <path d="M1278.7,722.9 L1342.3,788 C1344.8,790.6 1349,790.4 1351.3,787.6 C1374,760.1 1398,725.9 1419.6,683 C1424.2,673.9 1428.4,664.9 1432.2,656 C1433.5,653 1432.2,649.5 1429.2,648.1 L1360.1,616.5 C1357.4,615.3 1354.2,616.2 1352.5,618.7 C1341.3,635.9 1324.9,659.6 1303.6,685.7 C1295.2,695.9 1286.9,705.6 1278.6,714.7 C1276.4,717 1276.5,720.6 1278.7,722.9 Z"></path>
                        <path d="M1153.3,833.2 L1217.8,906.9 C1219.9,909.3 1223.5,909.6 1226,907.7 C1263.1,879.4 1287.7,855.5 1298.2,845 C1309.9,833.3 1323.8,819.3 1338.7,802.4 C1340.8,800 1340.7,796.4 1338.5,794.2 L1274.4,728.5 C1272,726.1 1268.1,726.1 1265.7,728.6 C1221.1,775.5 1182.6,804.3 1169.5,813.8 C1167.1,815.5 1162,819.3 1154.5,824.4 C1151.4,826.3 1150.9,830.5 1153.3,833.2 Z"></path>
                        <path d="M1013.9,900.2 L1060.5,1003.9 C1060.5,1003.9 1060.6,1003.9 1060.6,1003.9 C1060.6,1003.9 1060.6,1003.9 1060.6,1003.9 C1099.4,987.3 1125.7,972.8 1134.8,967.7 C1163.4,951.6 1188.7,935 1210.4,919.3 C1213.3,917.2 1213.7,913.1 1211.4,910.4 L1146.2,835.9 C1144.2,833.7 1140.9,833.2 1138.4,834.8 C1120,846.6 1094.6,861.7 1064.1,877.1 C1046.8,885.8 1030,893.4 1013.8,900.2 C1013.9,900.1 1013.9,900.1 1013.9,900.2 L1013.9,900.2 Z"></path>
                        <path d="M1009.8,908.1 C1008.5,905.2 1005.1,903.8 1002.1,905 C924.2,936.2 863.5,946.7 844.4,949.7 C799.1,956.9 760.6,958.3 735.6,958.4 C710.6,958.4 672.1,956.9 626.8,949.7 C607.7,946.7 547,936.2 469.1,905 C466.1,903.8 462.7,905.2 461.4,908.1 L419.7,1001 C418.3,1004.1 419.7,1007.7 422.8,1009 C449,1020.1 480.1,1031 514.9,1040.9 C589.2,1062.1 645,1067.2 659.4,1068.3 C690.2,1070.8 716.5,1072.9 735.5,1072.3 C754.5,1072.9 780.9,1070.8 811.7,1068.3 C826.1,1067.1 882,1062 956.3,1040.9 C991.1,1031 1022.2,1020.1 1048.4,1009 C1051.5,1007.7 1052.9,1004.1 1051.5,1001 L1009.8,908.1 Z"></path>
                        <path d="M132.3,346.1 L65.9,373.5 C62.7,374.8 59.1,373.2 57.9,369.9 C35.5,307.1 29.9,259.8 28.7,248.5 C26.8,231.5 26.1,216.8 25.8,205.3 C25.7,201.9 28.5,199 32,199.1 C51.7,199.5 71.4,199.9 91,200.3 C94,200.4 96.5,202.6 96.9,205.5 C97.7,211.2 98.7,218 100.1,225.8 C100.1,225.8 106.9,264 120.3,300.9 C125.1,314.2 130.2,326.4 135.6,337.8 C136.9,341.1 135.4,344.8 132.3,346.1 Z"></path>
                        <path d="M197,447.6 L133.6,504.1 C130.9,506.5 126.6,506 124.5,502.9 C96.8,460.8 81.6,427.8 76.5,416.5 C72.1,406.8 68.1,397.2 64.5,388 C63.3,384.9 64.8,381.5 67.8,380.2 L136,352 C138.9,350.8 142.2,352 143.6,354.8 C158.5,383.3 174.4,406.3 188.9,427 C191.8,431.2 194.8,435.4 197.7,439.6 C199.7,442.1 199.3,445.6 197,447.6 Z"></path>
                        <path d="M329.4,579.5 L267,652.9 C264.8,655.4 261.1,655.7 258.5,653.6 C242.2,640 222.2,621.9 201,599.6 C174.7,571.9 153,544.2 135.4,519.1 C133.6,516.6 134.1,513.2 136.3,511.1 L200.1,454.2 C202.8,451.8 206.9,452.3 209,455.1 C229.3,482.8 252.6,511 286.5,539.5 C300.5,551.3 314.4,561.5 328,570.5 C331.2,572.5 331.8,576.7 329.4,579.5 Z"></path>
                        <path d="M468.2,641.7 L424.2,747.3 C422.9,750.5 419.1,751.9 416,750.4 C404.9,744.9 393.8,739.2 382.2,733.1 C352.9,717.8 327,704.2 295.4,682.1 C291.5,679.4 283.8,673.9 273.5,665.8 C270.8,663.7 270.4,659.7 272.6,657.1 L336.6,581.9 C338.5,579.7 341.8,579.1 344.3,580.6 C384.2,604.5 420.8,618 448.7,628 C454.1,630 459.4,631.8 464.7,633.5 C467.9,634.7 469.6,638.4 468.2,641.7 Z"></path>
                        <path d="M729,683.3 L729,726.4 C729,729.9 726,732.7 722.4,732.4 C674.5,728.3 628.9,724.1 580.7,720 C577.7,719.7 575,721.7 574.3,724.6 C568.9,746.6 564.6,768.7 559.2,790.7 C558.4,793.8 555.4,795.7 552.3,795.2 C534.5,792.1 511.2,787 483.7,778.1 C464.9,772 448.7,765.6 433.4,758.6 C430.4,757.3 429.1,753.8 430.3,750.8 L475.3,642.8 C476.5,640 479.6,638.4 482.6,639.3 C526.6,652.4 565,658.5 613.1,665.6 C658.8,672.4 695.1,675.6 723.3,677.3 C726.5,677.4 729,680.1 729,683.3 Z"></path>
                        <path d="M1339.4,346.1 L1405.8,373.5 C1409,374.8 1412.6,373.2 1413.8,369.9 C1436.2,307.1 1441.8,259.8 1443,248.5 C1444.9,231.5 1445.6,216.8 1445.9,205.3 C1446,201.9 1443.2,199 1439.7,199.1 C1420,199.5 1400.3,199.9 1380.7,200.3 C1377.7,200.4 1375.2,202.6 1374.8,205.5 C1374,211.2 1373,218 1371.6,225.8 C1371.6,225.8 1364.8,264 1351.4,300.9 C1346.6,314.2 1341.5,326.4 1336.1,337.8 C1334.7,341.1 1336.2,344.8 1339.4,346.1 Z"></path>
                        <path d="M1274.6,447.6 L1338,504.1 C1340.7,506.5 1345,506 1347.1,502.9 C1374.8,460.8 1390,427.8 1395.1,416.5 C1399.5,406.8 1403.5,397.2 1407.1,388 C1408.3,384.9 1406.8,381.5 1403.8,380.2 L1335.6,352 C1332.7,350.8 1329.4,352 1328,354.8 C1313.1,383.3 1297.2,406.3 1282.7,427 C1279.8,431.2 1276.8,435.4 1273.9,439.6 C1271.9,442.1 1272.3,445.6 1274.6,447.6 Z"></path>
                        <path d="M1142.2,579.5 L1204.7,652.9 C1206.9,655.4 1210.6,655.7 1213.2,653.6 C1229.5,640 1249.5,621.9 1270.7,599.6 C1297,571.9 1318.7,544.2 1336.3,519.1 C1338.1,516.6 1337.6,513.2 1335.4,511.1 L1271.6,454.2 C1268.9,451.8 1264.8,452.3 1262.7,455.1 C1242.4,482.8 1219.1,511 1185.2,539.5 C1171.2,551.3 1157.3,561.5 1143.7,570.5 C1140.4,572.5 1139.8,576.7 1142.2,579.5 Z"></path>
                        <path d="M1003.4,641.7 L1047.4,747.3 C1048.7,750.5 1052.5,751.9 1055.6,750.4 C1066.7,744.9 1077.8,739.2 1089.4,733.1 C1118.7,717.8 1144.6,704.2 1176.2,682.1 C1180.1,679.4 1187.8,673.9 1198.1,665.8 C1200.8,663.7 1201.2,659.7 1199,657.1 L1135,581.9 C1133.1,579.7 1129.8,579.1 1127.3,580.6 C1087.4,604.5 1050.8,618 1022.9,628 C1017.5,630 1012.2,631.8 1006.9,633.5 C1003.7,634.7 1002,638.4 1003.4,641.7 Z"></path>
                        <path d="M743,683.3 L743,726.4 C743,729.9 746,732.7 749.6,732.4 C797.5,728.3 842.9,724.1 891.1,720 C894.1,719.7 896.8,721.7 897.5,724.6 C902.9,746.6 907.1,768.6 912.6,790.7 C913.4,793.8 916.4,795.7 919.5,795.2 C937.3,792.1 960.5,787 988,778.1 C1006.8,772 1023,765.6 1038.3,758.6 C1041.3,757.3 1042.6,753.8 1041.4,750.8 L996.4,642.8 C995.2,640 992.1,638.5 989.1,639.3 C945.1,652.4 906.9,658.5 858.8,665.6 C813.1,672.4 777,675.6 748.8,677.3 C745.5,677.4 743,680.1 743,683.3 Z"></path>
                        <path d="M991.2,464.7 L1009.8,517 C1010.8,519.7 1009.7,522.7 1007.2,524.2 C990,534.6 964,548.7 931.6,561.7 C889.1,578.7 855.9,585.5 848.3,587 C829.6,590.7 813.1,592.7 800,593.9 C796.8,594.2 794,591.9 793.5,588.8 C791.2,572.9 788.9,556.9 786.5,541 C786,537.7 788.3,534.7 791.5,534.2 C831.2,528 891.1,513.8 955.6,477.7 C964.9,472.5 973.8,467.2 982.2,461.7 C985.5,459.6 989.9,461.1 991.2,464.7 Z"></path>
                        <path d="M1092.6,372.9 L1135.2,404.2 C1138,406.3 1138.5,410.3 1136.3,412.9 C1127.6,423.2 1117.9,434 1107.1,445 C1070.3,482.2 1037.1,505.1 1025.1,513 C1024.8,513.2 1024.4,513.4 1024.1,513.7 C1020.8,515.9 1016.4,514.4 1015.1,510.7 L996.3,457.9 C995.4,455.3 996.3,452.5 998.5,450.9 C1039.4,422.2 1068,392.9 1084.6,373.9 C1086.5,371.5 1090,371.1 1092.6,372.9 Z"></path>
                        <path d="M1156.9,273 L1203.2,298.7 C1206,300.3 1207.1,303.8 1205.7,306.7 C1199,320.2 1191.3,334.5 1182.3,349 C1174.9,361 1163.8,378.2 1148.3,397.9 C1146.3,400.5 1142.6,401 1140,399 L1097.6,367.9 C1094.8,365.9 1094.3,362 1096.4,359.3 C1097.1,358.4 1097.7,357.6 1098.2,356.9 C1106.5,346.2 1128,317.6 1148.4,275.6 C1150,272.6 1153.8,271.4 1156.9,273 Z"></path>
                        <path d="M1190.6,171.5 L1242.3,184.4 C1245.5,185.2 1247.4,188.4 1246.7,191.6 C1245.8,195.8 1244.8,200.1 1243.7,204.4 C1240.4,217.6 1232,249.3 1214,289.3 C1212.6,292.5 1208.7,293.8 1205.6,292.1 L1159.1,266.3 C1156.4,264.8 1155.2,261.5 1156.5,258.6 C1166.9,234.7 1176.5,207.3 1183.1,177.1 C1183.2,176.8 1183.2,176.5 1183.3,176.2 C1183.9,172.7 1187.3,170.7 1190.6,171.5 Z"></path>
                        <path d="M1243,177.4 L1191.2,164.5 C1188.1,163.7 1186.2,160.7 1186.7,157.6 C1193.9,115.2 1193.2,81.5 1192.9,72.4 C1192.3,51.4 1190.2,33.2 1187.9,18.8 C1187.4,15.6 1189.5,12.6 1192.7,11.9 C1210.1,8.5 1227.5,5 1244.8,1.6 C1248.2,0.9 1251.4,3.2 1251.9,6.6 C1258.2,47.1 1262.4,105.3 1250.3,172.6 C1249.8,176 1246.4,178.2 1243,177.4 Z"></path>
                        <path d="M280.1,169 L234.4,179.4 C231.1,180.2 227.8,178 227.1,174.7 C227.1,174.6 227.1,174.5 227,174.4 C216,116.4 217.4,70.4 218.3,51.7 C219.2,33.6 221,17.9 222.8,5.5 C223.3,2.3 226.2,5.55111512e-17 229.4,0.4 C245.3,2.2 261.3,4 277.2,5.8 C280.4,6.2 282.8,9 282.6,12.2 C281.8,23.5 280.4,37.3 280,55.1 C279.4,75.3 280.2,88 280.3,100.4 C280.5,116.2 280.9,138.2 284.6,162.2 C285.2,165.3 283.2,168.3 280.1,169 Z"></path>
                        <path d="M315.1,266 L270.1,291 C267,292.7 263,291.4 261.6,288.1 C253,268.1 240.4,235.2 231,193.5 C230.3,190.2 232.3,187 235.6,186.3 L281,176 C284.2,175.3 287.5,177.3 288.2,180.5 C293.6,203.8 301.3,221.4 311.7,245 C313.7,249.5 315.7,253.9 317.7,258.1 C319,261 317.9,264.4 315.1,266 Z"></path>
                        <path d="M365.9,351.5 L322.6,381.8 C319.9,383.7 316.2,383.1 314.2,380.4 C293.3,351.3 279,325 269.7,305.7 C269.7,305.7 269.7,305.7 269.7,305.7 C268.3,302.8 269.4,299.4 272.2,297.8 L317.7,272.6 C320.7,270.9 324.5,272.1 326,275.1 C341.3,305 354.8,325.1 358.4,330.3 C361.4,334.7 364.4,338.9 367.3,343 C369.3,345.8 368.6,349.6 365.9,351.5 Z"></path>
                        <path d="M474.8,456.6 L449.5,502.3 C447.7,505.5 443.6,506.4 440.7,504.2 C434.1,499.4 428.3,494.9 423.1,491 C405.2,477.3 374.1,453 340.4,413.7 C335.3,407.7 330.4,401.7 325.8,395.8 C323.7,393.1 324.3,389.1 327.1,387.1 L370.4,356.8 C373,355 376.6,355.5 378.6,358 C405.4,392.1 429.3,413.6 437,420.3 C449.5,431.3 461.7,440.7 473,448.8 C475.5,450.6 476.2,454 474.8,456.6 Z"></path>
                        <path d="M689.4,544 C685.7,559.1 682,574.1 678.2,589.2 C677.5,592.1 674.7,594.1 671.7,593.8 C655.5,592 635.8,588.9 613.6,583.7 C571.1,573.7 539.8,560.5 527.6,555 C498.6,542.1 475.1,528.1 456.3,515.4 C453.7,513.6 452.9,510.2 454.4,507.5 L479.9,461.6 C481.6,458.5 485.5,457.6 488.5,459.5 C505,470.1 519,477.6 529,483 C581.2,511 625.8,523.5 645,528.3 C660.3,532.2 673.8,534.8 684.6,536.6 C688,537.2 690.3,540.6 689.4,544 Z"></path>
                    </g>

                    <g id="seats" className="seats" transform="translate(62.000000, 178.000000)">
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-16" transform="translate(952.373321, 1099.023239)">
                            <circle className="seat_cycle" id="b5c-4-16" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-16">
                                <tspan x="4.37332125" y="14.5767612">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-15" transform="translate(929.154621, 1104.664239)">
                            <circle className="seat_cycle" id="b5c-4-15" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-15">
                                <tspan x="4.15462125" y="14.9357612">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-14" transform="translate(905.904151, 1110.225929)">
                            <circle className="seat_cycle" id="b5c-4-14" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-14">
                                <tspan x="3.90415125" y="15.3740712">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-13" transform="translate(882.693051, 1115.850229)">
                            <circle className="seat_cycle" id="b5c-4-13" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-13">
                                <tspan x="3.69305125" y="14.7497712">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-12" transform="translate(859.255801, 1121.482379)">
                            <circle className="seat_cycle" id="b5c-4-12" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-12">
                                <tspan x="4.25580125" y="15.1176212">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-11" transform="translate(836.038401, 1127.120479)">
                            <circle className="seat_cycle" id="b5c-4-11" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-11">
                                <tspan x="4.03840125" y="15.4795212">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-10" transform="translate(812.816501, 1132.768379)">
                            <circle className="seat_cycle" id="b5c-4-10" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-10">
                                <tspan x="3.81650125" y="14.8316212">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-9" transform="translate(789.571131, 1138.319269)">
                            <circle className="seat_cycle" id="b5c-4-9" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-9">
                                <tspan x="7.57113125" y="15.2807312">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-14" transform="translate(945.947481, 1072.574919)">
                            <circle className="seat_cycle" id="b5c-3-14" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-14">
                                <tspan x="3.94748125" y="15.0250812">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-13" transform="translate(922.728581, 1078.216319)">
                            <circle className="seat_cycle" id="b5c-3-13" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-13">
                                <tspan x="3.72858125" y="15.3836812">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-12" transform="translate(899.509581, 1083.857819)">
                            <circle className="seat_cycle" id="b5c-3-12" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-12">
                                <tspan x="3.50958125" y="14.7421812">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-11" transform="translate(876.267211, 1089.401909)">
                            <circle className="seat_cycle" id="b5c-3-11" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-11">
                                <tspan x="4.26721125" y="15.1980912">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-10" transform="translate(852.829961, 1095.034059)">
                            <circle className="seat_cycle" id="b5c-3-10" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-10">
                                <tspan x="3.82996125" y="15.5659412">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-9" transform="translate(829.612761, 1100.671659)">
                            <circle className="seat_cycle" id="b5c-3-9" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-9">
                                <tspan x="7.61276125" y="14.9283412">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-8" transform="translate(806.382761, 1106.337159)">
                            <circle className="seat_cycle" id="b5c-3-8" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-8">
                                <tspan x="7.38276125" y="15.2628412">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-14" transform="translate(939.618851, 1046.103229)">
                            <circle className="seat_cycle" id="b5c-2-14" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-14">
                                <tspan x="3.61885125" y="15.4967712">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-13" transform="translate(916.400151, 1051.744029)">
                            <circle className="seat_cycle" id="b5c-2-13" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-13">
                                <tspan x="3.40015125" y="14.8559712">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-12" transform="translate(893.075941, 1057.426599)">
                            <circle className="seat_cycle" id="b5c-2-12" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-12">
                                <tspan x="4.07594125" y="15.1734012">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-11" transform="translate(869.841371, 1062.953689)">
                            <circle className="seat_cycle" id="b5c-2-11" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-11">
                                <tspan x="4.84137125" y="14.6463112">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-10" transform="translate(846.524701, 1068.659679)">
                            <circle className="seat_cycle" id="b5c-2-10" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-10">
                                <tspan x="4.52470125" y="14.9403212">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-9" transform="translate(823.283831, 1074.200669)">
                            <circle className="seat_cycle" id="b5c-2-9" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-9">
                                <tspan x="7.28383125" y="14.3993312">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-8" transform="translate(800.061831, 1079.848569)">
                            <circle className="seat_cycle" id="b5c-2-8" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-8">
                                <tspan x="8.06183125" y="14.7514312">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-16" transform="translate(956.435381, 1014.110619)">
                            <circle className="seat_cycle" id="b5c-1-16" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-16">
                                <tspan x="4.43538125" y="15.4893812">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-15" transform="translate(933.216481, 1019.752119)">
                            <circle className="seat_cycle" id="b5c-1-15" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-15">
                                <tspan x="4.21648125" y="14.8478812">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-14" transform="translate(909.974011, 1025.296309)">
                            <circle className="seat_cycle" id="b5c-1-14" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-14">
                                <tspan x="3.97401125" y="15.3036912">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-13" transform="translate(886.755111, 1030.937709)">
                            <circle className="seat_cycle" id="b5c-1-13" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-13">
                                <tspan x="3.75511125" y="15.6622912">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-12" transform="translate(863.536211, 1036.579109)">
                            <circle className="seat_cycle" id="b5c-1-12" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-12">
                                <tspan x="3.53621125" y="15.0208912">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-11" transform="translate(840.098861, 1042.211359)">
                            <circle className="seat_cycle" id="b5c-1-11" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-11">
                                <tspan x="5.09886125" y="15.3886412">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-10" transform="translate(816.858191, 1047.751749)">
                            <circle className="seat_cycle" id="b5c-1-10" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-10">
                                <tspan x="3.85819125" y="14.8482512">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-9" transform="translate(793.628191, 1053.417449)">
                            <circle className="seat_cycle" id="b5c-1-9" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-9">
                                <tspan x="7.62819125" y="14.1825512">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-4-3" transform="translate(1069.357179, 1042.258081)">
                            <circle className="seat_cycle" id="b6c-4-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-4-3">
                                <tspan x="9.3571788" y="17.3419188">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-4-2" transform="translate(1047.891839, 1052.944301)">
                            <circle className="seat_cycle" id="b6c-4-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-4-2">
                                <tspan x="9.8918388" y="16.6556988">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-4-1" transform="translate(1026.519259, 1063.553841)">
                            <circle className="seat_cycle" id="b6c-4-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-4-1">
                                <tspan x="9.5192588" y="17.0461588">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-3-4" transform="translate(1078.666719, 1007.255461)">
                            <circle className="seat_cycle" id="b4c-3-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-3-4">
                                <tspan x="9.6667188" y="17.3445388">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-3-3" transform="translate(1057.203079, 1017.925281)">
                            <circle className="seat_cycle" id="b6c-3-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-3-3">
                                <tspan x="10.2030788" y="16.6747188">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-3-2" transform="translate(1035.828899, 1028.550621)">
                            <circle className="seat_cycle" id="b6c-3-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-3-2">
                                <tspan x="9.8288988" y="17.0493788">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-3-1" transform="translate(1014.454819, 1039.176061)">
                            <circle className="seat_cycle" id="b6c-3-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-3-1">
                                <tspan x="9.4548188" y="17.4239388">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-2-4" transform="translate(1066.512719, 982.922161)">
                            <circle className="seat_cycle" id="b6c-2-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-2-4">
                                <tspan x="9.5127188" y="17.6778388">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-2-3" transform="translate(1045.138639, 993.547201)">
                            <circle className="seat_cycle" id="b6c-2-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-2-3">
                                <tspan x="10.1386388" y="17.0527988">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-2-2" transform="translate(1023.762959, 1004.188841)">
                            <circle className="seat_cycle" id="b6c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-2-2">
                                <tspan x="9.7629588" y="17.4111588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-2-1" transform="translate(1002.300819, 1014.842761)">
                            <circle className="seat_cycle" id="b6c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-2-1">
                                <tspan x="9.3008188" y="17.7572388">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-1-3" transform="translate(1033.074199, 969.169821)">
                            <circle className="seat_cycle" id="b6c-1-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-1-3">
                                <tspan x="9.0741988" y="17.4301788">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-1-2" transform="translate(1011.610559, 979.839741)">
                            <circle className="seat_cycle" id="b6c-1-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-1-2">
                                <tspan x="9.6105588" y="16.7602588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b6-1-1" transform="translate(990.236379, 990.465081)">
                            <circle className="seat_cycle" id="b6c-1-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b6n-1-1">
                                <tspan x="9.2363788" y="17.1349188">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-3-4" transform="translate(1252.880039, 886.163101)">
                            <circle className="seat_cycle" id="b7c-3-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-3-4">
                                <tspan x="9.8800388" y="17.4368988">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-3-3" transform="translate(1234.776119, 904.067661)">
                            <circle className="seat_cycle" id="b7c-3-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-3-3">
                                <tspan x="9.7761188" y="17.5323388">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-3-2" transform="translate(1217.170859, 920.394141)">
                            <circle className="seat_cycle" id="b7c-3-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-3-2">
                                <tspan x="10.1708588" y="17.2058588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-3-1" transform="translate(1197.765359, 937.184241)">
                            <circle className="seat_cycle" id="b7c-3-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-3-1">
                                <tspan x="9.7653588" y="17.4157588">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-2-4" transform="translate(1239.478119, 857.663861)">
                            <circle className="seat_cycle" id="b7c-2-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-2-4">
                                <tspan x="9.4781188" y="16.9361388">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-2-3" transform="translate(1221.374199, 875.568421)">
                            <circle className="seat_cycle" id="b7c-2-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-2-3">
                                <tspan x="9.3741988" y="17.0315788">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-2-2" transform="translate(1203.768939, 891.894901)">
                            <circle className="seat_cycle" id="b7c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-2-2">
                                <tspan x="9.7689388" y="17.7050988">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-2-1" transform="translate(1184.363439, 908.685001)">
                            <circle className="seat_cycle" id="b7c-2-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-2-1">
                                <tspan x="9.3634388" y="16.9149988">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-1-4" transform="translate(1222.798079, 832.261181)">
                            <circle className="seat_cycle" id="b7c-1-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-1-4">
                                <tspan x="9.7980788" y="17.3388188">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-1-3" transform="translate(1204.694059, 850.165641)">
                            <circle className="seat_cycle" id="b7c-1-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-1-3">
                                <tspan x="9.6940588" y="17.4343588">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-1-2" transform="translate(1187.088899, 866.492221)">
                            <circle className="seat_cycle" id="b7c-1-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-1-2">
                                <tspan x="9.0888988" y="17.1077788">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b7-1-1" transform="translate(1167.683399, 883.282321)">
                            <circle className="seat_cycle" id="b7c-1-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b7n-1-1">
                                <tspan x="9.6833988" y="17.3176788">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-3-4" transform="translate(1338.695199, 780.814921)">
                            <circle className="seat_cycle" id="b8c-3-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-3-4">
                                <tspan x="9.6951988" y="16.7850788">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-3-3" transform="translate(1324.650859, 800.838941)">
                            <circle className="seat_cycle" id="b8c-3-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-3-3">
                                <tspan x="9.6508588" y="16.7610588">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-3-2" transform="translate(1309.642899, 820.964221)">
                            <circle className="seat_cycle" id="b8c-3-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-3-2">
                                <tspan x="9.6428988" y="17.6357788">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-3-1" transform="translate(1293.700839, 840.857301)">
                            <circle className="seat_cycle" id="b8c-3-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-3-1">
                                <tspan x="9.7008388" y="17.7426988">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-2-4" transform="translate(1320.427699, 757.936021)">
                            <circle className="seat_cycle" id="b8c-2-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-2-4">
                                <tspan x="9.4276988" y="16.6639788">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-2-3" transform="translate(1306.383359, 777.960041)">
                            <circle className="seat_cycle" id="b8c-2-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-2-3">
                                <tspan x="9.3833588" y="16.6399588">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-2-2" transform="translate(1291.375399, 798.085221)">
                            <circle className="seat_cycle" id="b8c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-2-2">
                                <tspan x="9.3753988" y="17.5147788">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-2-1" transform="translate(1275.433339, 817.978401)">
                            <circle className="seat_cycle" id="b8c-2-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-2-1">
                                <tspan x="9.4333388" y="17.6215988">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-1-5" transform="translate(1315.000000, 717.600000)">
                            <circle className="seat_cycle" id="b8c-1-5" transform="translate(12.901120, 12.488560) rotate(-63.588694) translate(-12.901120, -12.488560) " cx="12.90112" cy="12.48856" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-1-5">
                                <tspan x="9" y="16">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-1-4" transform="translate(1300.000000, 736.600000)">
                            <circle className="seat_cycle" id="b8c-1-4" transform="translate(12.699120, 13.023860) rotate(-63.588694) translate(-12.699120, -13.023860) " cx="12.69912" cy="13.02386" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-1-4">
                                <tspan x="9" y="17">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-1-3" transform="translate(1286.000000, 757.600000)">
                            <circle className="seat_cycle" id="b8c-1-3" transform="translate(12.698980, 12.137540) rotate(-63.588694) translate(-12.698980, -12.137540) " cx="12.69898" cy="12.13754" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-1-3">
                                <tspan x="9" y="17">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-1-2" transform="translate(1271.000000, 777.600000)">
                            <circle className="seat_cycle" id="b8c-1-2" transform="translate(12.707040, 12.262720) rotate(-63.588694) translate(-12.707040, -12.262720) " cx="12.70704" cy="12.26272" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-1-2">
                                <tspan x="9" y="17">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b8-1-1" transform="translate(1255.098639, 797.088801)">
                            <circle className="seat_cycle" id="b8c-1-1" transform="translate(12.658179, 12.622619) rotate(-63.588694) translate(-12.658179, -12.622619) " cx="12.6581788" cy="12.6226188" r="8.9997588"></circle>
                            <text className="seat_text" id="b8n-1-1">
                                <tspan x="9.0986388" y="17.5111988">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b9-1-5" transform="translate(1375.000000, 605.600000)">
                            <circle className="seat_cycle" id="b9c-1-5" transform="translate(13.008520, 12.658260) rotate(-63.588694) translate(-13.008520, -12.658260) " cx="13.00852" cy="12.65826" r="8.9997588"></circle>
                            <text className="seat_text" id="b9n-1-5">
                                <tspan x="9" y="17">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b9-1-4" transform="translate(1366.000000, 625.600000)">
                            <circle className="seat_cycle" id="b9c-1-4" transform="translate(12.865420, 12.494360) rotate(-63.588694) translate(-12.865420, -12.494360) " cx="12.86542" cy="12.49436" r="8.9997588"></circle>
                            <text className="seat_text" id="b9n-1-4">
                                <tspan x="9" y="17">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b9-1-3" transform="translate(1356.000000, 646.600000)">
                            <circle className="seat_cycle" id="b9c-1-3" transform="translate(13.055080, 12.495440) rotate(-63.588694) translate(-13.055080, -12.495440) " cx="13.05508" cy="12.49544" r="8.9997588"></circle>
                            <text className="seat_text" id="b9n-1-3">
                                <tspan x="9" y="17">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b9-1-2" transform="translate(1344.000000, 667.600000)">
                            <circle className="seat_cycle" id="b9c-1-2" transform="translate(12.135020, 12.579760) rotate(-63.588694) translate(-12.135020, -12.579760) " cx="12.13502" cy="12.57976" r="8.9997588"></circle>
                            <text className="seat_text" id="b9n-1-2">
                                <tspan x="8" y="17">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b9-1-1" transform="translate(1331.991239, 690.258501)">
                            <circle className="seat_cycle" id="b9c-1-1" transform="translate(12.743559, 12.086159) rotate(-63.588694) translate(-12.743559, -12.086159) " cx="12.7435588" cy="12.0861588" r="8.9997588"></circle>
                            <text className="seat_text" id="b9n-1-1">
                                <tspan x="9.9912388" y="16.3414988">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-4-3" transform="translate(963.000000, 838.300000)">
                            <circle className="seat_cycle" id="lb7c-4-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-4-3">
                                <tspan x="6" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-4-2" transform="translate(939.000000, 838.300000)">
                            <circle className="seat_cycle" id="lb7c-4-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-4-2">
                                <tspan x="6" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-4-1" transform="translate(915.000000, 838.300000)">
                            <circle className="seat_cycle" id="lb7c-4-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-4-1">
                                <tspan x="6" y="13.3">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-3-3" transform="translate(954.800000, 811.700000)">
                            <circle className="seat_cycle" id="lb7c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-3-3">
                                <tspan x="5.8" y="12.9">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-3-2" transform="translate(930.800000, 811.700000)">
                            <circle className="seat_cycle" id="lb7c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-3-2">
                                <tspan x="5.8" y="12.9">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-3-1" transform="translate(906.800000, 811.700000)">
                            <circle className="seat_cycle" id="lb7c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-3-1">
                                <tspan x="5.8" y="13.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-2-3" transform="translate(946.200000, 785.200000)">
                            <circle className="seat_cycle" id="lb7c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-2-3">
                                <tspan x="5.2" y="13.4">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-2-2" transform="translate(922.200000, 785.200000)">
                            <circle className="seat_cycle" id="lb7c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-2-2">
                                <tspan x="5.2" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-2-1" transform="translate(898.200000, 785.200000)">
                            <circle className="seat_cycle" id="lb7c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-2-1">
                                <tspan x="5.2" y="13.4">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-8" transform="translate(938.000000, 758.600000)">
                            <circle className="seat_cycle" id="lb7c-1-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-8">
                                <tspan x="6" y="13">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-8" transform="translate(914.000000, 758.600000)">
                            <circle className="seat_cycle" id="lb7c-1-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-8">
                                <tspan x="6" y="13">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-7" transform="translate(890.000000, 758.600000)">
                            <circle className="seat_cycle" id="lb7c-1-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-7">
                                <tspan x="6" y="13">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-6" transform="translate(830.600000, 772.900000)">
                            <circle className="seat_cycle" id="lb7c-1-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-6">
                                <tspan x="5.6" y="12.7">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-5" transform="translate(806.200000, 777.800000)">
                            <circle className="seat_cycle" id="lb7c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-5">
                                <tspan x="5.2" y="12.8">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-4" transform="translate(781.700000, 781.900000)">
                            <circle className="seat_cycle" id="lb7c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-4">
                                <tspan x="5.7" y="12.7">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-3" transform="translate(757.300000, 785.000000)">
                            <circle className="seat_cycle" id="lb7c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-3">
                                <tspan x="5.3" y="12.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-2" transform="translate(732.900000, 787.100000)">
                            <circle className="seat_cycle" id="lb7c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-2">
                                <tspan x="5.9" y="12.5">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb7-1-1" transform="translate(708.500000, 788.400000)">
                            <circle className="seat_cycle" id="lb7c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb7n-1-1">
                                <tspan x="5.5" y="13.2">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-4-3" transform="translate(1081.800000, 790.600000)">
                            <circle className="seat_cycle" id="lb8c-4-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-4-3">
                                <tspan x="5.8" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-4-2" transform="translate(1059.000000, 798.900000)">
                            <circle className="seat_cycle" id="lb8c-4-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-4-2">
                                <tspan x="6" y="12.7">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-4-1" transform="translate(1036.200000, 807.100000)">
                            <circle className="seat_cycle" id="lb8c-4-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-4-1">
                                <tspan x="6.2" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-3-3" transform="translate(1067.500000, 767.000000)">
                            <circle className="seat_cycle" id="lb8c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-3-3">
                                <tspan x="5.5" y="12.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-3-2" transform="translate(1044.700000, 775.200000)">
                            <circle className="seat_cycle" id="lb8c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-3-2">
                                <tspan x="5.7" y="12.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-3-1" transform="translate(1021.900000, 783.500000)">
                            <circle className="seat_cycle" id="lb8c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-3-1">
                                <tspan x="5.9" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-2-3" transform="translate(1053.200000, 743.400000)">
                            <circle className="seat_cycle" id="lb8c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-2-3">
                                <tspan x="5.2" y="13.2">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-2-2" transform="translate(1030.400000, 751.600000)">
                            <circle className="seat_cycle" id="lb8c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-2-2">
                                <tspan x="5.4" y="13">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-2-1" transform="translate(1007.600000, 759.800000)">
                            <circle className="seat_cycle" id="lb8c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-2-1">
                                <tspan x="5.6" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-1-3" transform="translate(1037.900000, 718.100000)">
                            <circle className="seat_cycle" id="lb8c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-1-3">
                                <tspan x="4.9" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-1-2" transform="translate(1015.100000, 726.300000)">
                            <circle className="seat_cycle" id="lb8c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-1-2">
                                <tspan x="6.1" y="12.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb8-1-1" transform="translate(992.300000, 734.500000)">
                            <circle className="seat_cycle" id="lb8c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb8n-1-1">
                                <tspan x="6.3" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-3-5" transform="translate(1268.700000, 607.500000)">
                            <circle className="seat_cycle" id="lb9c-3-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-3-5">
                                <tspan x="5.7" y="13.1">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-3-4" transform="translate(1254.100000, 626.100000)">
                            <circle className="seat_cycle" id="lb9c-3-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-3-4">
                                <tspan x="6.1" y="13.5">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-3-3" transform="translate(1238.100000, 644.700000)">
                            <circle className="seat_cycle" id="lb9c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-3-3">
                                <tspan x="5.1" y="13.9">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-3-2" transform="translate(1221.000000, 662.400000)">
                            <circle className="seat_cycle" id="lb9c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-3-2">
                                <tspan x="5" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-3-1" transform="translate(1203.400000, 679.200000)">
                            <circle className="seat_cycle" id="lb9c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-3-1">
                                <tspan x="5.4" y="13.4">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-2-5" transform="translate(1251.100000, 584.800000)">
                            <circle className="seat_cycle" id="lb9c-2-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-2-5">
                                <tspan x="5.1" y="12.8">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-2-4" transform="translate(1236.500000, 603.500000)">
                            <circle className="seat_cycle" id="lb9c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-2-4">
                                <tspan x="5.5" y="13.1">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-2-3" transform="translate(1220.500000, 622.000000)">
                            <circle className="seat_cycle" id="lb9c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-2-3">
                                <tspan x="5.5" y="13.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-2-2" transform="translate(1203.400000, 639.800000)">
                            <circle className="seat_cycle" id="lb9c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-2-2">
                                <tspan x="5.4" y="13.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-2-1" transform="translate(1185.800000, 656.500000)">
                            <circle className="seat_cycle" id="lb9c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-2-1">
                                <tspan x="5.8" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-1-4" transform="translate(1231.300000, 565.100000)">
                            <circle className="seat_cycle" id="lb9c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-1-4">
                                <tspan x="5.3" y="12.5">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-1-3" transform="translate(1216.600000, 583.800000)">
                            <circle className="seat_cycle" id="lb9c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-1-3">
                                <tspan x="5.6" y="13.8">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-1-2" transform="translate(1200.700000, 602.300000)">
                            <circle className="seat_cycle" id="lb9c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-1-2">
                                <tspan x="5.7" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb9-1-1" transform="translate(1183.600000, 620.100000)">
                            <circle className="seat_cycle" id="lb9c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb9n-1-1">
                                <tspan x="5.6" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-3-4" transform="translate(1325.700000, 518.500000)">
                            <circle className="seat_cycle" id="lb10c-3-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-3-4">
                                <tspan x="5.7" y="13.1">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-3-3" transform="translate(1315.100000, 537.300000)">
                            <circle className="seat_cycle" id="lb10c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-3-3">
                                <tspan x="5.1" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-3-2" transform="translate(1303.400000, 556.500000)">
                            <circle className="seat_cycle" id="lb10c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-3-2">
                                <tspan x="5.4" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-3-1" transform="translate(1291.100000, 575.400000)">
                            <circle className="seat_cycle" id="lb10c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-3-1">
                                <tspan x="5.1" y="13.2">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-2-4" transform="translate(1306.800000, 497.800000)">
                            <circle className="seat_cycle" id="lb10c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-2-4">
                                <tspan x="5.8" y="12.8">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-2-3" transform="translate(1296.200000, 516.600000)">
                            <circle className="seat_cycle" id="lb10c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-2-3">
                                <tspan x="5.2" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-2-2" transform="translate(1284.500000, 535.800000)">
                            <circle className="seat_cycle" id="lb10c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-2-2">
                                <tspan x="5.5" y="13.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-2-1" transform="translate(1272.200000, 554.700000)">
                            <circle className="seat_cycle" id="lb10c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-2-1">
                                <tspan x="5.2" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-1-5" transform="translate(1296.700000, 459.700000)">
                            <circle className="seat_cycle" id="lb10c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-1-5">
                                <tspan x="4.7" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-1-4" transform="translate(1286.200000, 479.700000)">
                            <circle className="seat_cycle" id="lb10c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-1-4">
                                <tspan x="5.2" y="12.9">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-1-3" transform="translate(1275.500000, 498.500000)">
                            <circle className="seat_cycle" id="lb10c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-1-3">
                                <tspan x="5.5" y="14.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-1-2" transform="translate(1263.900000, 517.700000)">
                            <circle className="seat_cycle" id="lb10c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-1-2">
                                <tspan x="4.9" y="12.9">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb10-1-1" transform="translate(1251.500000, 536.600000)">
                            <circle className="seat_cycle" id="lb10c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb10n-1-1">
                                <tspan x="5.5" y="13">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-2-3" transform="translate(1354.400000, 380.700000)">
                            <circle className="seat_cycle" id="lb11c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-2-3">
                                <tspan x="5.4" y="12.9">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-2-2" transform="translate(1347.000000, 404.800000)">
                            <circle className="seat_cycle" id="lb11c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-2-2">
                                <tspan x="6" y="13.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-2-1" transform="translate(1338.200000, 429.100000)">
                            <circle className="seat_cycle" id="lb11c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-2-1">
                                <tspan x="5.2" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-1-5" transform="translate(1343.300000, 326.900000)">
                            <circle className="seat_cycle" id="lb11c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-1-5">
                                <tspan x="5.3" y="12.7">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-1-4" transform="translate(1338.500000, 352.000000)">
                            <circle className="seat_cycle" id="lb11c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-1-4">
                                <tspan x="5.5" y="13.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-1-3" transform="translate(1331.200000, 377.100000)">
                            <circle className="seat_cycle" id="lb11c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-1-3">
                                <tspan x="5.2" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-1-2" transform="translate(1322.800000, 401.000000)">
                            <circle className="seat_cycle" id="lb11c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-1-2">
                                <tspan x="5.8" y="13.6">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb11-1-1" transform="translate(1313.000000, 425.100000)">
                            <circle className="seat_cycle" id="lb11c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb11n-1-1">
                                <tspan x="6" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-2-6" transform="translate(930.600000, 602.000000)">
                            <circle className="seat_cycle" id="l6c-2-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-2-6">
                                <tspan x="5.6" y="13.6">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-2-5" transform="translate(906.900000, 614.300000)">
                            <circle className="seat_cycle" id="l6c-2-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-2-5">
                                <tspan x="5.9" y="13.3">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-2-3" transform="translate(883.100000, 625.100000)">
                            <circle className="seat_cycle" id="l6c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-2-4">
                                <tspan x="6.1" y="13.5">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-2-3" transform="translate(806.600000, 650.100000)">
                            <circle className="seat_cycle" id="l6c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-2-3">
                                <tspan x="5.6" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-2-2" transform="translate(782.700000, 655.200000)">
                            <circle className="seat_cycle" id="l6c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-2-2">
                                <tspan x="5.7" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-2-1" transform="translate(758.900000, 659.100000)">
                            <circle className="seat_cycle" id="l6c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-2-1">
                                <tspan x="5.9" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-1-6" transform="translate(935.500000, 573.200000)">
                            <circle className="seat_cycle" id="l6c-1-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-1-6">
                                <tspan x="5.5" y="13.4">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-1-5" transform="translate(911.700000, 586.600000)">
                            <circle className="seat_cycle" id="l6c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-1-5">
                                <tspan x="5.7" y="13">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-1-4" transform="translate(887.700000, 598.500000)">
                            <circle className="seat_cycle" id="l6c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-1-4">
                                <tspan x="5.7" y="13.1">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-1-3" transform="translate(863.900000, 608.600000)">
                            <circle className="seat_cycle" id="l6c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-1-3">
                                <tspan x="5.9" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-1-2" transform="translate(839.600000, 617.400000)">
                            <circle className="seat_cycle" id="l6c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-1-2">
                                <tspan x="5.6" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l6-1-1" transform="translate(816.200000, 624.800000)">
                            <circle className="seat_cycle" id="l6c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l6n-1-1">
                                <tspan x="5.2" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-2-4" transform="translate(1027.700000, 539.100000)">
                            <circle className="seat_cycle" id="l7c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-2-4">
                                <tspan x="5.7" y="12.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-2-3" transform="translate(1011.900000, 553.200000)">
                            <circle className="seat_cycle" id="l7c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-2-3">
                                <tspan x="5.9" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-2-2" transform="translate(995.300000, 567.300000)">
                            <circle className="seat_cycle" id="l7c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-2-2">
                                <tspan x="5.3" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-2-1" transform="translate(977.500000, 581.400000)">
                            <circle className="seat_cycle" id="l7c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-2-1">
                                <tspan x="5.5" y="13.2">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-1-5" transform="translate(1052.100000, 478.000000)">
                            <circle className="seat_cycle" id="l7c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-1-5">
                                <tspan x="6.1" y="12.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-1-4" transform="translate(1038.300000, 494.500000)">
                            <circle className="seat_cycle" id="l7c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-1-4">
                                <tspan x="6.3" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-1-3" transform="translate(1022.500000, 511.500000)">
                            <circle className="seat_cycle" id="l7c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-1-3">
                                <tspan x="5.5" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-1-2" transform="translate(1005.700000, 528.000000)">
                            <circle className="seat_cycle" id="l7c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-1-2">
                                <tspan x="5.7" y="12.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l7-1-1" transform="translate(988.700000, 543.000000)">
                            <circle className="seat_cycle" id="l7c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l7n-1-1">
                                <tspan x="5.7" y="12.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-2-4" transform="translate(1134.800000, 388.800000)">
                            <circle className="seat_cycle" id="l8c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-2-4">
                                <tspan x="5.8" y="12.8">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-2-3" transform="translate(1124.600000, 408.100000)">
                            <circle className="seat_cycle" id="l8c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-2-3">
                                <tspan x="5.6" y="12.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-2-2" transform="translate(1112.800000, 427.500000)">
                            <circle className="seat_cycle" id="l8c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-2-2">
                                <tspan x="5.8" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-2-1" transform="translate(1103.800000, 446.500000)">
                            <circle className="seat_cycle" id="l8c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-2-1">
                                <tspan x="5.8" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-1-5" transform="translate(1114.000000, 380.000000)">
                            <circle className="seat_cycle" id="l8c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-1-5">
                                <tspan x="6" y="12.6">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-1-4" transform="translate(1103.800000, 399.200000)">
                            <circle className="seat_cycle" id="l8c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-1-4">
                                <tspan x="5.8" y="13.4">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-1-3" transform="translate(1092.300000, 418.600000)">
                            <circle className="seat_cycle" id="l8c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-1-3">
                                <tspan x="5.3" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-1-2" transform="translate(1079.400000, 438.200000)">
                            <circle className="seat_cycle" id="l8c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-1-2">
                                <tspan x="5.4" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l8-1-1" transform="translate(1068.400000, 457.200000)">
                            <circle className="seat_cycle" id="l8c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l8n-1-1">
                                <tspan x="5.4" y="13.4">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l9-2-3" transform="translate(1164.600000, 314.400000)">
                            <circle className="seat_cycle" id="l9c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l9n-2-3">
                                <tspan x="5.6" y="12.2">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l9-2-2" transform="translate(1156.400000, 338.400000)">
                            <circle className="seat_cycle" id="l9c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l9n-2-2">
                                <tspan x="5.4" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l9-2-1" transform="translate(1146.900000, 362.500000)">
                            <circle className="seat_cycle" id="l9c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l9n-2-1">
                                <tspan x="5.9" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l9-1-13" transform="translate(1146.500000, 296.100000)">
                            <circle className="seat_cycle" id="l9c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l9n-1-3">
                                <tspan x="5.5" y="12.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l9-1-2" transform="translate(1138.800000, 320.800000)">
                            <circle className="seat_cycle" id="l9c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l9n-1-2">
                                <tspan x="5.8" y="12.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l9-1-1" transform="translate(1129.600000, 345.500000)">
                            <circle className="seat_cycle" id="l9c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l9n-1-1">
                                <tspan x="5.6" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-2-5" transform="translate(1186.100000, 135.400000)">
                            <circle className="seat_cycle" id="l10c-2-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-2-5">
                                <tspan x="5.1" y="13.2">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-2-4" transform="translate(1187.100000, 161.400000)">
                            <circle className="seat_cycle" id="l10c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-2-4">
                                <tspan x="5.1" y="13.2">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-2-3" transform="translate(1186.100000, 185.400000)">
                            <circle className="seat_cycle" id="l10c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-2-3">
                                <tspan x="5.1" y="13.2">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-2-2" transform="translate(1184.600000, 210.300000)">
                            <circle className="seat_cycle" id="l10c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-2-2">
                                <tspan x="5.6" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-2-1" transform="translate(1182.000000, 235.100000)">
                            <circle className="seat_cycle" id="l10c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-2-1">
                                <tspan x="6" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-1-5" transform="translate(1161.900000, 123.000000)">
                            <circle className="seat_cycle" id="l10c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-1-5">
                                <tspan x="4.9" y="13.6">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-1-4" transform="translate(1163.500000, 146.800000)">
                            <circle className="seat_cycle" id="l10c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-1-4">
                                <tspan x="5.5" y="12.8">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-1-3" transform="translate(1164.000000, 172.600000)">
                            <circle className="seat_cycle" id="l10c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-1-3">
                                <tspan x="6" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-1-2" transform="translate(1163.100000, 198.100000)">
                            <circle className="seat_cycle" id="l10c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-1-2">
                                <tspan x="5.1" y="12.5">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l10-1-1" transform="translate(1161.100000, 220.800000)">
                            <circle className="seat_cycle" id="l10c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l10n-1-1">
                                <tspan x="6.1" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-8" transform="translate(589.428869, 1138.719269)">
                            <circle className="seat_cycle" id="b5c-4-8" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-8">
                                <tspan x="7.57113125" y="15.2807312">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-7" transform="translate(566.183499, 1133.168379)">
                            <circle className="seat_cycle" id="b5c-4-7" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-7">
                                <tspan x="7.81650125" y="14.8316212">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-6" transform="translate(542.961599, 1127.520479)">
                            <circle className="seat_cycle" id="b5c-4-6" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-6">
                                <tspan x="8.03840125" y="15.4795212">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-5" transform="translate(519.744199, 1121.882379)">
                            <circle className="seat_cycle" id="b5c-4-5" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-5">
                                <tspan x="8.25580125" y="15.1176212">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-4" transform="translate(496.306949, 1116.250229)">
                            <circle className="seat_cycle" id="b5c-4-4" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-4">
                                <tspan x="7.69305125" y="14.7497712">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-3" transform="translate(473.095849, 1110.625929)">
                            <circle className="seat_cycle" id="b5c-4-3" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-3">
                                <tspan x="7.90415125" y="15.3740712">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-2" transform="translate(449.845379, 1105.064239)">
                            <circle className="seat_cycle" id="b5c-4-2" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-2">
                                <tspan x="8.15462125" y="14.9357612">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-4-1" transform="translate(426.626679, 1099.423239)">
                            <circle className="seat_cycle" id="b5c-4-1" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-4-1">
                                <tspan x="7.37332125" y="14.5767612">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-7" transform="translate(572.617239, 1106.737159)">
                            <circle className="seat_cycle" id="b5c-3-7" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-7">
                                <tspan x="7.38276125" y="15.2628412">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-6" transform="translate(549.387239, 1101.071659)">
                            <circle className="seat_cycle" id="b5c-3-6" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-6">
                                <tspan x="7.61276125" y="14.9283412">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-5" transform="translate(526.170039, 1095.434059)">
                            <circle className="seat_cycle" id="b5c-3-5" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-5">
                                <tspan x="7.82996125" y="14.5659412">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-4" transform="translate(502.732789, 1089.801909)">
                            <circle className="seat_cycle" id="b5c-3-4" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-4">
                                <tspan x="7.26721125" y="15.1980912">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-3" transform="translate(479.490419, 1084.257819)">
                            <circle className="seat_cycle" id="b5c-3-3" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-3">
                                <tspan x="7.50958125" y="14.7421812">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-2" transform="translate(456.271419, 1078.616319)">
                            <circle className="seat_cycle" id="b5c-3-2" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-2">
                                <tspan x="7.72858125" y="14.3836812">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-3-1" transform="translate(433.052519, 1072.974919)">
                            <circle className="seat_cycle" id="b5c-3-1" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-3-1">
                                <tspan x="7.94748125" y="15.0250812">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-7" transform="translate(578.938169, 1080.248569)">
                            <circle className="seat_cycle" id="b5c-2-7" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-7">
                                <tspan x="8.06183125" y="14.7514312">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-6" transform="translate(555.716169, 1074.600669)">
                            <circle className="seat_cycle" id="b5c-2-6" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-6">
                                <tspan x="7.28383125" y="14.3993312">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-5" transform="translate(532.475299, 1069.059679)">
                            <circle className="seat_cycle" id="b5c-2-5" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-5">
                                <tspan x="7.52470125" y="14.9403212">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-4" transform="translate(509.158629, 1063.353689)">
                            <circle className="seat_cycle" id="b5c-2-4" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-4">
                                <tspan x="6.84137125" y="14.6463112">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-3" transform="translate(485.924059, 1057.826599)">
                            <circle className="seat_cycle" id="b5c-2-3" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-3">
                                <tspan x="7.07594125" y="15.1734012">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-2" transform="translate(462.599849, 1052.144029)">
                            <circle className="seat_cycle" id="b5c-2-2" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-2">
                                <tspan x="7.40015125" y="14.8559712">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-2-1" transform="translate(439.381149, 1046.503229)">
                            <circle className="seat_cycle" id="b5c-2-1" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-2-1">
                                <tspan x="7.61885125" y="15.4967712">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-8" transform="translate(585.371809, 1053.817449)">
                            <circle className="seat_cycle" id="b5c-1-8" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-8">
                                <tspan x="7.62819125" y="14.1825512">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-7" transform="translate(562.141809, 1048.151749)">
                            <circle className="seat_cycle" id="b5c-1-7" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-7">
                                <tspan x="7.85819125" y="14.8482512">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-6" transform="translate(538.901139, 1042.611359)">
                            <circle className="seat_cycle" id="b5c-1-6" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-6">
                                <tspan x="8.09886125" y="15.3886412">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-5" transform="translate(515.463789, 1036.979109)">
                            <circle className="seat_cycle" id="b5c-1-5" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-5">
                                <tspan x="7.53621125" y="15.0208912">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-4" transform="translate(492.244889, 1031.337709)">
                            <circle className="seat_cycle" id="b5c-1-4" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-4">
                                <tspan x="7.75511125" y="15.6622912">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-3" transform="translate(469.025989, 1025.696309)">
                            <circle className="seat_cycle" id="b5c-1-3" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-3">
                                <tspan x="7.97401125" y="15.3036912">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-2" transform="translate(445.783519, 1020.152119)">
                            <circle className="seat_cycle" id="b5c-1-2" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-2">
                                <tspan x="8.21648125" y="14.8478812">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b5-1-1" transform="translate(422.564619, 1014.510619)">
                            <circle className="seat_cycle" id="b5c-1-1" transform="translate(11.000281, 11.000281) rotate(-76.426493) translate(-11.000281, -11.000281) " cx="11.0002812" cy="11.0002812" r="9.00028125"></circle>
                            <text className="seat_text" id="b5n-1-1">
                                <tspan x="7.43538125" y="15.4893812">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-4-3" transform="translate(347.480741, 1063.953841)">
                            <circle className="seat_cycle" id="b4c-4-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-4-3">
                                <tspan x="9.5192588" y="17.0461588">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-4-2" transform="translate(326.108161, 1053.344301)">
                            <circle className="seat_cycle" id="b4c-4-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-4-2">
                                <tspan x="9.8918388" y="16.6556988">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-4-1" transform="translate(304.642821, 1042.658081)">
                            <circle className="seat_cycle" id="b4c-4-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-4-1">
                                <tspan x="9.3571788" y="17.3419188">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-3-4" transform="translate(359.545181, 1039.576061)">
                            <circle className="seat_cycle" id="b4c-3-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-3-4">
                                <tspan x="9.4548188" y="17.4239388">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-3-3" transform="translate(338.171101, 1028.950621)">
                            <circle className="seat_cycle" id="b4c-3-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-3-3">
                                <tspan x="9.8288988" y="17.0493788">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-3-2" transform="translate(316.796921, 1018.325281)">
                            <circle className="seat_cycle" id="b4c-3-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-3-2">
                                <tspan x="10.2030788" y="16.6747188">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-3-1" transform="translate(295.333281, 1007.655461)">
                            <circle className="seat_cycle" id="b4c-3-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-3-1">
                                <tspan x="9.6667188" y="17.3445388">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-2-4" transform="translate(371.699181, 1015.242761)">
                            <circle className="seat_cycle" id="b4c-2-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-2-4">
                                <tspan x="9.3008188" y="17.7572388">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-2-3" transform="translate(350.237041, 1004.588841)">
                            <circle className="seat_cycle" id="b4c-2-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-2-3">
                                <tspan x="9.7629588" y="17.4111588">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-2-2" transform="translate(328.861361, 993.947201)">
                            <circle className="seat_cycle" id="b4c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-2-2">
                                <tspan x="10.1386388" y="17.0527988">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-2-1" transform="translate(307.487281, 983.322161)">
                            <circle className="seat_cycle" id="b4c-2-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-2-1">
                                <tspan x="9.5127188" y="17.6778388">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-1-3" transform="translate(383.763621, 990.865081)">
                            <circle className="seat_cycle" id="b4c-1-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-1-3">
                                <tspan x="9.2363788" y="17.1349188">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-1-2" transform="translate(362.389441, 980.239741)">
                            <circle className="seat_cycle" id="b4c-1-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-1-2">
                                <tspan x="9.6105588" y="16.7602588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b4-1-1" transform="translate(340.925801, 969.569821)">
                            <circle className="seat_cycle" id="b4c-1-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b4n-1-1">
                                <tspan x="9.0741988" y="17.4301788">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-3-4" transform="translate(177.234641, 937.584241)">
                            <circle className="seat_cycle" id="b3c-3-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-3-4">
                                <tspan x="9.7653588" y="17.4157588">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-3-3" transform="translate(157.829141, 920.794141)">
                            <circle className="seat_cycle" id="b3c-3-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-3-3">
                                <tspan x="10.1708588" y="17.2058588">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-3-2" transform="translate(140.223881, 904.467661)">
                            <circle className="seat_cycle" id="b3c-3-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-3-2">
                                <tspan x="9.7761188" y="17.5323388">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-3-1" transform="translate(122.119961, 886.563101)">
                            <circle className="seat_cycle" id="b3c-3-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-3-1">
                                <tspan x="9.8800388" y="17.4368988">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-2-4" transform="translate(190.636561, 909.085001)">
                            <circle className="seat_cycle" id="b3c-2-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-2-4">
                                <tspan x="9.3634388" y="16.9149988">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-2-3" transform="translate(171.231061, 892.294901)">
                            <circle className="seat_cycle" id="b3c-2-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-2-3">
                                <tspan x="9.7689388" y="17.7050988">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-2-2" transform="translate(153.625801, 875.968421)">
                            <circle className="seat_cycle" id="b3c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-2-2">
                                <tspan x="9.3741988" y="17.0315788">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-2-1" transform="translate(135.521881, 858.063861)">
                            <circle className="seat_cycle" id="b3c-2-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-2-1">
                                <tspan x="9.4781188" y="16.9361388">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-1-4" transform="translate(207.316601, 883.682321)">
                            <circle className="seat_cycle" id="b3c-1-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-1-4">
                                <tspan x="9.6833988" y="17.3176788">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-1-3" transform="translate(187.911101, 866.892221)">
                            <circle className="seat_cycle" id="b3c-1-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-1-3">
                                <tspan x="9.0888988" y="17.1077788">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-1-2" transform="translate(170.305941, 850.565641)">
                            <circle className="seat_cycle" id="b3c-1-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-1-2">
                                <tspan x="9.6940588" y="17.4343588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b3-1-1" transform="translate(152.201921, 832.661181)">
                            <circle className="seat_cycle" id="b3c-1-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b3n-1-1">
                                <tspan x="9.7980788" y="17.3388188">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-3-4" transform="translate(81.299161, 841.257301)">
                            <circle className="seat_cycle" id="b2c-3-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-3-4">
                                <tspan x="9.7008388" y="17.7426988">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-3-3" transform="translate(65.357101, 821.364221)">
                            <circle className="seat_cycle" id="b2c-3-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-3-3">
                                <tspan x="9.6428988" y="17.6357788">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-3-2" transform="translate(50.349141, 801.238941)">
                            <circle className="seat_cycle" id="b2c-3-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-3-2">
                                <tspan x="9.6508588" y="16.7610588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-3-1" transform="translate(36.304801, 781.214921)">
                            <circle className="seat_cycle" id="b2c-3-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-3-1">
                                <tspan x="9.6951988" y="16.7850788">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-2-4" transform="translate(99.566661, 818.378401)">
                            <circle className="seat_cycle" id="b2c-2-4" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-2-4">
                                <tspan x="9.4333388" y="17.6215988">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-2-3" transform="translate(83.624601, 798.485221)">
                            <circle className="seat_cycle" id="b2c-2-3" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-2-3">
                                <tspan x="9.3753988" y="17.5147788">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-2-2" transform="translate(68.616641, 778.360041)">
                            <circle className="seat_cycle" id="b2c-2-2" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-2-2">
                                <tspan x="9.3833588" y="16.6399588">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-2-1" transform="translate(54.572301, 758.336021)">
                            <circle className="seat_cycle" id="b2c-2-1" transform="translate(12.999759, 12.999759) rotate(-63.588694) translate(-12.999759, -12.999759) " cx="12.9997588" cy="12.9997588" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-2-1">
                                <tspan x="9.4276988" y="16.6639788">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-1-5" transform="translate(119.901361, 797.488801)">
                            <circle className="seat_cycle" id="b2c-1-5" transform="translate(12.658179, 12.622619) rotate(-63.588694) translate(-12.658179, -12.622619) " cx="12.6581788" cy="12.6226188" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-1-5">
                                <tspan x="9.0986388" y="17.5111988">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-1-4" transform="translate(104.000000, 778.000000)">
                            <circle className="seat_cycle" id="b2c-1-4" transform="translate(12.707040, 12.262720) rotate(-63.588694) translate(-12.707040, -12.262720) " cx="12.70704" cy="12.26272" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-1-4">
                                <tspan x="9" y="17">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-1-3" transform="translate(89.000000, 758.000000)">
                            <circle className="seat_cycle" id="b2c-1-3" transform="translate(12.698980, 12.137540) rotate(-63.588694) translate(-12.698980, -12.137540) " cx="12.69898" cy="12.13754" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-1-3">
                                <tspan x="9" y="17">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-1-2" transform="translate(75.000000, 737.000000)">
                            <circle className="seat_cycle" id="b2c-1-2" transform="translate(12.699120, 13.023860) rotate(-63.588694) translate(-12.699120, -13.023860) " cx="12.69912" cy="13.02386" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-1-2">
                                <tspan x="9" y="17">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b2-1-1" transform="translate(60.000000, 718.000000)">
                            <circle className="seat_cycle" id="b2c-1-1" transform="translate(12.901120, 12.488560) rotate(-63.588694) translate(-12.901120, -12.488560) " cx="12.90112" cy="12.48856" r="8.9997588"></circle>
                            <text className="seat_text" id="b2n-1-1">
                                <tspan x="9" y="16">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b1-1-5" transform="translate(43.008761, 690.658501)">
                            <circle className="seat_cycle" id="b1c-1-5" transform="translate(12.743559, 12.086159) rotate(-63.588694) translate(-12.743559, -12.086159) " cx="12.7435588" cy="12.0861588" r="8.9997588"></circle>
                            <text className="seat_text" id="b1n-1-5">
                                <tspan x="9.9912388" y="16.3414988">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b1-1-4" transform="translate(31.000000, 668.000000)">
                            <circle className="seat_cycle" id="b1c-1-4" transform="translate(12.135020, 12.579760) rotate(-63.588694) translate(-12.135020, -12.579760) " cx="12.13502" cy="12.57976" r="8.9997588"></circle>
                            <text className="seat_text" id="b1n-1-4">
                                <tspan x="8" y="17">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b1-1-3" transform="translate(19.000000, 647.000000)">
                            <circle className="seat_cycle" id="b1c-1-3" transform="translate(13.055080, 12.495440) rotate(-63.588694) translate(-13.055080, -12.495440) " cx="13.05508" cy="12.49544" r="8.9997588"></circle>
                            <text className="seat_text" id="b1n-1-3">
                                <tspan x="9" y="17">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b1-1-2" transform="translate(9.000000, 626.000000)">
                            <circle className="seat_cycle" id="b1c-1-2" transform="translate(12.865420, 12.494360) rotate(-63.588694) translate(-12.865420, -12.494360) " cx="12.86542" cy="12.49436" r="8.9997588"></circle>
                            <text className="seat_text" id="b1n-1-2">
                                <tspan x="9" y="17">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="b1-1-1" transform="translate(0.000000, 606.000000)">
                            <circle className="seat_cycle" id="b1c-1-1" transform="translate(13.008520, 12.658260) rotate(-63.588694) translate(-13.008520, -12.658260) " cx="13.00852" cy="12.65826" r="8.9997588"></circle>
                            <text className="seat_text" id="b1n-1-1">
                                <tspan x="9" y="17">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-4-3" transform="translate(467.000000, 838.700000)">
                            <circle className="seat_cycle" id="lb5c-4-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-4-3">
                                <tspan x="6" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-4-2" transform="translate(443.000000, 838.700000)">
                            <circle className="seat_cycle" id="lb5c-4-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-4-2">
                                <tspan x="6" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-4-1" transform="translate(419.000000, 838.700000)">
                            <circle className="seat_cycle" id="lb5c-4-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-4-1">
                                <tspan x="6" y="13.3">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-3-3" transform="translate(475.200000, 812.100000)">
                            <circle className="seat_cycle" id="lb5c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-3-3">
                                <tspan x="5.8" y="13.9">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-3-2" transform="translate(451.200000, 812.100000)">
                            <circle className="seat_cycle" id="lb5c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-3-2">
                                <tspan x="5.8" y="12.9">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-3-1" transform="translate(427.200000, 812.100000)">
                            <circle className="seat_cycle" id="lb5c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-3-1">
                                <tspan x="5.8" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-2-3" transform="translate(483.800000, 785.600000)">
                            <circle className="seat_cycle" id="lb5c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-2-3">
                                <tspan x="5.2" y="13.4">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-2-2" transform="translate(459.800000, 785.600000)">
                            <circle className="seat_cycle" id="lb5c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-2-2">
                                <tspan x="5.2" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-2-1" transform="translate(435.800000, 785.600000)">
                            <circle className="seat_cycle" id="lb5c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-2-1">
                                <tspan x="5.2" y="13.4">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-9" transform="translate(673.500000, 788.800000)">
                            <circle className="seat_cycle" id="lb5c-1-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-9">
                                <tspan x="5.5" y="13.2">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-8" transform="translate(649.100000, 787.500000)">
                            <circle className="seat_cycle" id="lb5c-1-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-8">
                                <tspan x="4.9" y="12.5">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-7" transform="translate(624.700000, 785.400000)">
                            <circle className="seat_cycle" id="lb5c-1-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-7">
                                <tspan x="5.3" y="12.6">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-6" transform="translate(600.300000, 782.300000)">
                            <circle className="seat_cycle" id="lb5c-1-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-6">
                                <tspan x="5.7" y="12.7">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-5" transform="translate(575.800000, 778.200000)">
                            <circle className="seat_cycle" id="lb5c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-5">
                                <tspan x="5.2" y="12.8">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-4" transform="translate(551.400000, 773.300000)">
                            <circle className="seat_cycle" id="lb5c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-4">
                                <tspan x="5.6" y="12.7">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-3" transform="translate(492.000000, 759.000000)">
                            <circle className="seat_cycle" id="lb5c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-3">
                                <tspan x="6" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-2" transform="translate(468.000000, 759.000000)">
                            <circle className="seat_cycle" id="lb5c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-2">
                                <tspan x="6" y="13">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb5-1-1" transform="translate(444.000000, 759.000000)">
                            <circle className="seat_cycle" id="lb5c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb5n-1-1">
                                <tspan x="5" y="13">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-4-3" transform="translate(345.800000, 807.500000)">
                            <circle className="seat_cycle" id="lb4c-4-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-4-3">
                                <tspan x="6.2" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-4-2" transform="translate(323.000000, 799.300000)">
                            <circle className="seat_cycle" id="lb4c-4-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-4-2">
                                <tspan x="6" y="13.7">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-4-1" transform="translate(300.200000, 791.000000)">
                            <circle className="seat_cycle" id="lb4c-4-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-4-1">
                                <tspan x="5.8" y="13">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-3-3" transform="translate(360.100000, 783.900000)">
                            <circle className="seat_cycle" id="lb4c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-3-3">
                                <tspan x="5.9" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-3-2" transform="translate(337.300000, 775.600000)">
                            <circle className="seat_cycle" id="lb4c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-3-2">
                                <tspan x="5.7" y="12.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-3-1" transform="translate(314.500000, 767.400000)">
                            <circle className="seat_cycle" id="lb4c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-3-1">
                                <tspan x="5.5" y="12.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-2-3" transform="translate(374.400000, 760.200000)">
                            <circle className="seat_cycle" id="lb4c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-2-3">
                                <tspan x="5.6" y="12.8">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-2-2" transform="translate(351.600000, 752.000000)">
                            <circle className="seat_cycle" id="lb4c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-2-2">
                                <tspan x="5.4" y="13">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-2-1" transform="translate(328.800000, 743.800000)">
                            <circle className="seat_cycle" id="lb4c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-2-1">
                                <tspan x="5.2" y="13.2">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-1-3" transform="translate(389.700000, 734.900000)">
                            <circle className="seat_cycle" id="lb4c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-1-3">
                                <tspan x="6.3" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-1-2" transform="translate(366.900000, 726.700000)">
                            <circle className="seat_cycle" id="lb4c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-1-2">
                                <tspan x="6.1" y="12.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb4-1-1" transform="translate(344.100000, 718.500000)">
                            <circle className="seat_cycle" id="lb4c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb4n-1-1">
                                <tspan x="4.9" y="13.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-3-5" transform="translate(178.600000, 679.600000)">
                            <circle className="seat_cycle" id="lb3c-3-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-3-5">
                                <tspan x="5.4" y="13.4">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-3-4" transform="translate(161.000000, 662.800000)">
                            <circle className="seat_cycle" id="lb3c-3-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-3-4">
                                <tspan x="5" y="13.2">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-3-3" transform="translate(143.900000, 645.100000)">
                            <circle className="seat_cycle" id="lb3c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-3-3">
                                <tspan x="5.1" y="13.9">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-3-2" transform="translate(127.900000, 626.500000)">
                            <circle className="seat_cycle" id="lb3c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-3-2">
                                <tspan x="6.1" y="13.5">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-3-1" transform="translate(113.300000, 607.900000)">
                            <circle className="seat_cycle" id="lb3c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-3-1">
                                <tspan x="5.7" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-2-5" transform="translate(196.200000, 656.900000)">
                            <circle className="seat_cycle" id="lb3c-2-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-2-5">
                                <tspan x="5.8" y="13.1">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-2-4" transform="translate(178.600000, 640.200000)">
                            <circle className="seat_cycle" id="lb3c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-2-4">
                                <tspan x="5.4" y="13.8">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-2-3" transform="translate(161.500000, 622.400000)">
                            <circle className="seat_cycle" id="lb3c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-2-3">
                                <tspan x="5.5" y="13.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-2-2" transform="translate(145.500000, 603.900000)">
                            <circle className="seat_cycle" id="lb3c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-2-2">
                                <tspan x="5.5" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-2-1" transform="translate(130.900000, 585.200000)">
                            <circle className="seat_cycle" id="lb3c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-2-1">
                                <tspan x="5.1" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-1-4" transform="translate(198.400000, 620.500000)">
                            <circle className="seat_cycle" id="lb3c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-1-4">
                                <tspan x="5.6" y="13.5">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-1-3" transform="translate(181.300000, 602.700000)">
                            <circle className="seat_cycle" id="lb3c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-1-3">
                                <tspan x="5.7" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-1-2" transform="translate(165.400000, 584.200000)">
                            <circle className="seat_cycle" id="lb3c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-1-2">
                                <tspan x="5.6" y="13.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb3-1-1" transform="translate(150.700000, 565.500000)">
                            <circle className="seat_cycle" id="lb3c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb3n-1-1">
                                <tspan x="5.3" y="12.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-3-4" transform="translate(90.900000, 575.800000)">
                            <circle className="seat_cycle" id="lb2c-3-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-3-4">
                                <tspan x="5.1" y="13.2">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-3-3" transform="translate(78.600000, 556.900000)">
                            <circle className="seat_cycle" id="lb2c-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-3-3">
                                <tspan x="5.4" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-3-2" transform="translate(66.900000, 537.700000)">
                            <circle className="seat_cycle" id="lb2c-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-3-2">
                                <tspan x="5.1" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-3-1" transform="translate(56.300000, 518.900000)">
                            <circle className="seat_cycle" id="lb2c-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-3-1">
                                <tspan x="5.7" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-2-4" transform="translate(109.800000, 555.100000)">
                            <circle className="seat_cycle" id="lb2c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-2-4">
                                <tspan x="5.2" y="12.9">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-2-3" transform="translate(97.500000, 536.200000)">
                            <circle className="seat_cycle" id="lb2c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-2-3">
                                <tspan x="5.5" y="13.8">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-2-2" transform="translate(85.800000, 517.000000)">
                            <circle className="seat_cycle" id="lb2c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-2-2">
                                <tspan x="5.2" y="13">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-2-1" transform="translate(75.200000, 498.200000)">
                            <circle className="seat_cycle" id="lb2c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-2-1">
                                <tspan x="5.8" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-1-5" transform="translate(130.500000, 537.000000)">
                            <circle className="seat_cycle" id="lb2c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-1-5">
                                <tspan x="5.5" y="13">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-1-4" transform="translate(118.100000, 518.100000)">
                            <circle className="seat_cycle" id="lb2c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-1-4">
                                <tspan x="4.9" y="12.9">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-1-3" transform="translate(106.500000, 498.900000)">
                            <circle className="seat_cycle" id="lb2c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-1-3">
                                <tspan x="5.5" y="14.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-1-2" transform="translate(95.800000, 480.100000)">
                            <circle className="seat_cycle" id="lb2c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-1-2">
                                <tspan x="5.2" y="12.9">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb2-1-1" transform="translate(85.300000, 460.100000)">
                            <circle className="seat_cycle" id="lb2c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb2n-1-1">
                                <tspan x="5.7" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-2-3" transform="translate(43.800000, 429.500000)">
                            <circle className="seat_cycle" id="lb1c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-2-3">
                                <tspan x="5.2" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-2-2" transform="translate(35.000000, 405.200000)">
                            <circle className="seat_cycle" id="lb1c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-2-2">
                                <tspan x="6" y="13.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-2-1" transform="translate(27.600000, 381.100000)">
                            <circle className="seat_cycle" id="lb1c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-2-1">
                                <tspan x="5.4" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-1-5" transform="translate(69.000000, 425.500000)">
                            <circle className="seat_cycle" id="lb1c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-1-5">
                                <tspan x="6" y="13.5">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-1-4" transform="translate(59.200000, 401.400000)">
                            <circle className="seat_cycle" id="lb1c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-1-4">
                                <tspan x="5.8" y="13.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-1-3" transform="translate(50.800000, 377.500000)">
                            <circle className="seat_cycle" id="lb1c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-1-3">
                                <tspan x="5.2" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-1-2" transform="translate(43.500000, 352.400000)">
                            <circle className="seat_cycle" id="lb1c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-1-2">
                                <tspan x="5.5" y="13.6">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="lb1-1-1" transform="translate(38.700000, 327.300000)">
                            <circle className="seat_cycle" id="lb1c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="lb1n-1-1">
                                <tspan x="5.3" y="12.7">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-7" transform="translate(623.100000, 659.500000)">
                            <circle className="seat_cycle" id="l5c-2-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-7">
                                <tspan x="5.9" y="13.5">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-6" transform="translate(599.300000, 655.600000)">
                            <circle className="seat_cycle" id="l5c-2-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-6">
                                <tspan x="5.7" y="13.4">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-5" transform="translate(575.400000, 650.500000)">
                            <circle className="seat_cycle" id="l5c-2-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-5">
                                <tspan x="5.6" y="13.5">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-4" transform="translate(551.500000, 644.200000)">
                            <circle className="seat_cycle" id="l5c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-4">
                                <tspan x="5.5" y="12.8">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-3" transform="translate(498.900000, 625.500000)">
                            <circle className="seat_cycle" id="l5c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-3">
                                <tspan x="6.1" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-2" transform="translate(475.100000, 614.700000)">
                            <circle className="seat_cycle" id="l5c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-2">
                                <tspan x="5.9" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-2-1" transform="translate(451.400000, 602.400000)">
                            <circle className="seat_cycle" id="l5c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-2-1">
                                <tspan x="5.6" y="13.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-1-6" transform="translate(565.800000, 625.200000)">
                            <circle className="seat_cycle" id="l5c-1-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-1-6">
                                <tspan x="5.2" y="12.8">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-1-5" transform="translate(542.400000, 617.800000)">
                            <circle className="seat_cycle" id="l5c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-1-5">
                                <tspan x="5.6" y="13.2">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-1-4" transform="translate(518.100000, 609.000000)">
                            <circle className="seat_cycle" id="l5c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-1-4">
                                <tspan x="4.9" y="13">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-1-3" transform="translate(494.300000, 598.900000)">
                            <circle className="seat_cycle" id="l5c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-1-3">
                                <tspan x="5.7" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-1-2" transform="translate(470.300000, 587.000000)">
                            <circle className="seat_cycle" id="l5c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-1-2">
                                <tspan x="5.7" y="13">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l5-1-1" transform="translate(446.500000, 573.600000)">
                            <circle className="seat_cycle" id="l5c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l5n-1-1">
                                <tspan x="5.5" y="13.4">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-2-4" transform="translate(397.500000, 567.800000)">
                            <circle className="seat_cycle" id="l4c-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-2-4">
                                <tspan x="5.5" y="13.2">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-2-3" transform="translate(379.700000, 553.700000)">
                            <circle className="seat_cycle" id="l4c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-2-3">
                                <tspan x="5.3" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-2-2" transform="translate(363.100000, 539.600000)">
                            <circle className="seat_cycle" id="l4c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-2-2">
                                <tspan x="5.9" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-2-1" transform="translate(347.300000, 525.500000)">
                            <circle className="seat_cycle" id="l4c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-2-1">
                                <tspan x="5.7" y="12.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-1-4" transform="translate(368.300000, 514.400000)">
                            <circle className="seat_cycle" id="l4c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-1-4">
                                <tspan x="5.7" y="12.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-1-3" transform="translate(351.500000, 497.900000)">
                            <circle className="seat_cycle" id="l4c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-1-3">
                                <tspan x="5.5" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-1-2" transform="translate(335.700000, 480.900000)">
                            <circle className="seat_cycle" id="l4c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-1-2">
                                <tspan x="6.3" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l4-1-1" transform="translate(321.900000, 464.400000)">
                            <circle className="seat_cycle" id="l4c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l4n-1-1">
                                <tspan x="6.1" y="12.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-2-3" transform="translate(269.200000, 427.900000)">
                            <circle className="seat_cycle" id="l3c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-2-3">
                                <tspan x="5.8" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-2-2" transform="translate(257.400000, 408.500000)">
                            <circle className="seat_cycle" id="l3c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-2-2">
                                <tspan x="5.6" y="12.5">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-2-1" transform="translate(247.200000, 389.200000)">
                            <circle className="seat_cycle" id="l3c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-2-1">
                                <tspan x="5.8" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-1-4" transform="translate(302.600000, 438.600000)">
                            <circle className="seat_cycle" id="l3c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-1-4">
                                <tspan x="5.4" y="13.4">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-1-3" transform="translate(289.700000, 419.000000)">
                            <circle className="seat_cycle" id="l3c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-1-3">
                                <tspan x="5.3" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-1-2" transform="translate(278.200000, 399.600000)">
                            <circle className="seat_cycle" id="l3c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-1-2">
                                <tspan x="5.8" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l3-1-1" transform="translate(268.000000, 380.400000)">
                            <circle className="seat_cycle" id="l3c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l3n-1-1">
                                <tspan x="6" y="12.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l2-2-3" transform="translate(235.100000, 362.900000)">
                            <circle className="seat_cycle" id="l2c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l2n-2-3">
                                <tspan x="5.9" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l2-2-2" transform="translate(225.600000, 338.800000)">
                            <circle className="seat_cycle" id="l2c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l2n-2-2">
                                <tspan x="5.4" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l2-2-1" transform="translate(217.400000, 314.800000)">
                            <circle className="seat_cycle" id="l2c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l2n-2-1">
                                <tspan x="5.6" y="12.2">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l2-1-3" transform="translate(252.400000, 345.900000)">
                            <circle className="seat_cycle" id="l2c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l2n-1-3">
                                <tspan x="5.6" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l2-1-2" transform="translate(243.200000, 321.200000)">
                            <circle className="seat_cycle" id="l2c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l2n-1-2">
                                <tspan x="5.8" y="12.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l2-1-1" transform="translate(235.500000, 296.500000)">
                            <circle className="seat_cycle" id="l2c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l2n-1-1">
                                <tspan x="5.5" y="12.5">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-2-3" transform="translate(200.000000, 235.500000)">
                            <circle className="seat_cycle" id="l1c-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-2-3">
                                <tspan x="6" y="12.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-2-2" transform="translate(197.400000, 210.700000)">
                            <circle className="seat_cycle" id="l1c-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-2-2">
                                <tspan x="5.6" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-2-1" transform="translate(195.900000, 185.800000)">
                            <circle className="seat_cycle" id="l1c-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-2-1">
                                <tspan x="5.1" y="13.2">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-1-5" transform="translate(220.900000, 221.200000)">
                            <circle className="seat_cycle" id="l1c-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-1-5">
                                <tspan x="6.1" y="12.8">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-1-4" transform="translate(218.900000, 198.500000)">
                            <circle className="seat_cycle" id="l1c-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-1-4">
                                <tspan x="5.1" y="12.5">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-1-3" transform="translate(218.000000, 173.000000)">
                            <circle className="seat_cycle" id="l1c-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-1-3">
                                <tspan x="6" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-1-2" transform="translate(218.500000, 147.200000)">
                            <circle className="seat_cycle" id="l1c-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-1-2">
                                <tspan x="5.5" y="12.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="l1-1-1" transform="translate(220.100000, 123.400000)">
                            <circle className="seat_cycle" id="l1c-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="l1n-1-1">
                                <tspan x="4.9" y="13.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-8" transform="translate(821.800000, 484.600000) scale(-1, 1) translate(-821.800000, -484.600000) translate(812.800000, 475.600000)">
                            <circle className="seat_cycle" id="pc-17-8" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-8" transform="translate(9.200000, 8.700000) scale(-1, 1) translate(-9.200000, -8.700000) ">
                                <tspan x="5.7" y="12.7">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-7" transform="translate(797.900000, 485.500000) scale(-1, 1) translate(-797.900000, -485.500000) translate(788.900000, 476.500000)">
                            <circle className="seat_cycle" id="pc-17-7" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-7" transform="translate(8.300000, 9.800000) scale(-1, 1) translate(-8.300000, -9.800000) ">
                                <tspan x="4.8" y="13.8">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-6" transform="translate(774.000000, 486.200000) scale(-1, 1) translate(-774.000000, -486.200000) translate(765.000000, 477.200000)">
                            <circle className="seat_cycle" id="pc-17-6" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-6" transform="translate(9.400000, 9.100000) scale(-1, 1) translate(-9.400000, -9.100000) ">
                                <tspan x="5.9" y="13.1">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-5" transform="translate(750.100000, 486.700000) scale(-1, 1) translate(-750.100000, -486.700000) translate(741.100000, 477.700000)">
                            <circle className="seat_cycle" id="pc-17-5" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-5" transform="translate(8.500000, 9.600000) scale(-1, 1) translate(-8.500000, -9.600000) ">
                                <tspan x="5" y="13.6">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-4" transform="translate(641.000000, 477.400000)">
                            <circle className="seat_cycle" id="pc-17-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-4">
                                <tspan x="5" y="13.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-3" transform="translate(617.100000, 476.900000)">
                            <circle className="seat_cycle" id="pc-17-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-3">
                                <tspan x="5.9" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-2" transform="translate(593.200000, 476.200000)">
                            <circle className="seat_cycle" id="pc-17-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-2">
                                <tspan x="5.8" y="13.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-17-1" transform="translate(569.300000, 475.300000)">
                            <circle className="seat_cycle" id="pc-17-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-17-1">
                                <tspan x="5.7" y="12.7">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-16" transform="translate(917.600000, 451.500000) scale(-1, 1) translate(-917.600000, -451.500000) translate(908.600000, 442.500000)">
                            <circle className="seat_cycle" id="pc-16-16" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-16" transform="translate(9.500000, 8.800000) scale(-1, 1) translate(-9.500000, -8.800000) ">
                                <tspan x="2.5" y="12.8">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-15" transform="translate(893.700000, 453.300000) scale(-1, 1) translate(-893.700000, -453.300000) translate(884.700000, 444.300000)">
                            <circle className="seat_cycle" id="pc-16-15" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-15" transform="translate(8.600000, 9.000000) scale(-1, 1) translate(-8.600000, -9.000000) ">
                                <tspan x="1.6" y="13">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-14" transform="translate(869.800000, 454.900000) scale(-1, 1) translate(-869.800000, -454.900000) translate(860.800000, 445.900000)">
                            <circle className="seat_cycle" id="pc-16-14" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-14" transform="translate(8.700000, 9.400000) scale(-1, 1) translate(-8.700000, -9.400000) ">
                                <tspan x="1.7" y="13.4">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-13" transform="translate(845.900000, 456.200000) scale(-1, 1) translate(-845.900000, -456.200000) translate(836.900000, 447.200000)">
                            <circle className="seat_cycle" id="pc-16-13" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-13" transform="translate(8.800000, 9.100000) scale(-1, 1) translate(-8.800000, -9.100000) ">
                                <tspan x="1.8" y="13.1">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-12" transform="translate(821.800000, 457.400000) scale(-1, 1) translate(-821.800000, -457.400000) translate(812.800000, 448.400000)">
                            <circle className="seat_cycle" id="pc-16-12" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-12" transform="translate(9.700000, 8.900000) scale(-1, 1) translate(-9.700000, -8.900000) ">
                                <tspan x="2.7" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-11" transform="translate(797.900000, 458.300000) scale(-1, 1) translate(-797.900000, -458.300000) translate(788.900000, 449.300000)">
                            <circle className="seat_cycle" id="pc-16-11" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-11" transform="translate(9.300000, 9.000000) scale(-1, 1) translate(-9.300000, -9.000000) ">
                                <tspan x="2.8" y="13">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-10" transform="translate(774.000000, 459.000000) scale(-1, 1) translate(-774.000000, -459.000000) translate(765.000000, 450.000000)">
                            <circle className="seat_cycle" id="pc-16-10" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-10" transform="translate(8.900000, 9.300000) scale(-1, 1) translate(-8.900000, -9.300000) ">
                                <tspan x="1.9" y="13.3">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-9" transform="translate(750.100000, 459.500000) scale(-1, 1) translate(-750.100000, -459.500000) translate(741.100000, 450.500000)">
                            <circle className="seat_cycle" id="pc-16-9" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-9" transform="translate(8.500000, 8.800000) scale(-1, 1) translate(-8.500000, -8.800000) ">
                                <tspan x="5" y="12.8">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-8" transform="translate(641.000000, 450.200000)">
                            <circle className="seat_cycle" id="pc-16-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-8">
                                <tspan x="6" y="12.8">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-7" transform="translate(617.100000, 449.700000)">
                            <circle className="seat_cycle" id="pc-16-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-7">
                                <tspan x="5.9" y="13.3">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-6" transform="translate(593.200000, 449.000000)">
                            <circle className="seat_cycle" id="pc-16-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-6">
                                <tspan x="5.8" y="13">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-5" transform="translate(569.300000, 448.100000)">
                            <circle className="seat_cycle" id="pc-16-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-5">
                                <tspan x="5.7" y="13.9">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-4" transform="translate(545.200000, 446.900000)">
                            <circle className="seat_cycle" id="pc-16-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-4">
                                <tspan x="5.8" y="13.1">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-3" transform="translate(521.300000, 445.600000)">
                            <circle className="seat_cycle" id="pc-16-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-3">
                                <tspan x="5.7" y="13.4">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-2" transform="translate(497.400000, 444.000000)">
                            <circle className="seat_cycle" id="pc-16-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-2">
                                <tspan x="5.6" y="13">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-16-1" transform="translate(473.500000, 442.200000)">
                            <circle className="seat_cycle" id="pc-16-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-16-1">
                                <tspan x="5.5" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-22" transform="translate(990.200000, 417.500000) scale(-1, 1) translate(-990.200000, -417.500000) translate(981.200000, 408.500000)">
                            <circle className="seat_cycle" id="pc-15-22" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-22" transform="translate(9.100000, 8.800000) scale(-1, 1) translate(-9.100000, -8.800000) ">
                                <tspan x="2.1" y="12.8">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-21" transform="translate(966.300000, 419.900000) scale(-1, 1) translate(-966.300000, -419.900000) translate(957.300000, 410.900000)">
                            <circle className="seat_cycle" id="pc-15-21" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-21" transform="translate(8.200000, 9.400000) scale(-1, 1) translate(-8.200000, -9.400000) ">
                                <tspan x="1.2" y="13.4">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-20" transform="translate(942.400000, 422.200000) scale(-1, 1) translate(-942.400000, -422.200000) translate(933.400000, 413.200000)">
                            <circle className="seat_cycle" id="pc-15-20" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-20" transform="translate(8.300000, 9.100000) scale(-1, 1) translate(-8.300000, -9.100000) ">
                                <tspan x="1.3" y="13.1">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-19" transform="translate(917.600000, 424.300000) scale(-1, 1) translate(-917.600000, -424.300000) translate(908.600000, 415.300000)">
                            <circle className="seat_cycle" id="pc-15-19" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-19" transform="translate(9.500000, 9.000000) scale(-1, 1) translate(-9.500000, -9.000000) ">
                                <tspan x="2.5" y="13">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-18" transform="translate(893.700000, 426.100000) scale(-1, 1) translate(-893.700000, -426.100000) translate(884.700000, 417.100000)">
                            <circle className="seat_cycle" id="pc-15-18" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-18" transform="translate(9.600000, 9.200000) scale(-1, 1) translate(-9.600000, -9.200000) ">
                                <tspan x="2.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-17" transform="translate(869.800000, 427.700000) scale(-1, 1) translate(-869.800000, -427.700000) translate(860.800000, 418.700000)">
                            <circle className="seat_cycle" id="pc-15-17" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-17" transform="translate(8.700000, 9.600000) scale(-1, 1) translate(-8.700000, -9.600000) ">
                                <tspan x="1.7" y="13.6">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-16" transform="translate(845.900000, 429.000000) scale(-1, 1) translate(-845.900000, -429.000000) translate(836.900000, 420.000000)">
                            <circle className="seat_cycle" id="pc-15-16" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-16" transform="translate(8.800000, 9.300000) scale(-1, 1) translate(-8.800000, -9.300000) ">
                                <tspan x="1.8" y="13.3">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-15" transform="translate(821.800000, 430.200000) scale(-1, 1) translate(-821.800000, -430.200000) translate(812.800000, 421.200000)">
                            <circle className="seat_cycle" id="pc-15-15" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-15" transform="translate(8.700000, 9.100000) scale(-1, 1) translate(-8.700000, -9.100000) ">
                                <tspan x="1.7" y="13.1">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-14" transform="translate(797.900000, 431.100000) scale(-1, 1) translate(-797.900000, -431.100000) translate(788.900000, 422.100000)">
                            <circle className="seat_cycle" id="pc-15-14" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-14" transform="translate(8.800000, 9.200000) scale(-1, 1) translate(-8.800000, -9.200000) ">
                                <tspan x="1.8" y="13.2">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-13" transform="translate(774.000000, 431.800000) scale(-1, 1) translate(-774.000000, -431.800000) translate(765.000000, 422.800000)">
                            <circle className="seat_cycle" id="pc-15-13" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-13" transform="translate(8.900000, 9.500000) scale(-1, 1) translate(-8.900000, -9.500000) ">
                                <tspan x="1.9" y="13.5">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-12" transform="translate(750.100000, 432.300000) scale(-1, 1) translate(-750.100000, -432.300000) translate(741.100000, 423.300000)">
                            <circle className="seat_cycle" id="pc-15-12" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-12" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) ">
                                <tspan x="2" y="13">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-11" transform="translate(641.000000, 423.000000)">
                            <circle className="seat_cycle" id="pc-15-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-11">
                                <tspan x="3" y="14">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-10" transform="translate(617.100000, 422.500000)">
                            <circle className="seat_cycle" id="pc-15-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-10">
                                <tspan x="1.9" y="13.5">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-9" transform="translate(593.200000, 421.800000)">
                            <circle className="seat_cycle" id="pc-15-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-9">
                                <tspan x="5.8" y="13.2">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-8" transform="translate(569.300000, 420.900000)">
                            <circle className="seat_cycle" id="pc-15-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-8">
                                <tspan x="5.7" y="13.1">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-7" transform="translate(545.200000, 419.700000)">
                            <circle className="seat_cycle" id="pc-15-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-7">
                                <tspan x="5.8" y="13.3">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-6" transform="translate(521.300000, 418.400000)">
                            <circle className="seat_cycle" id="pc-15-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-6">
                                <tspan x="5.7" y="13.6">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-5" transform="translate(497.400000, 416.800000)">
                            <circle className="seat_cycle" id="pc-15-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-5">
                                <tspan x="5.6" y="13.2">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-4" transform="translate(473.500000, 415.000000)">
                            <circle className="seat_cycle" id="pc-15-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-4">
                                <tspan x="5.5" y="13">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-3" transform="translate(448.700000, 412.900000)">
                            <circle className="seat_cycle" id="pc-15-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-3">
                                <tspan x="5.3" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-2" transform="translate(424.800000, 410.600000)">
                            <circle className="seat_cycle" id="pc-15-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-2">
                                <tspan x="5.2" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-15-1" transform="translate(400.900000, 408.200000)">
                            <circle className="seat_cycle" id="pc-15-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-15-1">
                                <tspan x="5.1" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-24" transform="translate(1005.300000, 378.500000)">
                            <circle className="seat_cycle" id="pc-14-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-24">
                                <tspan x="2.2" y="12.8">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-23" transform="translate(981.300000, 381.200000)">
                            <circle className="seat_cycle" id="pc-14-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-23">
                                <tspan x="2.2" y="13.1">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-22" transform="translate(957.300000, 383.700000)">
                            <circle className="seat_cycle" id="pc-14-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-22">
                                <tspan x="2.2" y="12.6">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-21" transform="translate(933.400000, 386.000000)">
                            <circle className="seat_cycle" id="pc-14-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-21">
                                <tspan x="3.3" y="13.3">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-20" transform="translate(908.600000, 388.100000)">
                            <circle className="seat_cycle" id="pc-14-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-20">
                                <tspan x="2.5" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-19" transform="translate(893.700000, 398.900000) scale(-1, 1) translate(-893.700000, -398.900000) translate(884.700000, 389.900000)">
                            <circle className="seat_cycle" id="pc-14-19" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-19" transform="translate(9.600000, 9.400000) scale(-1, 1) translate(-9.600000, -9.400000) ">
                                <tspan x="2.6" y="13.4">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-18" transform="translate(869.800000, 400.500000) scale(-1, 1) translate(-869.800000, -400.500000) translate(860.800000, 391.500000)">
                            <circle className="seat_cycle" id="pc-14-18" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-18" transform="translate(8.700000, 8.800000) scale(-1, 1) translate(-8.700000, -8.800000) ">
                                <tspan x="1.7" y="12.8">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-17" transform="translate(845.900000, 401.800000) scale(-1, 1) translate(-845.900000, -401.800000) translate(836.900000, 392.800000)">
                            <circle className="seat_cycle" id="pc-14-17" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-17" transform="translate(8.800000, 9.500000) scale(-1, 1) translate(-8.800000, -9.500000) ">
                                <tspan x="1.8" y="13.5">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-16" transform="translate(821.800000, 403.000000) scale(-1, 1) translate(-821.800000, -403.000000) translate(812.800000, 394.000000)">
                            <circle className="seat_cycle" id="pc-14-16" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-16" transform="translate(8.700000, 9.300000) scale(-1, 1) translate(-8.700000, -9.300000) ">
                                <tspan x="1.7" y="13.3">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-15" transform="translate(797.900000, 403.900000) scale(-1, 1) translate(-797.900000, -403.900000) translate(788.900000, 394.900000)">
                            <circle className="seat_cycle" id="pc-14-15" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-15" transform="translate(8.800000, 9.400000) scale(-1, 1) translate(-8.800000, -9.400000) ">
                                <tspan x="1.8" y="13.4">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-14" transform="translate(774.000000, 404.600000) scale(-1, 1) translate(-774.000000, -404.600000) translate(765.000000, 395.600000)">
                            <circle className="seat_cycle" id="pc-14-14" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-14" transform="translate(8.900000, 8.700000) scale(-1, 1) translate(-8.900000, -8.700000) ">
                                <tspan x="1.9" y="12.7">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-13" transform="translate(750.100000, 405.100000) scale(-1, 1) translate(-750.100000, -405.100000) translate(741.100000, 396.100000)">
                            <circle className="seat_cycle" id="pc-14-13" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-13" transform="translate(9.000000, 9.200000) scale(-1, 1) translate(-9.000000, -9.200000) ">
                                <tspan x="2" y="13.2">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-12" transform="translate(641.000000, 395.800000)">
                            <circle className="seat_cycle" id="pc-14-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-12">
                                <tspan x="2" y="13.2">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-11" transform="translate(617.100000, 395.300000)">
                            <circle className="seat_cycle" id="pc-14-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-11">
                                <tspan x="2.9" y="13.7">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-10" transform="translate(593.200000, 394.600000)">
                            <circle className="seat_cycle" id="pc-14-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-10">
                                <tspan x="1.8" y="13.4">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-9" transform="translate(569.300000, 393.700000)">
                            <circle className="seat_cycle" id="pc-14-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-9">
                                <tspan x="5.7" y="13.3">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-8" transform="translate(545.200000, 392.500000)">
                            <circle className="seat_cycle" id="pc-14-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-8">
                                <tspan x="5.8" y="13.5">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-7" transform="translate(521.300000, 391.200000)">
                            <circle className="seat_cycle" id="pc-14-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-7">
                                <tspan x="5.7" y="13.8">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-6" transform="translate(497.400000, 389.600000)">
                            <circle className="seat_cycle" id="pc-14-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-6">
                                <tspan x="5.6" y="13.4">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-5" transform="translate(473.500000, 387.800000)">
                            <circle className="seat_cycle" id="pc-14-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-5">
                                <tspan x="5.5" y="13.2">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-4" transform="translate(448.700000, 385.700000)">
                            <circle className="seat_cycle" id="pc-14-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-4">
                                <tspan x="5.3" y="13.3">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-3" transform="translate(424.800000, 383.400000)">
                            <circle className="seat_cycle" id="pc-14-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-3">
                                <tspan x="5.2" y="12.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-2" transform="translate(400.800000, 380.900000)">
                            <circle className="seat_cycle" id="pc-14-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-2">
                                <tspan x="5.2" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-14-1" transform="translate(376.800000, 378.200000)">
                            <circle className="seat_cycle" id="pc-14-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-14-1">
                                <tspan x="5.2" y="12.8">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-28" transform="translate(1053.100000, 345.300000)">
                            <circle className="seat_cycle" id="pc-13-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-28">
                                <tspan x="2" y="13">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-27" transform="translate(1029.100000, 348.400000)">
                            <circle className="seat_cycle" id="pc-13-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-27">
                                <tspan x="3" y="12.9">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-26" transform="translate(1005.300000, 351.300000)">
                            <circle className="seat_cycle" id="pc-13-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-26">
                                <tspan x="2.2" y="13">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-25" transform="translate(981.300000, 354.000000)">
                            <circle className="seat_cycle" id="pc-13-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-25">
                                <tspan x="3.2" y="13.3">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-24" transform="translate(957.300000, 356.500000)">
                            <circle className="seat_cycle" id="pc-13-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-24">
                                <tspan x="3.2" y="12.8">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-23" transform="translate(933.400000, 358.800000)">
                            <circle className="seat_cycle" id="pc-13-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-23">
                                <tspan x="2.3" y="13.5">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-22" transform="translate(908.600000, 360.900000)">
                            <circle className="seat_cycle" id="pc-13-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-22">
                                <tspan x="2.5" y="13.4">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-21" transform="translate(884.700000, 362.700000)">
                            <circle className="seat_cycle" id="pc-13-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-21">
                                <tspan x="2.6" y="12.6">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-20" transform="translate(860.800000, 364.300000)">
                            <circle className="seat_cycle" id="pc-13-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-20">
                                <tspan x="1.7" y="13">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-19" transform="translate(836.900000, 365.600000)">
                            <circle className="seat_cycle" id="pc-13-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-19">
                                <tspan x="1.8" y="13.7">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-18" transform="translate(812.800000, 366.800000)">
                            <circle className="seat_cycle" id="pc-13-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-18">
                                <tspan x="1.7" y="13.5">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-17" transform="translate(788.900000, 367.700000)">
                            <circle className="seat_cycle" id="pc-13-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-17">
                                <tspan x="1.8" y="13.6">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-16" transform="translate(765.000000, 368.400000)">
                            <circle className="seat_cycle" id="pc-13-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-16">
                                <tspan x="1.9" y="12.9">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-15" transform="translate(741.100000, 368.900000)">
                            <circle className="seat_cycle" id="pc-13-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-15">
                                <tspan x="2" y="13.4">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-14" transform="translate(641.000000, 368.600000)">
                            <circle className="seat_cycle" id="pc-13-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-14">
                                <tspan x="2" y="13.4">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-13" transform="translate(617.100000, 368.100000)">
                            <circle className="seat_cycle" id="pc-13-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-13">
                                <tspan x="1.9" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-12" transform="translate(593.200000, 367.400000)">
                            <circle className="seat_cycle" id="pc-13-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-12">
                                <tspan x="1.8" y="13.6">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-11" transform="translate(569.300000, 366.500000)">
                            <circle className="seat_cycle" id="pc-13-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-11">
                                <tspan x="2.7" y="13.5">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-10" transform="translate(545.200000, 365.300000)">
                            <circle className="seat_cycle" id="pc-13-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-10">
                                <tspan x="1.8" y="13.7">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-9" transform="translate(521.300000, 364.000000)">
                            <circle className="seat_cycle" id="pc-13-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-9">
                                <tspan x="5.7" y="13">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-8" transform="translate(497.400000, 362.400000)">
                            <circle className="seat_cycle" id="pc-13-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-8">
                                <tspan x="5.6" y="13.6">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-7" transform="translate(473.500000, 360.600000)">
                            <circle className="seat_cycle" id="pc-13-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-7">
                                <tspan x="5.5" y="13.4">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-6" transform="translate(448.700000, 358.500000)">
                            <circle className="seat_cycle" id="pc-13-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-6">
                                <tspan x="5.3" y="13.5">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-5" transform="translate(424.800000, 356.200000)">
                            <circle className="seat_cycle" id="pc-13-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-5">
                                <tspan x="5.2" y="13.8">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-4" transform="translate(400.800000, 353.700000)">
                            <circle className="seat_cycle" id="pc-13-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-4">
                                <tspan x="5.2" y="13.3">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-3" transform="translate(376.800000, 351.000000)">
                            <circle className="seat_cycle" id="pc-13-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-3">
                                <tspan x="5.2" y="13">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-2" transform="translate(353.000000, 348.100000)">
                            <circle className="seat_cycle" id="pc-13-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-2">
                                <tspan x="5" y="12.9">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-13-1" transform="translate(329.000000, 345.000000)">
                            <circle className="seat_cycle" id="pc-13-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-13-1">
                                <tspan x="5" y="13">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-30" transform="translate(1086.000000, 324.000000) scale(-1, 1) translate(-1086.000000, -324.000000) translate(1077.000000, 315.000000)">
                            <circle className="seat_cycle" id="pc-12-30" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-30" transform="translate(7.900000, 9.300000) scale(-1, 1) translate(-7.900000, -9.300000) ">
                                <tspan x="0.9" y="13.3">30</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-29" transform="translate(1062.100000, 327.100000) scale(-1, 1) translate(-1062.100000, -327.100000) translate(1053.100000, 318.100000)">
                            <circle className="seat_cycle" id="pc-12-29" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-29" transform="translate(8.000000, 9.200000) scale(-1, 1) translate(-8.000000, -9.200000) ">
                                <tspan x="1" y="13.2">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-28" transform="translate(1038.100000, 330.200000) scale(-1, 1) translate(-1038.100000, -330.200000) translate(1029.100000, 321.200000)">
                            <circle className="seat_cycle" id="pc-12-28" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) " cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-28" transform="translate(8.000000, 9.100000) scale(-1, 1) translate(-8.000000, -9.100000) ">
                                <tspan x="1" y="13.1">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-27" transform="translate(1005.300000, 324.100000)">
                            <circle className="seat_cycle" id="pc-12-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-27">
                                <tspan x="2.2" y="13.2">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-26" transform="translate(981.300000, 326.800000)">
                            <circle className="seat_cycle" id="pc-12-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-26">
                                <tspan x="2.2" y="12.5">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-25" transform="translate(957.300000, 329.300000)">
                            <circle className="seat_cycle" id="pc-12-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-25">
                                <tspan x="2.2" y="13">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-24" transform="translate(933.400000, 331.600000)">
                            <circle className="seat_cycle" id="pc-12-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-24">
                                <tspan x="2.3" y="12.7">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-23" transform="translate(908.600000, 333.700000)">
                            <circle className="seat_cycle" id="pc-12-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-23">
                                <tspan x="2.5" y="12.6">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-22" transform="translate(884.700000, 335.500000)">
                            <circle className="seat_cycle" id="pc-12-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-22">
                                <tspan x="2.6" y="12.8">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-21" transform="translate(860.800000, 337.100000)">
                            <circle className="seat_cycle" id="pc-12-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-21">
                                <tspan x="2.7" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-20" transform="translate(836.900000, 338.400000)">
                            <circle className="seat_cycle" id="pc-12-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-20">
                                <tspan x="2.8" y="12.9">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-19" transform="translate(812.800000, 339.600000)">
                            <circle className="seat_cycle" id="pc-12-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-19">
                                <tspan x="1.7" y="12.7">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-18" transform="translate(788.900000, 340.500000)">
                            <circle className="seat_cycle" id="pc-12-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-18">
                                <tspan x="1.8" y="12.8">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-17" transform="translate(765.000000, 341.200000)">
                            <circle className="seat_cycle" id="pc-12-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-17">
                                <tspan x="1.9" y="13.1">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-16" transform="translate(741.100000, 341.700000)">
                            <circle className="seat_cycle" id="pc-12-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-16">
                                <tspan x="2" y="12.6">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-15" transform="translate(641.000000, 341.400000)">
                            <circle className="seat_cycle" id="pc-12-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-15">
                                <tspan x="2" y="12.6">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-14" transform="translate(617.100000, 340.900000)">
                            <circle className="seat_cycle" id="pc-12-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-14">
                                <tspan x="1.9" y="13.1">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-13" transform="translate(593.200000, 340.200000)">
                            <circle className="seat_cycle" id="pc-12-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-13">
                                <tspan x="1.8" y="12.8">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-12" transform="translate(569.300000, 339.300000)">
                            <circle className="seat_cycle" id="pc-12-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-12">
                                <tspan x="1.7" y="12.7">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-11" transform="translate(545.200000, 338.100000)">
                            <circle className="seat_cycle" id="pc-12-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-10" transform="translate(521.300000, 336.800000)">
                            <circle className="seat_cycle" id="pc-12-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-10">
                                <tspan x="1.7" y="13.2">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-9" transform="translate(497.400000, 335.200000)">
                            <circle className="seat_cycle" id="pc-12-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-9">
                                <tspan x="5.6" y="12.8">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-8" transform="translate(473.500000, 333.400000)">
                            <circle className="seat_cycle" id="pc-12-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-8">
                                <tspan x="5.5" y="12.6">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-7" transform="translate(448.700000, 331.300000)">
                            <circle className="seat_cycle" id="pc-12-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-7">
                                <tspan x="6.3" y="13.7">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-6" transform="translate(424.800000, 329.000000)">
                            <circle className="seat_cycle" id="pc-12-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-6">
                                <tspan x="5.2" y="13">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-5" transform="translate(400.800000, 326.500000)">
                            <circle className="seat_cycle" id="pc-12-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-5">
                                <tspan x="5.2" y="13.5">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-4" transform="translate(376.800000, 323.800000)">
                            <circle className="seat_cycle" id="pc-12-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-4">
                                <tspan x="5.2" y="13.2">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-3" transform="translate(353.000000, 320.900000)">
                            <circle className="seat_cycle" id="pc-12-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-3">
                                <tspan x="6" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-2" transform="translate(329.000000, 317.800000)">
                            <circle className="seat_cycle" id="pc-12-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-2">
                                <tspan x="5" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-12-1" transform="translate(305.100000, 314.700000)">
                            <circle className="seat_cycle" id="pc-12-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-12-1">
                                <tspan x="4.9" y="13.3">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-30" transform="translate(1080.800000, 241.200000)">
                            <circle className="seat_cycle" id="pc-11-30" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-30">
                                <tspan x="3" y="12.7">30</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-29" transform="translate(1057.000000, 245.000000)">
                            <circle className="seat_cycle" id="pc-11-29" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-29">
                                <tspan x="3.2" y="12.9">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-28" transform="translate(1033.000000, 248.700000)">
                            <circle className="seat_cycle" id="pc-11-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-28">
                                <tspan x="2.2" y="13.2">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-27" transform="translate(1009.000000, 252.500000)">
                            <circle className="seat_cycle" id="pc-11-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-27">
                                <tspan x="2.2" y="12.4">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-26" transform="translate(985.000000, 256.300000)">
                            <circle className="seat_cycle" id="pc-11-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-26">
                                <tspan x="2.2" y="12.6">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-25" transform="translate(918.900000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-25">
                                <tspan x="2.6" y="13.2">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-24" transform="translate(895.000000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-24">
                                <tspan x="2.7" y="13.2">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-23" transform="translate(871.000000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-23">
                                <tspan x="2.1" y="13.2">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-22" transform="translate(847.000000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-22">
                                <tspan x="2.3" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-21" transform="translate(823.000000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-20" transform="translate(799.000000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p\-11-19" transform="translate(775.100000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-18" transform="translate(751.100000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-17" transform="translate(727.100000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-17">
                                <tspan x="1.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-16" transform="translate(703.100000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-15" transform="translate(679.100000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-14" transform="translate(655.200000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-13" transform="translate(631.200000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-12" transform="translate(607.200000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-11" transform="translate(583.200000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-10" transform="translate(559.300000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-9" transform="translate(535.300000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-8" transform="translate(511.300000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-7" transform="translate(487.300000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-6" transform="translate(463.300000, 267.100000)">
                            <circle className="seat_cycle" id="pc-11-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-6">
                                <tspan x="5.7" y="12.9">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-5" transform="translate(396.800000, 256.400000)">
                            <circle className="seat_cycle" id="pc-11-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-5">
                                <tspan x="5.2" y="13.6">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-4" transform="translate(372.800000, 252.600000)">
                            <circle className="seat_cycle" id="pc-11-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-4">
                                <tspan x="5.2" y="13.4">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-3" transform="translate(348.800000, 248.800000)">
                            <circle className="seat_cycle" id="pc-11-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-3">
                                <tspan x="5.2" y="13.2">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-2" transform="translate(324.800000, 245.100000)">
                            <circle className="seat_cycle" id="pc-11-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-2">
                                <tspan x="6.2" y="12.9">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-11-1" transform="translate(301.000000, 241.300000)">
                            <circle className="seat_cycle" id="pc-11-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-11-1">
                                <tspan x="5" y="12.7">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-30" transform="translate(1069.000000, 217.800000)">
                            <circle className="seat_cycle" id="pc-10-30" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-30">
                                <tspan x="3.2" y="13.1">30</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-29" transform="translate(1045.200000, 221.600000)">
                            <circle className="seat_cycle" id="pc-10-29" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-29">
                                <tspan x="2.4" y="13.3">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-28" transform="translate(1021.200000, 225.300000)">
                            <circle className="seat_cycle" id="pc-10-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-28">
                                <tspan x="2.4" y="12.6">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-27" transform="translate(997.200000, 229.100000)">
                            <circle className="seat_cycle" id="pc-10-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-27">
                                <tspan x="2.4" y="12.8">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-26" transform="translate(973.200000, 232.800000)">
                            <circle className="seat_cycle" id="pc-10-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-26">
                                <tspan x="2.4" y="13.1">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-25" transform="translate(918.900000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-25">
                                <tspan x="2.6" y="13.2">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-24" transform="translate(895.000000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-24">
                                <tspan x="2.7" y="13.2">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-23" transform="translate(871.000000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-23">
                                <tspan x="2.1" y="13.2">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-22" transform="translate(847.000000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-22">
                                <tspan x="2.3" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-21" transform="translate(823.000000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-20" transform="translate(799.000000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-19" transform="translate(775.100000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-18" transform="translate(751.100000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-17" transform="translate(727.100000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-16" transform="translate(703.100000, 244.100000)">
                            <circle className="seat_cycle" id="pc-10-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-15" transform="translate(679.100000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-14" transform="translate(655.200000, 244.100000)">
                            <circle className="seat_cycle" id="pc-10-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-13" transform="translate(631.200000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-12" transform="translate(607.200000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-11" transform="translate(583.200000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-10" transform="translate(559.300000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-9" transform="translate(535.300000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-8" transform="translate(511.300000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-7" transform="translate(487.300000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10--6" transform="translate(463.300000, 243.100000)">
                            <circle className="seat_cycle" id="pc-10-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-6">
                                <tspan x="5.7" y="12.9">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-5" transform="translate(408.600000, 232.900000)">
                            <circle className="seat_cycle" id="pc-10-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-5">
                                <tspan x="5.4" y="13.1">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-4" transform="translate(384.600000, 229.200000)">
                            <circle className="seat_cycle" id="pc-10-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-4">
                                <tspan x="5.4" y="12.8">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-3" transform="translate(360.600000, 225.400000)">
                            <circle className="seat_cycle" id="pc-10-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-3">
                                <tspan x="5.4" y="13.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-2" transform="translate(336.600000, 221.700000)">
                            <circle className="seat_cycle" id="pc-10-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-2">
                                <tspan x="5.4" y="13.3">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-10-1" transform="translate(312.800000, 217.900000)">
                            <circle className="seat_cycle" id="pc-10-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-10-1">
                                <tspan x="5.2" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-31" transform="translate(1080.900000, 189.800000)">
                            <circle className="seat_cycle" id="pc-9-31" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-31">
                                <tspan x="3.1" y="13.1">31</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-30" transform="translate(1056.800000, 193.500000)">
                            <circle className="seat_cycle" id="pc-9-30" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-30">
                                <tspan x="3" y="13.4">30</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-29" transform="translate(1033.000000, 197.300000)">
                            <circle className="seat_cycle" id="pc-9-29" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-29">
                                <tspan x="2.2" y="12.6">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-28" transform="translate(1009.000000, 201.000000)">
                            <circle className="seat_cycle" id="pc-9-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-28">
                                <tspan x="2.2" y="12.9">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-27" transform="translate(985.000000, 204.800000)">
                            <circle className="seat_cycle" id="pc-9-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-27">
                                <tspan x="3.2" y="13.1">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-26" transform="translate(961.000000, 208.500000)">
                            <circle className="seat_cycle" id="pc-9-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-26">
                                <tspan x="2.2" y="13.4">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-25" transform="translate(906.900000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-25">
                                <tspan x="2.6" y="13.2">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-24" transform="translate(883.000000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-24">
                                <tspan x="2.7" y="13.2">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-23" transform="translate(859.000000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-23">
                                <tspan x="2.1" y="13.2">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-22" transform="translate(835.000000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-22">
                                <tspan x="2.3" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-21" transform="translate(811.000000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-20" transform="translate(787.000000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-19" transform="translate(763.100000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-18" transform="translate(739.100000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-17" transform="translate(715.100000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-16" transform="translate(691.100000, 220.100000)">
                            <circle className="seat_cycle" id="pc-9-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-15" transform="translate(667.100000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-14" transform="translate(643.200000, 220.100000)">
                            <circle className="seat_cycle" id="pc-9-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-13" transform="translate(619.200000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-12" transform="translate(595.200000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-11" transform="translate(571.200000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-10" transform="translate(547.300000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-9" transform="translate(523.300000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-8" transform="translate(499.300000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-7" transform="translate(475.300000, 219.100000)">
                            <circle className="seat_cycle" id="pc-9-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-6" transform="translate(420.800000, 208.600000)">
                            <circle className="seat_cycle" id="pc-9-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-6">
                                <tspan x="5.2" y="13.4">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-5" transform="translate(396.800000, 204.900000)">
                            <circle className="seat_cycle" id="pc-9-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-5">
                                <tspan x="6.2" y="13.1">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-4" transform="translate(372.800000, 201.100000)">
                            <circle className="seat_cycle" id="pc-9-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-4">
                                <tspan x="5.2" y="12.9">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-3" transform="translate(348.800000, 197.400000)">
                            <circle className="seat_cycle" id="pc-9-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-3">
                                <tspan x="7.2" y="12.6">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-2" transform="translate(325.000000, 193.600000)">
                            <circle className="seat_cycle" id="pc-9-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-2">
                                <tspan x="6" y="13.4">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-9-1" transform="translate(300.900000, 189.900000)">
                            <circle className="seat_cycle" id="pc-9-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-9-1">
                                <tspan x="5.1" y="13.1">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-32" transform="translate(1094.000000, 162.000000)">
                            <circle className="seat_cycle" id="pc-8-32" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-32">
                                <tspan x="3.2" y="12.9">32</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-31" transform="translate(1068.000000, 166.000000)">
                            <circle className="seat_cycle" id="pc-8-31" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-31">
                                <tspan x="3.2" y="12.9">31</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-30" transform="translate(1043.900000, 169.800000)">
                            <circle className="seat_cycle" id="pc-8-30" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-30">
                                <tspan x="3.1" y="13.1">30</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-29" transform="translate(1019.700000, 173.500000)">
                            <circle className="seat_cycle" id="pc-8-29" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-29">
                                <tspan x="2.9" y="13.4">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-28" transform="translate(995.900000, 177.300000)">
                            <circle className="seat_cycle" id="pc-8-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-28">
                                <tspan x="2.1" y="12.6">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-27" transform="translate(971.900000, 181.000000)">
                            <circle className="seat_cycle" id="pc-8-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-27">
                                <tspan x="2.1" y="12.9">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-26" transform="translate(947.900000, 184.800000)">
                            <circle className="seat_cycle" id="pc-8-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-26">
                                <tspan x="3.1" y="13.1">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-25" transform="translate(894.900000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-25">
                                <tspan x="2.6" y="13.2">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-24" transform="translate(871.000000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-24">
                                <tspan x="2.7" y="13.2">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-23" transform="translate(847.000000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-23">
                                <tspan x="2.1" y="13.2">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-22" transform="translate(823.000000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-22">
                                <tspan x="2.3" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-21" transform="translate(799.000000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-20" transform="translate(775.000000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-19" transform="translate(751.100000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-18" transform="translate(727.100000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-17" transform="translate(703.100000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-16" transform="translate(679.100000, 197.100000)">
                            <circle className="seat_cycle" id="pc-8-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-15" transform="translate(655.100000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-14" transform="translate(631.200000, 197.100000)">
                            <circle className="seat_cycle" id="pc-8-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-13" transform="translate(607.200000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-12" transform="translate(583.200000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-11" transform="translate(559.200000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-10" transform="translate(535.300000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-9" transform="translate(511.300000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-8" transform="translate(487.300000, 196.100000)">
                            <circle className="seat_cycle" id="pc-8-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-7" transform="translate(432.900000, 184.700000)">
                            <circle className="seat_cycle" id="pc-8-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-7">
                                <tspan x="6.1" y="13.3">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-6" transform="translate(408.900000, 180.900000)">
                            <circle className="seat_cycle" id="pc-8-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-6">
                                <tspan x="6.1" y="13.1">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-5" transform="translate(384.900000, 177.100000)">
                            <circle className="seat_cycle" id="pc-8-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-5">
                                <tspan x="6.1" y="12.9">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-4" transform="translate(360.900000, 173.400000)">
                            <circle className="seat_cycle" id="pc-8-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-4">
                                <tspan x="5.1" y="12.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-3" transform="translate(337.100000, 169.600000)">
                            <circle className="seat_cycle" id="pc-8-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-3">
                                <tspan x="5.9" y="13.4">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-2" transform="translate(312.900000, 165.900000)">
                            <circle className="seat_cycle" id="pc-8-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-2">
                                <tspan x="6.1" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-8-1" transform="translate(288.800000, 162.100000)">
                            <circle className="seat_cycle" id="pc-8-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-8-1">
                                <tspan x="5.2" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-29" transform="translate(1056.500000, 141.300000)">
                            <circle className="seat_cycle" id="pc-7-29" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-29">
                                <tspan x="2.7" y="12.6">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-28" transform="translate(1032.400000, 145.100000)">
                            <circle className="seat_cycle" id="pc-7-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-28">
                                <tspan x="2.6" y="12.8">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-27" transform="translate(1008.600000, 148.800000)">
                            <circle className="seat_cycle" id="pc-7-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-27">
                                <tspan x="2.8" y="13.1">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-26" transform="translate(984.600000, 152.600000)">
                            <circle className="seat_cycle" id="pc-7-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-26">
                                <tspan x="2.8" y="13.3">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-25" transform="translate(960.600000, 156.400000)">
                            <circle className="seat_cycle" id="pc-7-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-25">
                                <tspan x="2.8" y="13.5">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-24" transform="translate(936.600000, 160.100000)">
                            <circle className="seat_cycle" id="pc-7-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-24">
                                <tspan x="2.8" y="12.8">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-23" transform="translate(883.000000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-23">
                                <tspan x="2.1" y="13.2">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-22" transform="translate(859.000000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-22">
                                <tspan x="2.3" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-21" transform="translate(835.000000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-20" transform="translate(811.000000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-19" transform="translate(787.100000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-18" transform="translate(763.100000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-17" transform="translate(739.100000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-16" transform="translate(715.100000, 173.100000)">
                            <circle className="seat_cycle" id="pc-7-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-15" transform="translate(691.100000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-14" transform="translate(667.200000, 173.100000)">
                            <circle className="seat_cycle" id="pc-7-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-13" transform="translate(643.200000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-12" transform="translate(619.200000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-11" transform="translate(595.200000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-10" transform="translate(571.300000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-9" transform="translate(547.300000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-8" transform="translate(523.300000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-7" transform="translate(499.300000, 172.100000)">
                            <circle className="seat_cycle" id="pc-7-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-6" transform="translate(445.200000, 160.200000)">
                            <circle className="seat_cycle" id="pc-7-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-6">
                                <tspan x="5.8" y="12.8">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-5" transform="translate(421.200000, 156.500000)">
                            <circle className="seat_cycle" id="pc-7-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-5">
                                <tspan x="5.8" y="13.5">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-4" transform="translate(397.200000, 152.700000)">
                            <circle className="seat_cycle" id="pc-7-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-4">
                                <tspan x="5.8" y="13.3">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-3" transform="translate(373.200000, 148.900000)">
                            <circle className="seat_cycle" id="pc-7-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-3">
                                <tspan x="5.8" y="13.1">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-2" transform="translate(349.400000, 145.200000)">
                            <circle className="seat_cycle" id="pc-7-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-2">
                                <tspan x="5.6" y="12.8">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-7-1" transform="translate(325.300000, 141.400000)">
                            <circle className="seat_cycle" id="pc-7-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-7-1">
                                <tspan x="5.7" y="12.6">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-28" transform="translate(1044.600000, 117.600000)">
                            <circle className="seat_cycle" id="pc-6-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-28">
                                <tspan x="2.8" y="13.3">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-27" transform="translate(1020.500000, 121.400000)">
                            <circle className="seat_cycle" id="pc-6-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-27">
                                <tspan x="2.7" y="13.5">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-26" transform="translate(996.600000, 125.100000)">
                            <circle className="seat_cycle" id="pc-6-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-26">
                                <tspan x="2.8" y="12.8">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-25" transform="translate(972.700000, 128.900000)">
                            <circle className="seat_cycle" id="pc-6-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-25">
                                <tspan x="2.9" y="13">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-24" transform="translate(948.700000, 132.600000)">
                            <circle className="seat_cycle" id="pc-6-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-24">
                                <tspan x="2.9" y="13.3">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-23" transform="translate(924.600000, 136.400000)">
                            <circle className="seat_cycle" id="pc-6-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-23">
                                <tspan x="2.8" y="13.5">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-22" transform="translate(871.000000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-22">
                                <tspan x="2.3" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-21" transform="translate(847.000000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-20" transform="translate(823.000000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-19" transform="translate(799.100000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-18" transform="translate(775.100000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-17" transform="translate(751.100000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-16" transform="translate(727.100000, 149.100000)">
                            <circle className="seat_cycle" id="pc-6-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-15" transform="translate(703.100000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-14" transform="translate(679.200000, 149.100000)">
                            <circle className="seat_cycle" id="pc-6-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-13" transform="translate(655.200000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-12" transform="translate(631.200000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-11" transform="translate(607.200000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-10" transform="translate(583.300000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-9" transform="translate(559.300000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-8" transform="translate(535.300000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-7" transform="translate(511.300000, 148.100000)">
                            <circle className="seat_cycle" id="pc-6-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-6" transform="translate(457.200000, 136.500000)">
                            <circle className="seat_cycle" id="pc-6-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-6">
                                <tspan x="5.8" y="13.5">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-5" transform="translate(433.100000, 132.700000)">
                            <circle className="seat_cycle" id="pc-6-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-5">
                                <tspan x="5.9" y="13.3">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-4" transform="translate(409.100000, 129.000000)">
                            <circle className="seat_cycle" id="pc-6-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-4">
                                <tspan x="5.9" y="13">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-3" transform="translate(385.200000, 125.200000)">
                            <circle className="seat_cycle" id="pc-6-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-3">
                                <tspan x="5.8" y="13.8">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-2" transform="translate(361.300000, 121.500000)">
                            <circle className="seat_cycle" id="pc-6-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-2">
                                <tspan x="5.7" y="13.5">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-6-1" transform="translate(337.200000, 117.700000)">
                            <circle className="seat_cycle" id="pc-6-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-6-1">
                                <tspan x="4.8" y="13.3">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-27" transform="translate(1032.700000, 93.900000)">
                            <circle className="seat_cycle" id="pc-5-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-27">
                                <tspan x="2.9" y="13">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-26" transform="translate(1008.500000, 97.700000)">
                            <circle className="seat_cycle" id="pc-5-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-26">
                                <tspan x="2.7" y="13.2">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-25" transform="translate(984.700000, 101.400000)">
                            <circle className="seat_cycle" id="pc-5-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-25">
                                <tspan x="2.9" y="13.5">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-24" transform="translate(960.700000, 105.200000)">
                            <circle className="seat_cycle" id="pc-5-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-24">
                                <tspan x="2.9" y="12.7">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-23" transform="translate(936.700000, 108.900000)">
                            <circle className="seat_cycle" id="pc-5-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-23">
                                <tspan x="2.9" y="13">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-22" transform="translate(912.700000, 112.700000)">
                            <circle className="seat_cycle" id="pc-5-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-22">
                                <tspan x="1.9" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-21" transform="translate(859.000000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-20" transform="translate(835.000000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-19" transform="translate(811.100000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-18" transform="translate(787.100000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-17" transform="translate(763.100000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-16" transform="translate(739.100000, 125.100000)">
                            <circle className="seat_cycle" id="pc-5-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-15" transform="translate(715.100000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-14" transform="translate(691.200000, 125.100000)">
                            <circle className="seat_cycle" id="pc-5-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-13" transform="translate(667.200000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-12" transform="translate(643.200000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-11" transform="translate(619.200000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-10" transform="translate(595.300000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-9" transform="translate(571.300000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-8" transform="translate(547.300000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-7" transform="translate(523.300000, 124.100000)">
                            <circle className="seat_cycle" id="pc-5-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-6" transform="translate(469.100000, 112.800000)">
                            <circle className="seat_cycle" id="pc-5-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-6">
                                <tspan x="5.9" y="13.2">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-5" transform="translate(445.100000, 109.000000)">
                            <circle className="seat_cycle" id="pc-5-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-5">
                                <tspan x="5.9" y="13">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-4" transform="translate(421.100000, 105.300000)">
                            <circle className="seat_cycle" id="pc-5-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-4">
                                <tspan x="4.9" y="12.7">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-3" transform="translate(397.100000, 101.500000)">
                            <circle className="seat_cycle" id="pc-5-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-3">
                                <tspan x="5.9" y="13.5">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-2" transform="translate(373.300000, 97.800000)">
                            <circle className="seat_cycle" id="pc-5-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-2">
                                <tspan x="5.7" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-5-1" transform="translate(349.100000, 94.000000)">
                            <circle className="seat_cycle" id="pc-5-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-5-1">
                                <tspan x="5.9" y="13">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-27" transform="translate(1021.900000, 72.500000)">
                            <circle className="seat_cycle" id="pc-4-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-27">
                                <tspan x="2.1" y="13.4">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-26" transform="translate(997.800000, 76.300000)">
                            <circle className="seat_cycle" id="pc-4-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-26">
                                <tspan x="2" y="12.6">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-25" transform="translate(973.900000, 80.000000)">
                            <circle className="seat_cycle" id="pc-4-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-25">
                                <tspan x="2.1" y="12.9">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-24" transform="translate(950.000000, 83.800000)">
                            <circle className="seat_cycle" id="pc-4-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-24">
                                <tspan x="2.2" y="13.1">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-23" transform="translate(926.000000, 87.600000)">
                            <circle className="seat_cycle" id="pc-4-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-23">
                                <tspan x="2.2" y="13.3">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-22" transform="translate(901.900000, 91.300000)">
                            <circle className="seat_cycle" id="pc-4-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-22">
                                <tspan x="2.1" y="13.6">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-21" transform="translate(859.000000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-20" transform="translate(835.000000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-19" transform="translate(811.100000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-18" transform="translate(787.100000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-17" transform="translate(763.100000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-16" transform="translate(739.100000, 101.100000)">
                            <circle className="seat_cycle" id="pc-4-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-15" transform="translate(715.100000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-14" transform="translate(691.200000, 101.100000)">
                            <circle className="seat_cycle" id="pc-4-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-13" transform="translate(667.200000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-12" transform="translate(643.200000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-11" transform="translate(619.200000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-10" transform="translate(595.300000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-9" transform="translate(571.300000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-8" transform="translate(547.300000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-7" transform="translate(523.300000, 100.100000)">
                            <circle className="seat_cycle" id="pc-4-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-6" transform="translate(479.900000, 91.400000)">
                            <circle className="seat_cycle" id="pc-4-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-6">
                                <tspan x="6.1" y="13.6">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-5" transform="translate(455.800000, 87.700000)">
                            <circle className="seat_cycle" id="pc-4-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-5">
                                <tspan x="5.2" y="13.3">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-4" transform="translate(431.800000, 83.900000)">
                            <circle className="seat_cycle" id="pc-4-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-4">
                                <tspan x="5.2" y="13.1">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-3" transform="translate(407.900000, 80.100000)">
                            <circle className="seat_cycle" id="pc-4-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-3">
                                <tspan x="6.1" y="12.9">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-2" transform="translate(384.000000, 76.400000)">
                            <circle className="seat_cycle" id="pc-4-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-2">
                                <tspan x="5" y="12.6">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-4-1" transform="translate(359.900000, 72.600000)">
                            <circle className="seat_cycle" id="pc-4-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-4-1">
                                <tspan x="5.1" y="13.4">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-30" transform="translate(1068.200000, 39.700000)">
                            <circle className="seat_cycle" id="pc-3-30" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-30">
                                <tspan x="2.4" y="13.2">30</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-29" transform="translate(1044.700000, 43.400000)">
                            <circle className="seat_cycle" id="pc-3-29" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-29">
                                <tspan x="2.9" y="12.5">29</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-28" transform="translate(1020.600000, 47.200000)">
                            <circle className="seat_cycle" id="pc-3-28" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-28">
                                <tspan x="2.8" y="12.7">28</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-27" transform="translate(996.500000, 50.900000)">
                            <circle className="seat_cycle" id="pc-3-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-27">
                                <tspan x="2.7" y="13">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-26" transform="translate(972.700000, 54.700000)">
                            <circle className="seat_cycle" id="pc-3-26" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-26">
                                <tspan x="2.9" y="13.2">26</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-25" transform="translate(948.700000, 58.400000)">
                            <circle className="seat_cycle" id="pc-3-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-25">
                                <tspan x="1.9" y="13.5">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-24" transform="translate(924.700000, 62.200000)">
                            <circle className="seat_cycle" id="pc-3-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-24">
                                <tspan x="2.9" y="12.7">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-23" transform="translate(900.700000, 65.900000)">
                            <circle className="seat_cycle" id="pc-3-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-23">
                                <tspan x="2.9" y="13">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-22" transform="translate(847.000000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-22">
                                <tspan x="2.5" y="13.2">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-21" transform="translate(823.000000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-21">
                                <tspan x="2.5" y="13.2">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-20" transform="translate(799.000000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-19" transform="translate(775.100000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-18" transform="translate(751.100000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-17" transform="translate(727.100000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-16" transform="translate(703.100000, 78.100000)">
                            <circle className="seat_cycle" id="pc-3-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-15" transform="translate(679.100000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-14" transform="translate(655.200000, 78.100000)">
                            <circle className="seat_cycle" id="pc-3-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-13" transform="translate(631.200000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-12" transform="translate(607.200000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-11" transform="translate(583.200000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-10" transform="translate(559.300000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-9" transform="translate(535.300000, 77.100000)">
                            <circle className="seat_cycle" id="pc-3-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-9">
                                <tspan x="5.7" y="12.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-8" transform="translate(481.100000, 66.000000)">
                            <circle className="seat_cycle" id="pc-3-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-8">
                                <tspan x="5.9" y="13">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-7" transform="translate(457.100000, 62.300000)">
                            <circle className="seat_cycle" id="pc-3-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-7">
                                <tspan x="5.9" y="13.7">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-6" transform="translate(433.100000, 58.500000)">
                            <circle className="seat_cycle" id="pc-3-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-6">
                                <tspan x="5.9" y="13.5">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-5" transform="translate(409.100000, 54.800000)">
                            <circle className="seat_cycle" id="pc-3-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-5">
                                <tspan x="5.9" y="13.2">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-4" transform="translate(385.300000, 51.000000)">
                            <circle className="seat_cycle" id="pc-3-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-4">
                                <tspan x="5.7" y="13">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-3" transform="translate(361.200000, 47.300000)">
                            <circle className="seat_cycle" id="pc-3-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-3">
                                <tspan x="5.8" y="13.7">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-2" transform="translate(337.100000, 43.500000)">
                            <circle className="seat_cycle" id="pc-3-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-2">
                                <tspan x="5.9" y="13.5">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-3-1" transform="translate(313.600000, 39.800000)">
                            <circle className="seat_cycle" id="pc-3-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-3-1">
                                <tspan x="5.4" y="13.2">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-27" transform="translate(1042.400000, 18.000000)">
                            <circle className="seat_cycle" id="pc-2-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-27">
                                <tspan x="2.6" y="12.9">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-26" transform="translate(1018.300000, 21.800000)">
                            <circle className="seat_cycle" id="pc-2-27" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-27">
                                <tspan x="2.5" y="13.1">27</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-25" transform="translate(994.100000, 25.600000)">
                            <circle className="seat_cycle" id="pc-2-25" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-25">
                                <tspan x="2.3" y="13.3">25</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-24" transform="translate(970.300000, 29.300000)">
                            <circle className="seat_cycle" id="pc-2-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-24">
                                <tspan x="2.5" y="12.6">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-23" transform="translate(946.300000, 33.100000)">
                            <circle className="seat_cycle" id="pc-2-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-23">
                                <tspan x="2.5" y="12.8">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-22" transform="translate(922.300000, 36.800000)">
                            <circle className="seat_cycle" id="pc-2-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-22">
                                <tspan x="2.5" y="13.1">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-21" transform="translate(898.300000, 40.600000)">
                            <circle className="seat_cycle" id="pc-2-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-21">
                                <tspan x="2.5" y="13.3">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-20" transform="translate(835.000000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-20">
                                <tspan x="2.7" y="13.2">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-19" transform="translate(811.100000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-19">
                                <tspan x="1.4" y="13.2">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-18" transform="translate(787.100000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-17" transform="translate(763.100000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-16" transform="translate(739.100000, 53.100000)">
                            <circle className="seat_cycle" id="pc-2-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-15" transform="translate(715.100000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-14" transform="translate(691.200000, 53.100000)">
                            <circle className="seat_cycle" id="pc-2-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-13" transform="translate(667.200000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-12" transform="translate(643.200000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-11" transform="translate(619.200000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-10" transform="translate(595.300000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-9" transform="translate(571.300000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-8" transform="translate(547.300000, 52.100000)">
                            <circle className="seat_cycle" id="pc-2-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-7" transform="translate(483.500000, 40.700000)">
                            <circle className="seat_cycle" id="pc-2-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-7">
                                <tspan x="5.5" y="13.3">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-6" transform="translate(459.500000, 36.900000)">
                            <circle className="seat_cycle" id="pc-2-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-6">
                                <tspan x="5.5" y="13.1">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-5" transform="translate(435.500000, 33.200000)">
                            <circle className="seat_cycle" id="pc-2-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-5">
                                <tspan x="5.5" y="12.8">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-4" transform="translate(411.500000, 29.400000)">
                            <circle className="seat_cycle" id="pc-2-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-4">
                                <tspan x="5.5" y="12.6">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-3" transform="translate(387.700000, 25.700000)">
                            <circle className="seat_cycle" id="pc-2-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-3">
                                <tspan x="5.3" y="13.3">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-2" transform="translate(363.500000, 21.900000)">
                            <circle className="seat_cycle" id="pc-2-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-2">
                                <tspan x="5.5" y="13.1">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-2-1" transform="translate(339.400000, 18.100000)">
                            <circle className="seat_cycle" id="pc-2-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-2-1">
                                <tspan x="5.6" y="12.9">1</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-24" transform="translate(1007.300000, 0.000000)">
                            <circle className="seat_cycle" id="pc-1-24" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-24">
                                <tspan x="2.5" y="12.9">24</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-23" transform="translate(983.100000, 3.700000)">
                            <circle className="seat_cycle" id="pc-1-23" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-23">
                                <tspan x="2.3" y="13.2">23</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-22" transform="translate(959.300000, 7.500000)">
                            <circle className="seat_cycle" id="pc-1-22" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-22">
                                <tspan x="2.5" y="12.4">22</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-21" transform="translate(935.400000, 11.200000)">
                            <circle className="seat_cycle" id="pc-1-21" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-21">
                                <tspan x="3.4" y="12.7">21</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-20" transform="translate(911.300000, 15.000000)">
                            <circle className="seat_cycle" id="pc-1-20" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-20">
                                <tspan x="2.5" y="12.9">20</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-19" transform="translate(887.300000, 18.800000)">
                            <circle className="seat_cycle" id="pc-1-19" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-19">
                                <tspan x="1.5" y="13.1">19</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-18" transform="translate(823.100000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-18" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-18">
                                <tspan x="1.6" y="13.2">18</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-17" transform="translate(799.100000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-17" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-17">
                                <tspan x="2.8" y="13.2">17</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-16" transform="translate(775.100000, 30.100000)">
                            <circle className="seat_cycle" id="pc-1-16" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-16">
                                <tspan x="2" y="13.2">16</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-15" transform="translate(751.100000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-15" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-15">
                                <tspan x="1.9" y="12.9">15</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-14" transform="translate(727.200000, 30.100000)">
                            <circle className="seat_cycle" id="pc-1-14" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-14">
                                <tspan x="1.8" y="12.9">14</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-13" transform="translate(703.200000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-13" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-13">
                                <tspan x="1.8" y="12.9">13</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-12" transform="translate(679.200000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-12" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-12">
                                <tspan x="1.8" y="12.9">12</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-11" transform="translate(655.200000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-11" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-11">
                                <tspan x="2.8" y="12.9">11</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-10" transform="translate(631.300000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-10" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-10">
                                <tspan x="1.7" y="12.9">10</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-9" transform="translate(607.300000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-9" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-9">
                                <tspan x="5.7" y="13.9">9</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-8" transform="translate(583.300000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-8" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-8">
                                <tspan x="5.7" y="12.9">8</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-7" transform="translate(559.300000, 29.100000)">
                            <circle className="seat_cycle" id="pc-1-7" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-7">
                                <tspan x="5.7" y="12.9">7</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-6" transform="translate(494.500000, 18.900000)">
                            <circle className="seat_cycle" id="pc-1-6" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-6">
                                <tspan x="5.5" y="13.1">6</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-5" transform="translate(470.500000, 15.100000)">
                            <circle className="seat_cycle" id="pc-1-5" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-5">
                                <tspan x="5.5" y="12.9">5</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-4" transform="translate(446.400000, 11.300000)">
                            <circle className="seat_cycle" id="pc-1-4" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-4">
                                <tspan x="5.6" y="12.7">4</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-3" transform="translate(422.500000, 7.600000)">
                            <circle className="seat_cycle" id="pc-1-3" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-3">
                                <tspan x="5.5" y="13.4">3</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-2" transform="translate(398.700000, 3.800000)">
                            <circle className="seat_cycle" id="pc-1-2" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-2">
                                <tspan x="5.3" y="13.2">2</tspan>
                            </text>
                        </g>
                        <g className="seat" onClick={(e) => this.props.onClick(e.currentTarget)} id="p-1-1" transform="translate(374.500000, 0.100000)">
                            <circle className="seat_cycle" id="pc-1-1" cx="9" cy="9" r="9"></circle>
                            <text className="seat_text" id="pn-1-1">
                                <tspan x="5.5" y="12.9">1</tspan>
                            </text>
                        </g>
                    </g>

                    <g id="other">
                        <g id="curves" className="curves" transform="translate(19.000000, 0.000000)">
                            <path d="M1118.5,3 C1125,3 1126.9,11.8 1121,14.5 C1095,26.5 1049.5,46.2 993.7,64.7 C920.9,88.9 830.5,110.7 742.9,110.7 C655.3,110.7 564.9,88.9 492.1,64.7 C436.3,46.2 390.8,26.5 364.8,14.4 C358.9,11.7 360.9,2.9 367.3,2.9 L1118.5,2.9 L1118.5,3 Z"></path>
                            <path d="M515.1,71.8 C509,69.9 504.6,77.5 509.1,81.9 C569.8,140.1 652.2,175.9 743,175.9 C833.8,175.9 916.2,140.1 976.9,81.9 C981.5,77.5 977,69.9 970.9,71.8 C902.5,92.9 821.6,110.6 743,110.6 C664.4,110.6 583.5,92.9 515.1,71.8 Z" opacity="0.7"></path>
                            <path d="M304.4,116 L273,116 C271.6,116 270.5,114.9 270.5,113.5 C270.5,112.1 271.6,111 273,111 L302.6,111 L338.7,2.2 C339.1,0.9 340.5,0.2 341.9,0.6 C343.3,1 343.9,2.4 343.5,3.8 L306.9,114.3 C306.4,115.3 305.4,116 304.4,116 Z"></path>
                            <path d="M1215,116 L1182.8,116 C1181.7,116 1180.8,115.3 1180.4,114.3 L1142.6,3.8 C1142.2,2.5 1142.8,1.1 1144.2,0.6 C1145.5,0.2 1146.9,0.8 1147.4,2.2 L1184.7,111 L1215.1,111 C1216.5,111 1217.6,112.1 1217.6,113.5 C1217.6,114.9 1216.4,116 1215,116 Z"></path>
                            <path d="M743,1105.3 C743,1105.3 743,1105.3 743,1105.3 C631.2,1104.7 526.7,1083.9 432.3,1043.7 C347.7,1007.7 272.5,956.6 208.6,892 C151.6,834.4 104.4,765.9 72,693.9 C41.6,626.4 24.6,556.8 22.6,492.8 C22.6,491.4 23.6,490.3 25,490.2 C26.4,490.2 27.5,491.2 27.6,492.6 C31.7,627.8 100.6,775.8 212.1,888.5 C306.8,984.3 475.8,1098.8 743,1100.3 C744.4,1100.3 745.5,1101.4 745.5,1102.8 C745.5,1104.2 744.4,1105.3 743,1105.3 Z"></path>
                            <path d="M743,1105.3 C741.6,1105.3 740.5,1104.2 740.5,1102.8 C740.5,1101.4 741.6,1100.3 743,1100.3 C1010.1,1098.8 1179.1,984.3 1273.9,888.5 C1385.4,775.8 1454.4,627.8 1458.4,492.6 C1458.4,491.2 1459.6,490.2 1461,490.2 C1462.4,490.2 1463.5,491.4 1463.40632,492.8 C1461.5,556.8 1444.4,626.4 1414,693.9 C1381.6,765.9 1334.4,834.4 1277.4,892 C1213.5,956.6 1138.2,1007.6 1053.7,1043.7 C959.3,1084 854.8,1104.7 743,1105.3 C743,1105.3 743,1105.3 743,1105.3 Z"></path>
                            <path d="M742.4,1359.1 C657.3,1359.1 572.3,1345.5 489.5,1318.7 C408.6,1292.5 333.2,1254.8 265.4,1206.6 C124.9,1106.7 30.8,970.7 0.4,823.7 C0.1,822.3 1,821 2.3,820.7 C3.7,820.4 5,821.3 5.3,822.6 C67,1120.7 390.7,1354.1 742.4,1354.1 C742.6,1354.1 742.8,1354.1 743,1354.1 C743,1354.1 743,1354.1 743,1354.1 C744.4,1354.1 745.5,1355.2 745.5,1356.6 C745.5,1358 744.4,1359.1 743,1359.1 C742.8,1359.1 742.6,1359.1 742.4,1359.1 Z"></path>
                            <path d="M743.6,1359.1 C743.4,1359.1 743.2,1359.1 743,1359.1 C741.6,1359.1 740.5,1358 740.5,1356.6 C740.5,1355.2 741.6,1354.1 743,1354.1 C743,1354.1 743,1354.1 743,1354.1 C743.2,1354.1 743.4,1354.1 743.6,1354.1 C1095.3,1354.1 1419,1120.7 1480.7,822.6 C1481,821.2 1482.3,820.4 1483.7,820.7 C1485.1,821 1485.9,822.3 1485.6,823.7 C1455.2,970.7 1361.1,1106.7 1220.6,1206.6 C1152.8,1254.8 1077.5,1292.5 996.5,1318.7 C913.7,1345.5 828.6,1359.1 743.6,1359.1 Z"></path>
                            <path d="M675.5,882.8 C675.4,882.8 675.3,882.8 675.2,882.8 C548.1,866.3 431.2,804.1 345.9,707.7 C259.9,610.5 212.5,485.4 212.5,355.4 C212.5,312.4 217.6,269.6 227.7,228.4 C237.5,188.2 252.1,149.2 271,112.4 C271.6,111.2 273.1,110.7 274.4,111.3 C275.6,111.9 276.1,113.4 275.5,114.7 C237.1,189.3 217.6,270.3 217.6,355.4 C217.6,619.2 414.7,843.9 676,877.9 C677.4,878.1 678.3,879.3 678.2,880.7 C677.8,881.9 676.7,882.8 675.5,882.8 Z"></path>
                            <path d="M811.5,883.1 C810.3,883.1 809.2,882.2 809,880.9 C808.8,879.5 809.8,878.3 811.2,878.1 C1073.4,844.9 1271.1,620.2 1271.1,355.4 C1271.1,270.6 1251.5,189.6 1213,114.7 C1212.4,113.5 1212.9,112 1214.1,111.3 C1215.3,110.7 1216.8,111.2 1217.5,112.4 C1236.4,149.2 1251,188.3 1260.9,228.4 C1271,269.7 1276.2,312.5 1276.2,355.4 C1276.2,485.7 1228.7,611.1 1142.4,708.4 C1056.8,804.9 939.4,867 811.9,883.1 C811.7,883 811.6,883.1 811.5,883.1 Z"></path>
                        </g>
                        <g id="titles" className="titles" transform="translate(-0.000000, 41.000000)">
                            <text className="title_seat_row" id="title_17">
                                <tspan x="753" y="631">17</tspan>
                            </text>
                            <text className="title_seat_row" id="title_16">
                                <tspan x="753" y="604">16</tspan>
                            </text>
                            <text className="title_seat_row" id="title_15">
                                <tspan x="753" y="576">15</tspan>
                            </text>
                            <text className="title_seat_row" id="title_14">
                                <tspan x="753" y="549">14</tspan>
                            </text>
                            <text className="title_seat_row" id="title_13">
                                <tspan x="753" y="522">13</tspan>
                            </text>
                            <text className="title_seat_row" id="title_12">
                                <tspan x="753" y="494">12</tspan>
                            </text>
                            <text className="title_seat_row" id="title_11">
                                <tspan x="1017" y="414">11</tspan>
                            </text>
                            <text className="title_seat_row" id="title_10">
                                <tspan x="1009" y="390">10</tspan>
                            </text>
                            <text className="title_seat_row" id="title_9">
                                <tspan x="1003" y="365">9</tspan>
                            </text>
                            <text className="title_seat_row" id="title_8">
                                <tspan x="991" y="343">8</tspan>
                            </text>
                            <text className="title_seat_row" id="title_7">
                                <tspan x="977" y="319">7</tspan>
                            </text>
                            <text className="title_seat_row" id="title_6">
                                <tspan x="967" y="296">6</tspan>
                            </text>
                            <text className="title_seat_row" id="title_5">
                                <tspan x="955" y="272">5</tspan>
                            </text>
                            <text className="title_seat_row" id="title_4">
                                <tspan x="949" y="246">4</tspan>
                            </text>
                            <text className="title_seat_row" id="title_3">
                                <tspan x="943" y="223">3</tspan>
                            </text>
                            <text className="title_seat_row" id="title_2">
                                <tspan x="934" y="200">2</tspan>
                            </text>
                            <text className="title_seat_row" id="title_1">
                                <tspan x="921" y="177">1</tspan>
                            </text>
                            <text className="title_seat_row" id="title_11">
                                <tspan x="492" y="414">11</tspan>
                            </text>
                            <text className="title_seat_row" id="title_10">
                                <tspan x="498" y="390">10</tspan>
                            </text>
                            <text className="title_seat_row" id="title_9">
                                <tspan x="515" y="365">9</tspan>
                            </text>
                            <text className="title_seat_row" id="title_8">
                                <tspan x="527" y="343">8</tspan>
                            </text>
                            <text className="title_seat_row" id="title_7">
                                <tspan x="540" y="319">7</tspan>
                            </text>
                            <text className="title_seat_row" id="title_6">
                                <tspan x="552" y="296">6</tspan>
                            </text>
                            <text className="title_seat_row" id="title_5">
                                <tspan x="564" y="272">5</tspan>
                            </text>
                            <text className="title_seat_row" id="title_4">
                                <tspan x="569" y="246">4</tspan>
                            </text>
                            <text className="title_seat_row" id="title_3">
                                <tspan x="577" y="223">3</tspan>
                            </text>
                            <text className="title_seat_row" id="title_2">
                                <tspan x="585" y="200">2</tspan>
                            </text>
                            <text className="title_seat_row" id="title_1">
                                <tspan x="594" y="177">1</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_9" transform="translate(1509.000000, 836.500000) rotate(-74.000000) translate(-1509.000000, -836.500000) ">
                                <tspan x="1478" y="842">ЛОЖА 9</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_8" transform="translate(1440.000000, 982.500000) rotate(-57.000000) translate(-1440.000000, -982.500000) ">
                                <tspan x="1409" y="988">ЛОЖА 8</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_7" transform="translate(1330.000000, 1117.500000) rotate(-41.000000) translate(-1330.000000, -1117.500000) ">
                                <tspan x="1299" y="1123">ЛОЖА 7</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_6" transform="translate(1175.000000, 1229.500000) rotate(-29.000000) translate(-1175.000000, -1229.500000) ">
                                <tspan x="1144" y="1235">ЛОЖА 6</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_5">
                                <tspan x="730" y="1342">ЛОЖА 5</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_4" transform="translate(346.000000, 1226.500000) rotate(32.000000) translate(-346.000000, -1226.500000) ">
                                <tspan x="315" y="1232">ЛОЖА 4</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_3" transform="translate(180.000000, 1107.500000) rotate(45.000000) translate(-180.000000, -1107.500000) ">
                                <tspan x="149" y="1113">ЛОЖА 3</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_2" transform="translate(75.000000, 975.500000) rotate(60.000000) translate(-75.000000, -975.500000) ">
                                <tspan x="44" y="981">ЛОЖА 2</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_1" transform="translate(18.000000, 844.500000) rotate(73.000000) translate(-18.000000, -844.500000) ">
                                <tspan x="-13" y="850">ЛОЖА 1</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_11" transform="translate(1485.843800, 541.440788) rotate(-78.000000) translate(-1485.843800, -541.440788) ">
                                <tspan x="1450.8438" y="546.940788">ЛОЖА 11</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_10" transform="translate(1427.078536, 706.999315) rotate(-62.000000) translate(-1427.078536, -706.999315) ">
                                <tspan x="1391.57854" y="712.499315">ЛОЖА 10</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_9" transform="translate(1332.000000, 842.500000) rotate(-48.000000) translate(-1332.000000, -842.500000) ">
                                <tspan x="1301" y="848">ЛОЖА 9</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_8" transform="translate(1164.000000, 977.500000) rotate(-30.000000) translate(-1164.000000, -977.500000) ">
                                <tspan x="1133" y="983">ЛОЖА 8</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_7" transform="translate(1016.000000, 1041.500000) rotate(-19.000000) translate(-1016.000000, -1041.500000) ">
                                <tspan x="985" y="1047">ЛОЖА 7</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_5" transform="translate(502.000000, 1041.500000) rotate(17.000000) translate(-502.000000, -1041.500000) ">
                                <tspan x="471" y="1047">ЛОЖА 5</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_4" transform="translate(353.000000, 972.500000) rotate(34.000000) translate(-353.000000, -972.500000) ">
                                <tspan x="322" y="978">ЛОЖА 4</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_3" transform="translate(182.000000, 829.500000) rotate(49.000000) translate(-182.000000, -829.500000) ">
                                <tspan x="151" y="835">ЛОЖА 3</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_2" transform="translate(89.000000, 693.500000) rotate(66.000000) translate(-89.000000, -693.500000) ">
                                <tspan x="58" y="699">ЛОЖА 2</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_1" transform="translate(37.000000, 540.500000) rotate(76.000000) translate(-37.000000, -540.500000) ">
                                <tspan x="6" y="546">ЛОЖА 1</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_10" transform="translate(1309.078536, 328.999315) rotate(-89.000000) translate(-1309.078536, -328.999315) ">
                                <tspan x="1273.57854" y="334.499315">ЛОЖА 10</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_9" transform="translate(1284.000000, 488.500000) rotate(-70.000000) translate(-1284.000000, -488.500000) ">
                                <tspan x="1253" y="494">ЛОЖА 9</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_8" transform="translate(1229.000000, 608.500000) rotate(-56.000000) translate(-1229.000000, -608.500000) ">
                                <tspan x="1198" y="614">ЛОЖА 8</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_7" transform="translate(1132.000000, 723.500000) rotate(-45.000000) translate(-1132.000000, -723.500000) ">
                                <tspan x="1101" y="729">ЛОЖА 7</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_6" transform="translate(944.000000, 832.500000) rotate(-18.000000) translate(-944.000000, -832.500000) ">
                                <tspan x="913" y="838">ЛОЖА 6</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_5" transform="translate(582.000000, 832.500000) rotate(17.000000) translate(-582.000000, -832.500000) ">
                                <tspan x="551" y="838">ЛОЖА 5</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_4" transform="translate(396.000000, 725.500000) rotate(43.000000) translate(-396.000000, -725.500000) ">
                                <tspan x="365" y="731">ЛОЖА 4</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_3" transform="translate(297.000000, 609.500000) rotate(58.000000) translate(-297.000000, -609.500000) ">
                                <tspan x="266" y="615">ЛОЖА 3</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_2" transform="translate(243.000000, 492.500000) rotate(73.000000) translate(-243.000000, -492.500000) ">
                                <tspan x="212" y="498">ЛОЖА 2</tspan>
                            </text>
                            <text className="title_lodge" id="title_lodge_1" transform="translate(217.000000, 329.500000) rotate(89.000000) translate(-217.000000, -329.500000) ">
                                <tspan x="186" y="335">ЛОЖА 1</tspan>
                            </text>
                            <text id="title_area">
                                <tspan x="703" y="1167">БАЛКОН</tspan>
                            </text>
                            <text className="title_area" id="title_lodges_mezzanine">
                                <tspan x="623" y="1023">ЛОЖИ БЕЛЬЭТАЖА</tspan>
                            </text>
                            <text className="title_area" id="title_lodges_benoir">
                                <tspan x="644" y="743">ЛОЖИ БЕНУАРА</tspan>
                            </text>
                            <text className="title_area" id="title_parterre">
                                <tspan x="706" y="461">ПАРТЕР</tspan>
                            </text>
                            <text className="title_area" id="title_orchestra">
                                <tspan x="694" y="111">ОРКЕСТР</tspan>
                            </text>
                            <text className="title_area" id="title_scene">
                                <tspan x="710" y="27">СЦЕНА</tspan>
                            </text>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}
