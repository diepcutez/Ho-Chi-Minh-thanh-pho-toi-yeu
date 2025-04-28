// Khởi tạo bản đồ

var map = L.map('map', {
    center: [10.8231, 106.6297],
    zoom: 12,
    fullscreenControl: true,
    // OR
    fullscreenControl: {
        pseudoFullscreen: false // if true, fullscreen to page width and height
    }

})

var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}');

map.addLayer(Esri_WorldStreetMap)

// Thêm bản đồ nền

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	//attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

map.addLayer(Esri_WorldImagery)

// Thêm điểm
var icon = L.icon({
    iconSize: [ 35, 30],
    iconUrl: "kyhieu.png",

})

var customOptions = {
    'maxWidth': 400,
    'width': 700,
    'height': '100px',
    'className' : 'popupCustom'
}

// Các di tích lịch sử
var point1 = L.marker([10.777066601265766, 106.69532435865737], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Dinh Độc Lập</p> <p>Di tích Quốc gia đặc biệt</p> <a href="https://dinhdoclap.gov.vn/" target="_blank">[Xem thêm]</a> </div> <br><div><Image src="https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/16/dinh-doc-lap-1-1545.jpg" style="width: 250px"></Image></div>')
map.addLayer(point1)

var point2 =L.marker([11.14223060273297, 106.46166973457092], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Địa đạo Củ Chi</p> <p>Di tích Quốc gia đặc biệt</p> <a href="http://diadaocuchi.com.vn/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://dulichlive.com/sai-gon/wp-content/uploads/sites/9/2020/08/Kinh-nghiem-di-dia-dao-Cu-Chi-04.jpg" style="width: 250px"></Image></div>')
map.addLayer(point2)

var point3 =L.marker([10.407474331078008, 106.8968934435962], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Căn cứ rừng Sác</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://congan.com.vn/tin-chinh/rung-sac-ban-anh-hung-ca-bat-tu-sau-50-nam-giai-phong_176904.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://file3.qdnd.vn/data/images/0/2022/10/27/vuhuyen/rung-sac%201.jpg?dpi=150&quality=100&w=870" style="width: 250px"></Image></div>')
map.addLayer(point3)

var point4 =L.marker([10.889204617661255, 106.59515257358849], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Dinh quận Hóc Môn</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://www.hcmcpv.org.vn/tin-tuc/-video-ve-di-tich-lich-su-dinh-quan-hoc-mon-1491911140" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://quantri.hocmon.gov.vn//UploadImages/phongvanhoathongtin/Dinh%20qu%E1%BA%ADn.jpg" style="width: 250px"></Image></div>')
map.addLayer(point4)

var point5 =L.marker([10.868132370797833, 106.56114488100883], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Ngã ba Giồng</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://quantri.hocmon.gov.vn/UploadImages/hocmon/banvanhoa/2022_9_12/NewFolder/img0391_129202222.JPG" style="width: 250px"></Image></div>')
map.addLayer(point5)

var point6 =L.marker([10.783487884911061, 106.70060435841977], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Tòa đại sứ quán Mỹ</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://quantri.hocmon.gov.vn/UploadImages/hocmon/banvanhoa/2022_9_12/NewFolder/img0391_129202222.JPG" style="width: 250px"></Image></div>')
//map.addLayer(point6)

var point7 =L.marker([10.76901903430533, 106.69783628812684], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Trụ sở báo Dân Chúng</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://quantri.hocmon.gov.vn/UploadImages/hocmon/banvanhoa/2022_9_12/NewFolder/img0391_129202222.JPG" style="width: 250px"></Image></div>')
//map.addLayer(point7)

var point8 =L.marker([10.766142753103546, 106.67273710085587], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Cơ sở in ấn của Hội Ủng hộ Vệ quốc đoàn</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://hcmcpv.org.vn/tin-tuc/-video-ham-b-%E2%80%93-co-so-in-an-bi-mat-cua-hoi-ung-ho-ve-quoc-doan-1491906100" target="_blank">[Xem thêm]</a></div> <br><div><Image src="http://phuong9.quan10.gov.vn/Portals/10/Images/Anh-tin/060800931-Ham-bi-mat-B.jpg" style="width: 280px"></Image></div>')
map.addLayer(point8)

var point9 =L.marker([10.771847560441119, 106.67470568249213], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hầm chứa vũ khí thời kháng chiến chống Mỹ</p>  <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://tcdulichtphcm.vn/du-khao/theo-dau-chan-biet-dong-kham-pha-nhung-can-ham-cat-giau-vu-khi-c14a87927.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://cdn.tcdulichtphcm.vn/upload/4-2024/images/2024-12-15/picture-17-1734266000-428-width880height587.jpg" style="width: 300px"></Image></div>', customOptions)
map.addLayer(point9)

var point10 =L.marker([10.76988205748585, 106.68135812299647], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Cơ sở Ban Tuyên huấn Xứ ủy Nam Bộ</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://quan3.hochiminhcity.gov.vn/van-hoa-the-thao-du-lich/co-so-ban-tuy-202-n-huan-xu-uy-nam-bo-100690.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://cdn2.tuoitre.vn/471584752817336320/2025/4/19/base64-1745067185339658211648.jpeg" style="width: 250px"></Image></div>')
map.addLayer(point10)

var point11 = L.marker([10.772158107481642, 106.68593200605335], {icon: icon})
.bindPopup('<div class="style_popup"> <p style="font-size: 15px">Cơ sở giấu vũ khí của Biệt động Thành đánh dinh Độc Lập</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://quan3.hochiminhcity.gov.vn/van-hoa-the-thao-du-lich/co-so-dau-vu-khi-cua-biet-dong-thanh-danh-dinh-doc-lap-nam-1968-234.html" target="_blank">[Xem thêm]</a> </div> <br> <div> <Image src="https://cdn.tcdulichtphcm.vn/upload/2-2023/images/2023-06-26/1687742298-hue-9732-1-849.jpg" style="width: 370px;"></Image></div>', customOptions)
map.addLayer(point11)

var point12 = L.marker([10.790941641650567, 106.68709897586199], {icon: icon})
.bindPopup('<div class="style_popup"> <p style="font-size: 15px">Sở Chỉ huy tiền phương Phân khu 6 </p><p style="font-size: 15px">trong chiến dịch Mậu Thân 1968</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://quan3.hochiminhcity.gov.vn/van-hoa-the-thao-du-lich/so-chi-huy-tien-phuong-phan-khu-6-trong-chien-dich-mau-than-1968-235.html" target="_blank">[Xem thêm]</a></div> <br> <Image src="https://thanhnien.mediacdn.vn/uploaded/congson/2020_03_11/1_WWXN.jpg" style="width: 250px;"></Image></div>', customOptions)
map.addLayer(point12)

var point13 =L.marker([10.751148780687632, 106.65882561496208], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Nơi đồng chí Nguyễn Tất Thành ở trước khi </p><p style="font-size: 15px"> ra đi tìm đường cứu nước</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://tienphong.vn/can-nha-bac-ho-o-truoc-khi-ra-di-tim-duong-cuu-nuoc-post1669201.tpo" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://image.tienphong.vn/w1966/Uploaded/2025/ft-cunzathlra/2024_09_02/tp-d3-5266.jpg" style="width: 300px"></Image></div>')
map.addLayer(point13)

var point14 =L.marker([10.75329196455176, 106.6791602300007], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Khu trại giam bệnh viện Chợ Quán</p><p>(nơi đồng chí Trần Phú hy sinh)</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://voh.com.vn/van-hoa/di-tich-lich-su-quoc-gia-khu-trai-giam-benh-vien-cho-quan-490584.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://thanhnien.mediacdn.vn/Uploaded/dongns/2022_07_19/2-8301.jpg" style="width: 250px"></Image></div>')
map.addLayer(point14)

var point15 =L.marker([10.727817397299356, 106.64129280515729], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Bình Đông</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="http://quan8.hochiminhcity.gov.vn/gioithieu/Lists/Posts/Post.aspx?ID=59" target="_blank">[Xem thêm]</a></div> <br><div><Image src="http://quan8.hochiminhcity.gov.vn/Hnh%20nh%20bn%20tin/2010-11/_w/DSC00387_JPG.jpg" style="width: 250px"></Image></div>')
map.addLayer(point15)

var point16 =L.marker([10.832203252371603, 106.78360254426713], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Phong Phú</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://ttvhtpthuduc.vn/ban-tin/dinh-phong-phu-di-tich-lich-su-van-hoa-cach-mang-cap-quoc-gia/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://i0.wp.com/ttvhtpthuduc.vn/wp-content/uploads/2021/10/%C4%91%C3%ACnh-pp-3.jpg?w=640&ssl=1" style="width: 250px"></Image></div>')
map.addLayer(point16)

var point17 =L.marker([10.84435264522976, 106.79333922782645], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Khu di tích lịch sử Bót Dây Thép</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://hcmcpv.org.vn/tin-tuc/-video-bot-day-thep-di-tich-lich-su-cap-quoc-gia-tai-tp-thu-duc-1491905509" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://fastly.4sqi.net/img/general/600x600/887681_hMfZvASKYysM7PlD0dCC6k8ORB8B9xRTXeMi4YgM0K0.jpg" style="width: 250px"></Image></div>')
map.addLayer(point17)

var point18 =L.marker([10.815347478452177, 106.68978203794191], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Tịnh xá Ngọc Phương</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://tapchivanhoaphatgiao.com/luu-tru/8218" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://th.bing.com/th/id/OIP.R9EJ7dJmStmvfX6oeeIghwHaGr?rs=1&pid=ImgDetMain" style="width: 250px"></Image></div>')
map.addLayer(point18)

var point19 =L.marker([10.803433502395851, 106.68729703246717], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Trụ sở Phái đoàn liên lạc của Bộ Tổng tư lệnh</p> <p style="font-size: 15px">Quân đội Nhân dân Việt Nam</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="http://diadaocuchi.com.vn/di-tich-lich-su-87a-tran-ke-xuong-43.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://th.bing.com/th/id/R.757e5546c5409172e6af5d780075ce27?rik=uJu8atkZzoz%2bMQ&riu=http%3a%2f%2fdrive.sopro.vn%2fs1%2fdiadaocuchi%2farticles%2fdi-tich-ba-thuoc-album-compressed.jpg&ehk=sASdGPaZF2iFK88j5PZH9sP9S%2fQUqD7nGvLkmkEjU6Q%3d&risl=&pid=ImgRaw&r=0" style="width: 300px"></Image></div>')
map.addLayer(point19)

var point20 =L.marker([10.80437797195369, 106.66177998714076], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Mộ Phan Châu Trinh</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="https://dantri.com.vn/doi-song/kham-pha-lang-mo-gan-mot-the-ky-cua-cu-phan-chau-trinh-20200724144713313.htm" target="_blank">[Xem thêm]</a></div> <br><div><Image src="http://vietlandmarks.com/upload/142876575555293c3b8648c.jpg" style="width: 250px"></Image></div>')
map.addLayer(point20)

var point21 =L.marker([10.783887730616632, 106.63089860735668], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Địa đạo Phú Thọ Hòa</p> <p>Di tích lịch sử cấp Quốc gia</p> <a href="http://phuthohoa.tanphu.hochiminhcity.gov.vn/di-tich-dia-diem-tham-quan/khu-di-tich-lich-su-cap-quoc-gia-dia-dao-phu-tho-hoa-c725-296.aspx" target="_blank">[Xem thêm]</a></div> <br><div><Image src="http://quantri.tanphu.hochiminhcity.gov.vn//UploadImages/phuthohoa/%C4%90%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20Ph%C3%BA%20Th%E1%BB%8D%20H%C3%B2a.jpg" style="width: 250px"></Image></div>')
map.addLayer(point21)

// DI TÍCH VĂN HÓA

var point22 =L.marker([10.792004567117404, 106.6981759555648], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Điện Ngọc Hoàng</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="http://www.khoavanhoc-ngonngu.edu.vn/nghien-cuu/van-hoa-lich-su-triet-hoc/6545-ch%C3%B9a-ng%E1%BB%8Dc-ho%C3%A0ng-%E2%80%93-m%E1%BB%99t-di-t%C3%ADch-%C4%91%E1%BB%99c-%C4%91%C3%A1o-%E1%BB%9F-th%C3%A0nh-ph%E1%BB%91-h%E1%BB%93-ch%C3%AD-minh.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://cdn.xanhsm.com/2024/11/2033a3d8-chua-ngoc-hoang-01.jpg" style="width: 250px"></Image></div>')
map.addLayer(point22)

var point23 =L.marker([10.765062425297725, 106.69908387918662], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Miếu Thiên Hậu</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://tuoitre.vn/kham-pha-3-hoi-quan-lau-doi-o-sai-gon-20200630105807055.htm" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://cdn2.tuoitre.vn/2020/6/30/hoi-quan-quang-trieu-con-duoc-goi-la-mieu-thien-hau-chua-ba-ben-chuong-duong-15934891789171961893.jpg" style="width: 250px"></Image></div>')
map.addLayer(point23)

var point24 =L.marker([10.775835015548815, 106.69803667397944], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Tòa án nhân dân Thành phố Hồ Chí Minh</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://hochiminhcity.toaan.gov.vn/webcenter/portal/hochiminh/gioithieu?dDocName=TAND017454" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://media.tapchixaydung.vn/mediav2/upload/userfiles2021/images/nguyencuong/08.2022/T%C3%B2a_%C3%A1n_Nh%C3%A2n_d%C3%A2n_tp_Ho_Chi_minh%2C_vietnam_-_panoramio.jpg" style="width: 280px"></Image></div>')
map.addLayer(point24)

var point25 =L.marker([10.787875092001524, 106.70499680041527], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Bảo tàng Lịch sử Thành phố Hồ Chí Minh</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://www.baotanglichsutphcm.com.vn/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://dulich3mien.vn/wp-content/uploads/2022/01/Ben-ngoai-bao-tang-lich-su-thanh-pho-Ho-Chi-Minh.jpg" style="width: 280px"></Image></div>')
map.addLayer(point25)

var point26 =L.marker([10.775953873181384, 106.69964054021075], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Bảo tàng Thành phố Hồ Chí Minh</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://hcmc-museum.edu.vn/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://dulich3mien.vn/wp-content/uploads/2021/12/bao-tang-ho-chi-minh.jpg" style="width: 280px"></Image></div>')
map.addLayer(point26)

var point27 =L.marker([10.776519480768313, 106.70308284693266], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Nhà hát Thành phố Hồ Chí Minh</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://tienphong.vn/nha-hat-thanh-pho-tphcm-thang-tram-thanh-duong-nghe-thuat-post1574201.tpo" target="_blank">[Xem thêm]</a></div> <br><div><Image src="http://vietlandmarks.com/upload/142582129854fc4e72ad2cb.jpg" style="width: 280px"></Image></div>')
map.addLayer(point27)

var point28 =L.marker([10.776543929727083, 106.70091123787498], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Trụ sở Ủy ban nhân dân Thành phố</p> <p style="font-size: 15px">Hồ Chí Minh</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://svhtt.hochiminhcity.gov.vn/tin-chi-tiet/-/chi-tiet/di-tich-kien-truc-nghe-thuat-tru-so-uy-ban-nhan-dan-thanh-pho-ho-chi-minh-phuong-ben-nghe-quan-1-thanh-pho-ho-chi-minh-23054-201.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://ik.imagekit.io/tvlk/blog/2023/09/go-and-share-kham-pha-uy-ban-nhan-dan-tp-ho-chi-minh-1-1024x768.webp?tr=q-70,c-at_max,w-500,h-300,dpr-2" style="width: 280px"></Image></div>')
map.addLayer(point28)

var point29 =L.marker([10.78139311086611, 106.67306956747287], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Chí Hoà</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="http://phuong13.quan10.gov.vn/Dia-diem-tham-quan/itemid/350/amid/2604/dinh-chi-hoa" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://images2.thanhnien.vn/528068263637045248/2023/3/10/dinh-chi-hoa-3-16784545468742022610705.jpg" style="width: 280px"></Image></div>')
map.addLayer(point29)

var point30 =L.marker([10.76300945993647, 106.63925159162575], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Chùa Giác Viên</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://thanhnien.vn/can-canh-chua-co-giac-vien-165-tuoi-o-sai-gon-185518390.htm" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://chonthieng.com/data/uploads/2022/03/Chua-Giac-Vien-15.jpg" style="width: 280px"></Image></div>')
map.addLayer(point30)

var point31 =L.marker([10.75678117873468, 106.64473073713451], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Chùa Phụng Sơn</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://phatgiao.org.vn/chua-phung-son--noi-luu-dau-net-dep-kien-truc-chua-nam-bo-d44669.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://media.tapchinghiencuuphathoc.vn/uploads/2025/02/10/tap-chi-ncph-chua-phung-son-1-1739169343.jpg" style="width: 280px"></Image></div>')
map.addLayer(point31)

var point32 =L.marker([10.75221615742041, 106.66110225930161], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Minh Hương Gia Thạnh</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://www.htv.com.vn/nhung-ngoi-dinh-co-o-tp-ho-chi-minh-phan-3-dinh-minh-huong-gia-thanh-tiep-theo" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://redsvn.net/wp-content/uploads/2019/09/Dinh-Minh-Huong-Gia-Thanh-03.jpg" style="width: 280px"></Image></div>')
map.addLayer(point32)

var point33 =L.marker([10.75312892098329, 106.65795632557749], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Hà Chương</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://mttqquan5.vn/hoi-quan-ha-chuong.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://mttqquan5.vn/wp-content/uploads/2020/02/5710_1F536DE7-D238-4A96-B6CC-6E4F2D31FE92.jpg" style="width: 280px"></Image></div>')
map.addLayer(point33)

var point34 =L.marker([10.75371843823312, 106.66210301908292], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Nghĩa An</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://quan5xinchao.vn/en/hoi-quan-nghia-an/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://thoixua.vn/wp-content/uploads/2024/07/nghia-an-hoi-quan-mieu-quan-de-kien-truc-van-hoa-trieu-chau-noi-bac-o-khu-pho-nguoi-hoa-sai-gon-3548-1.jpg" style="width: 280px"></Image></div>')
map.addLayer(point34)

var point35 =L.marker([10.749239641562367, 106.65441351779933], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Nghĩa Nhuận</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://quan5xinchao.vn/hoi-quan-nghia-nhuan/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqOs90v2S6v81FlMZ8mTW0j3yWXKWgLPh318Tk7nL8CWKmUQp5UYfrKpbZ77WTFU-h-uNT-NF9SP_lUkLSL7m9UpE0OQZ8_p4KDsMdxqKlF9f_H5ebMLh85J7PWaB1FleuFhiydeiYuxb1/s1600/IMG_5424.jpg" style="width: 280px"></Image></div>')
map.addLayer(point35)

var point36 =L.marker([10.754125867020218, 106.65962023939335], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Ôn Lăng</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://mttqquan5.vn/hoi-quan-on-lang.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://mttqquan5.vn/wp-content/uploads/2020/02/On-Lang-01.jpg" style="width: 280px"></Image></div>')
map.addLayer(point36)

var point37 =L.marker([10.753292175851335, 106.6611747382736], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Tuệ Thành</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://sodulich.hochiminhcity.gov.vn/Home/moduleId/564/id/4571/ma/DTQ/controller/HanhChinhDuKhach/action/Detail" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://mttqquan5.vn/wp-content/uploads/2020/01/chua-Ba-Thien-Hau.jpg" style="width: 280px"></Image></div>')
map.addLayer(point37)

var point38 =L.marker([10.751581686371203, 106.65729108861302], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Miếu Nhị Phủ</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="http://www.quan5.hochiminhcity.gov.vn/gioithieu/lists/posts/post.aspx?Source=/gioithieu&Category=Di+t%C3%ADch+v%C4%83n+ho%C3%A1&ItemID=113&Mode=1" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://redsvn.net/wp-content/uploads/2022/06/Hoi-quan-Nhi-Phu-02.jpg" style="width: 280px"></Image></div>')
map.addLayer(point38)

var point39 =L.marker([10.75222310250694, 106.6551581421262], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Lệ Châu</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://mttqquan5.vn/hoi-quan-le-chau-nha-tho-to-tho-bac.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://mttqquan5.vn/wp-content/uploads/2020/02/IMG_5407.jpg" style="width: 280px"></Image></div>')
map.addLayer(point39)

var point40 =L.marker([10.752784228572938, 106.66325598902017], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Hội quán Quỳnh Phủ</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://mttqquan5.vn/hoi-quan-quynh-phu.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://mttqquan5.vn/wp-content/uploads/2020/02/2-5.jpg" style="width: 280px"></Image></div>')
map.addLayer(point40)

var point41 =L.marker([10.870931228482819, 106.83985201953992], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Chùa Hội Sơn</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://dulich-tpthuduc.hochiminhcity.gov.vn/diem-den/diem-vui-choi-giai-tri/ch%C3%B9a-h%E1%BB%99i-s%C6%A1n/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://file.hstatic.net/1000054905/file/chua-hoi-son-quan-9_4255aab7531f471bbfa73d14df620f87.jpg" style="width: 280px"></Image></div>')
map.addLayer(point41)

var point42 =L.marker([10.84224186568175, 106.7888163953825], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Chùa Phước Tường</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://phatgiao.org.vn/chua-phuoc-tuong-di-tich-kien-truc-nghe-thuat-doc-dao-d9932.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://i1-dulich.vnecdn.net/2021/03/24/chua-phuoc-tuong-02-1616569929.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=dK8nflsSKN_GtH8X2rBWbg" style="width: 280px"></Image></div>')
map.addLayer(point42)

var point43 =L.marker([10.833624419920282, 106.75665927795191], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Trường Thọ</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://ttvhtpthuduc.vn/ban-tin/dinh-than-truong-tho/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://63stravel.com/s3_amazon/6b0eaa3b-c5b7-41af-80a4-92fac7ec27b2-30lhtruongtho01jpg.jpg" style="width: 280px"></Image></div>')
map.addLayer(point43)

var point44 =L.marker([10.877623780173462, 106.76536766561271], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Xuân Hiệp</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://dulich-tpthuduc.hochiminhcity.gov.vn/tin-tuc-va-su-kien/djinh-thn-xuan-hip-ngoi-djinh-c-gia-long-thanh-ph/" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://i0.wp.com/ttvhtpthuduc.vn/wp-content/uploads/2022/02/%C4%90%C3%ACnh-Th%E1%BA%A7n-Xu%C3%A2n-Hi%C3%AAp.jpg?resize=1024%2C761&ssl=1" style="width: 280px"></Image></div>')
map.addLayer(point44)

var point45 =L.marker([10.852951994639728, 106.7601803529738], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình thần Linh Đông</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://svhtt.hochiminhcity.gov.vn/tin-chi-tiet/-/chi-tiet/di-tich-kien-truc-nghe-thuat-%C4%91inh-than-linh-%C4%91ong-phuong-linh-chieu-quan-thu-%C4%91uc-thanh-pho-ho-chi-minh-23053-201.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://file.qdnd.vn/data/images/12/2020/12/12/vuhuyen/420120202huyen29341pg.jpg?dpi=150&quality=100&w=575" style="width: 280px"></Image></div>')
map.addLayer(point45)

var point46 =L.marker([10.811694604176267, 106.69646232696763], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Bình Hòa</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://media.mia.vn/uploads/blog-du-lich/dinh-binh-hoa-ben-tre-va-nhung-gia-tri-lich-su-lau-doi-1-1666742007.jpg" style="width: 280px"></Image></div>')
//map.addLayer(point46)

var point47 =L.marker([10.802206933920747, 106.69709229843826], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Lăng Lê Văn Duyệt</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://www.hcmcpv.org.vn/tin-tuc/lang-mieu-ta-quan-le-van-duyet-cong-trinh-nghe-thuat-ghi-dau-nhung-quan-niem-ve-nhan-sinh-va-vu-tr-1491898471" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/26/lang-ong-1-1661500926200145778156.jpg" style="width: 280px"></Image></div>')
map.addLayer(point47)

var point48 =L.marker([10.828528864969282, 106.6840216763637], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Chùa sắc tứ Trường Thọ</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://tapchinghiencuuphathoc.vn/luoc-su-ngoi-chua-co-300-nam-tai-dat-sai-gon-sac-tu-truong-tho-tu-the-ky-xviii-den-1981.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://chonthieng.com/data/uploads/2022/11/CHUA-SAC-TU-TRUONG-THO-TPHCM-4-scaled.jpg" style="width: 280px"></Image></div>')
map.addLayer(point48)

var point49 =L.marker([10.839972565031498, 106.6648609434308], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Thông Tây Hội</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://vovgiaothong.vn/newsaudio/dinh-than-thong-tay-hoi-3-tram-nam-ghi-dau-d40101.html" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://image.congan.com.vn/thumbnail/CATP-1024-2016-9-25/dinh-thong-tay-23.jpg" style="width: 280px"></Image></div>')
map.addLayer(point49)

var point50 =L.marker([10.795420951420004, 106.67384935275759], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Đình Phú Nhuận</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://tuoitre.vn/dau-xua-danh-tuong-va-dinh-chua-co-phu-nhuan-1306557.htm" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://image.sggp.org.vn/w1000/Uploaded/2024/ovhpuht/2024_02_25/dinh-pn-1-1558.jpg.webp" style="width: 280px"></Image></div>')
map.addLayer(point50)

var point51 =L.marker([10.7962294911279, 106.67555225038859], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Lăng Trương Tấn Bửu</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://thanhnien.vn/mo-cac-danh-than-tai-sai-gon-lang-long-van-hau-truong-tan-buu-185512776.htm" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://iwater.vn/Image/Picture/New/L%C4%82NG%20TR%C6%AF%C6%A0NG%20T%E1%BA%A4N%20B%E1%BB%ACU.jpg" style="width: 280px"></Image></div>')
map.addLayer(point51)

var point52 =L.marker([10.795761394720115, 106.6829528843052], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Lăng Võ Di Nguy</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://thanhnien.vn/mo-cac-danh-than-o-sai-gon-lang-binh-giang-quan-cong-vo-di-nguy-185512206.htm" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://thanhnien.mediacdn.vn/Uploaded/congthang/2015_10_26/1_YCMP.jpg" style="width: 280px"></Image></div>')
map.addLayer(point52)

var point53 =L.marker([10.778915229611266, 106.6492127688491], {icon: icon})
.bindPopup('<div class="style_popup"><p style="font-size: 15px">Chùa Giác Lâm</p> <p>Di tích kiến trúc - nghệ thuật cấp Quốc gia</p> <a href="https://www.tanmankientruc.org/kien-truc/chua-giac-lam" target="_blank">[Xem thêm]</a></div> <br><div><Image src="https://halotravel.vn/wp-content/uploads/2020/12/cong-chua-giac-lam-1.jpg" style="width: 280px"></Image></div>')
map.addLayer(point53)

var icon_hs = L.icon({
    iconSize: [ 140, 140],
    iconUrl: "img/hoang_sa.png",

})

var icon_ts = L.icon({
    iconSize: [ 150, 150],
    iconUrl: "img/truong_sa.png",

})

var hoang_sa = L.marker([16.450094214283418, 112.11211661035944], {icon: icon_hs}).addTo(map)

var hoang_sa = L.marker([10.907234263345767, 115.13453263284953], {icon: icon_ts}).addTo(map)



var tatca = L.layerGroup([point1, point2, point3, point4, point5, point8, point9, point10, point11, point12, point13, point14, point15, point16, point17, point18, point19, point20, point21, point22,point23, point24, point25, point26, point27, point28, point29, point30, point31, point32, point33, point34, point35, point36, point37, point38, point39, point40, point41, point42, point43, point44, point45, point47, point48, point49, point50, point51, point52, point53])
var dtls_qg = L.layerGroup([point3, point4, point5, point8, point9, point10, point11, point12, point13, point14, point15, point16, point17, point18, point19, point20, point21])
var dtls_tp = L.layerGroup([point1])
var dtvh_qg = L.layerGroup([point22,point23, point24, point25, point26, point27, point28, point29, point30, point31, point32, point33, point34, point35, point36, point37, point38, point39, point40, point41, point42, point43, point44, point45, point47, point48, point49, point50, point51, point52, point53])
var dtvh_tp = L.layerGroup([point1])

// Tạo control
var BaseLayer = {
    'Bản đồ mặc định': Esri_WorldStreetMap,
    'Bản đồ vệ tinh': Esri_WorldImagery,

}

var Overlayers = {
    "Tất cả": tatca,
    'Di tích lịch sử cấp Quốc gia': dtls_qg,
  //  'Di tích lịch sử cấp Thành phố': dtls_tp,
    'Di tích kiến trúc - nghệ thuật cấp Quốc gia': dtvh_qg,
   // 'Di tích văn hóa cấp Thành phố': dtvh_tp
}

var Control = L.control.layers(BaseLayer, Overlayers, { 
    position: 'topright', 
    collapsed: false });

map.addControl(Control); 

// Thêm thanh tỷ lệ
L.control.scale({
    metric: true,
    //imperial:false,
    position:'bottomleft',
    maxWidth: 100,
   
}).addTo(map);


//Mouse Position
L.control.mousePosition().addTo(map);

//Local control
L.control.locate().addTo(map);





