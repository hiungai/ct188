// Tạo danh sách các sản phẩm kèm theo thông tin dưới dạng JSON
var itemList = {
    "sp0001": {"name": "Ghế Sofa Gỗ Cao Su Tự Nhiên", "price": 9290200, "photo": "../images/products/phong_khach/ghe_sofa_1.jpg"},
    "sp0002": {"name": "Ghế Sofa Geral KOGE 701", "price": 9390200, "photo": "../images/products/phong_khach/ghe_sofa2.jpg"},
    "sp0003": {"name": "Bộ Bàn Trà Gỗ và 4 Ghế Sofa Đơn", "price": 6990000, "photo": "../images/products/phong_khach/ghe_sofa3.jpg"},
    "sp0004": {"name": "Bộ Bàn Trà 1 Bàn 3 Ghế", "price": 3200000, "photo": "../images/products/phong_khach/ghe_sofa4.jpg"},
    "bs1001": {"name": "Giường Ngủ JAPA Gỗ Cao Su Khung Lắp Ráp G001", "price": 3120000, "photo": "../images/products/phong_ngu/giuong_1.jpeg"},
    "bs1002": {"name": "Giường Ngủ JAPA Gỗ Cao Su Khung Lắp Ráp G002", "price": 3390200, "photo": "../images/products/phong_ngu/giuong_2.jpg"},
    "bs1003": {"name": "Giường Ngủ Gỗ Tràm Geral 102", "price": 4990000, "photo": "../images/products/phong_ngu/giuong_9.webp"},
    "bs1004": {"name": "Giường Ngủ Gỗ Cao Su Khung Sắt Lắp Ráp G003", "price": 3640000, "photo": "../images/products/phong_ngu/giuong_4.jpg"},
    "k2001": {"name": "Bộ bàn ăn gỗ 4 đế cao su", "price": 9250200, "photo": "../images/products/phong_bep/bo_ban_an.jpg"},
    "k2002": {"name": "Bộ bàn ghế ăn 4 người gỗ cao su chân sắt CBBA029", "price": 4015000, "photo": "../images/products/phong_bep/bo_ban_an_8.jpg"},
    "k2003": {"name": "Bộ bàn ăn 4 ghế gỗ", "price": 4015000, "photo": "../images/products/phong_bep/bo_ban_an2.jpg"},
    "k2004": {"name": "Bộ bàn ăn gỗ thông 160cm và 6 ghế Bixtro CBBA074", "price": 5725000, "photo": "../images/products/phong_bep/bo_ban_an_7.jpeg"},
    "k2005": {"name": "Bộ bàn ăn 4 ghế tựa lưng gỗ", "price": 3250000, "photo": "../images/products/phong_bep/bo_ban_an3.jpg"},
    "k2006": {"name": "Bộ bàn ăn đường kính 1m và 4 ghế da CBBA110", "price": 3600000, "photo": "../images/products/phong_bep/bo_ban_an_62.jpeg"},
    "k2007": {"name": "Bộ bàn ăn 6 ghế màu vàng BA-07", "price": 2500000, "photo": "../images/products/phong_bep/bo_ban_an4.jpg"},
    "k2008": {"name": "Bộ bàn ăn mặt gỗ và 6 ghế nệm bọc vải", "price": 6200000, "photo": "../images/products/phong_bep/bo_ban_an_61.jpg"},
    "k2009": {"name": "Bộ bàn ăn mặt đá 140 x 80cm và 4 ghế ăn", "price": 4500000, "photo": "../images/products/phong_bep/bo_ban_an_5.jpg"},
    "k2010": {"name": "Tủ bếp trên 1,2m nhỏ gọn gỗ cao su", "price": 3150000, "photo": "../images/products/phong_bep/tu_bep_3.jpg"},
    "k2011": {"name": "Tủ bếp trên 1,2m gỗ cao su cửa lưới", "price": 3420000, "photo": "../images/products/phong_bep/tu_bep_4.jpg"},
    "k2012": {"name": "Tủ bếp dưới 1,2m gỗ cao su cửa dưới có viền", "price": 4950000, "photo": "../images/products/phong_bep/tu_bep_5.jpg"},
    "k2013": {"name": "Tủ bếp trên 1,2m gỗ cao su cửa không viền", "price": 5580000, "photo": "../images/products/phong_bep/tu_bep_7.jpg"},
    "k2014": {"name": "Hệ tủ bếp mini gỗ cao su BTB68012", "price": 7920000, "photo": "../images/products/phong_bep/tu_bep_8.jpg"},
    "k2015": {"name": "Hệ tủ bếp mini gỗ cao su nhỏ gọn BTB68006", "price": 7920000, "photo": "../images/products/phong_bep/tu_bep_9.jpg"},
    "k2016": {"name": "Tủ bếp trên 1,2m gỗ cao su cửa không viền", "price": 8810000, "photo": "../images/products/phong_bep/tu_bep_10.jpg"},
    "k2017": {"name": "COMBO Bếp mini 1,2m Geral", "price": 9200000, "photo": "../images/products/phong_bep/tu_bep.webp"},
    "k2018": {"name": "Hệ Tủ Bếp Geral", "price": 22000000, "photo": "../images/products/phong_bep/tu_bep2.webp"},
    "lr3001": {"name": "Ghế Sofa Gỗ Tự Nhiên", "price": 6790200, "photo": "../images/products/phong_khach/phong_khach_3.webp"},
    "lr3002": {"name": "Ghế Sofa Da Màu Nâu", "price": 9290200, "photo": "../images/products/phong_khach/phong_khach1.jpg"},
    "lr3003": {"name": "Bàn Sofa Phòng Khách Mặt Kính", "price": 1900200, "photo": "../images/products/phong_khach/phong_khach_2.jpg"},
    "lr3004": {"name": "Kệ TIVI ACKLEY", "price": 4950000, "photo": "../images/products/phong_khach/ke_tivi_1.webp"},
    "lr3005": {"name": "Kệ TIVI CREAT", "price": 4375000, "photo": "../images/products/phong_khach/ke_tivi_2.webp"},
    "lr3006": {"name": "Kệ TIVI TERRACE", "price": 5050000, "photo": "../images/products/phong_khach/ke_tivi_3.webp"},
    "lr3007": {"name": "Kệ TIVI DENNING", "price": 4600000, "photo": "../images/products/phong_khach/ke_tivi_4.webp"},
    "lr3008": {"name": "Kệ TIVI CAMBRIDGE", "price": 6280000, "photo": "../images/products/phong_khach/ke_tivi_6.webp"},
    "lr3009": {"name": "Kệ TIVI Gỗ LEEDS 701", "price": 4490000, "photo": "../images/products/phong_khach/ke_tivi_7.jpg"},
    "lr3010": {"name": "Kệ Trang Trí HOOPER", "price": 7455000, "photo": "../images/products/phong_khach/ke_trang_tri_1.webp"},
    "lr3011": {"name": "Kệ Trang Trí DUNDEE", "price": 4990000, "photo": "../images/products/phong_khach/ke_trang_tri2.webp"},
    "lr3012": {"name": "Kệ Trang Trí SAVANNAH", "price": 3560000, "photo": "../images/products/phong_khach/ke_trang_tri_3.webp"},
    "lr3013": {"name": "Kệ Trang Trí NEW CITY", "price": 6300000, "photo": "../images/products/phong_khach/ke_trang_tri_4.webp"},
    "lr3014": {"name": "Kệ Trang Trí Geral 4", "price": 3790000, "photo": "../images/products/phong_khach/ke_trang_tri_5.webp"},
    "lr3015": {"name": "Tủ Giày Trang Trí Gỗ Geral 1", "price": 2690000, "photo": "../images/products/phong_khach/tu_giay_1.jpg"},
    "lr3016": {"name": "Tủ Giày Trang Trí Gỗ Geral 2", "price": 3490000, "photo": "../images/products/phong_khach/tu_giay_2.jpg"},
    "lr3017": {"name": "Tủ Giày Trang Trí Gỗ Geral 3", "price": 3890000, "photo": "../images/products/phong_khach/tu_giay_3.jpg"},
    "lr3018": {"name": "Tủ Giày Trang Trí Gỗ Geral 4", "price": 4090000, "photo": "../images/products/phong_khach/tu_giay_4.jpg"},
    "b4001": {"name": "Giường Ngủ Gỗ Tự Nhiên", "price": 4790200, "photo": "../images/products/phong_ngu/giuong_5.webp"},
    "b4002": {"name": "Giường Tầng Gỗ Cao Su Khung Sắt Lắp Ráp", "price": 10200000, "photo": "../images/products/phong_ngu/giuong_6.jpg"},
    "b4003": {"name": "Giường Tầng Gỗ Cao SU 140x200cm Khung Sắt", "price": 10900000, "photo": "../images/products/phong_ngu/giuong_7.jpg"},
    "b4004": {"name": "Tủ Quần Áo Gỗ G001", "price": 3490000, "photo": "../images/products/phong_ngu/tu_ao_1.webp"},
    "b4005": {"name": "Tủ Quần Áo Gỗ 3 Cánh Cửa G002", "price": 8900000, "photo": "../images/products/phong_ngu/tu_ao2.webp"},
    "b4006": {"name": "Tủ Quần Áo Gỗ 4 Cánh Cửa", "price": 11970000, "photo": "../images/products/phong_ngu/tu_ao3.webp"},
    "b4007": {"name": "Tủ Quần Áo Liền Kệ Trang Trí", "price": 7300000, "photo": "../images/products/phong_ngu/tu_ao4.jpg"},
    "b4008": {"name": "Module Tủ Quần Áo Hiện Đại Gỗ Cao Su Tự Nhiên", "price": 11280000, "photo": "../images/products/phong_ngu/tu_ao_5.jpg"},
    "b4009": {"name": "Module Tủ Quần Áo Kết Hợp Kệ Trang Trí", "price": 9490000, "photo": "../images/products/phong_ngu/tu_ao_6.jpg"},
    "b4010": {"name": "Giá Kệ Treo Quần Áo Gỗ Cao Su Khung Sắt", "price": 2600000, "photo": "../images/products/phong_ngu/tu_ao_7.jpg"},
    "b4011": {"name": "Module Tủ Quần Áo 2m Kết Hợp Kệ Trang Trí", "price": 15490000, "photo": "../images/products/phong_ngu/tu_ao_8.jpg"},
    "b4012": {"name": "Tủ Quần Áo Nhỏ Gọn 2 Cánh Cửa", "price": 4190000, "photo": "../images/products/phong_ngu/tu_ao_9.jpg"},
    "b4013": {"name": "Bàn Trang Điểm Gỗ Màu Tự Nhiên GTD101", "price": 3990000, "photo": "../images/products/phong_ngu/trang_diem.jpg"},
    "b4014": {"name": "Bàn Trang Điểm Gỗ Đa Năng Màu Nâu GTD101", "price": 3990000, "photo": "../images/products/phong_ngu/trang_diem2.jpg"},
    "b4015": {"name": "Bàn Trang Điểm Gỗ Cao Su Kèm Gương GTD102", "price": 2960000, "photo": "../images/products/phong_ngu/trang_diem_4.jpg"},
    "b4016": {"name": "Bàn Trang Điểm Kèm Gương Đèn Led GTD103", "price": 3600000, "photo": "../images/products/phong_ngu/trang_diem_5.jpg"},
    "b4017": {"name": "Bàn Trang Điểm 2 Hộc Kéo Chân Sắt GTD104", "price": 2100000, "photo": "../images/products/phong_ngu/trang_diem_6.jpg"},
    "b4018": {"name": "Bàn Trang Điểm Kết Hợp Chân Tủ Đựng Đồ GTD105", "price": 5590000, "photo": "../images/products/phong_ngu/trang_diem_7.jpg"},
    "b4019": {"name": "Bàn Trang Điểm Gỗ Basic Có 2 Ngăn Kéo GTD106", "price": 2660000, "photo": "../images/products/phong_ngu/trang_diem_8.jpg"},
    "b4020": {"name": "Bàn Trang Điểm Có Chân Tủ Gỗ Cao Su GTD107", "price": 4600000, "photo": "../images/products/phong_ngu/trang_diem_9.jpeg"},
    "b4021": {"name": "COMBO Bàn Ghế Trang Điểm Góc Tường GTD108", "price": 3900000, "photo": "../images/products/phong_ngu/trang_diem_10.jpg"},
    "b4022": {"name": "Bàn Trang Điểm Nhỏ Gọn Bằng Gỗ GTD109", "price": 2730000, "photo": "../images/products/phong_ngu/trang_diem_11.jpg"},
    "b4023": {"name": "Tủ Đầu Giường OTEGO", "price": 2100000, "photo": "../images/products/phong_ngu/tu_dau_giuong1.webp"},
    "b4024": {"name": "Tủ Đầu Giường INDUSTRY", "price": 2330000, "photo": "../images/products/phong_ngu/tu_dau_giuong2.webp"},
    "wr5001": {"name": "Bàn Làm Việc Gỗ Có Kệ Màu Nâu GLV101", "price": 2090000, "photo": "../images/products/phong_lam_viec/ban_2.jpg"},
    "wr5002": {"name": "Bàn Làm Việc Gỗ 160x60cm Chân Sắt GLV102", "price": 2470000, "photo": "../images/products/phong_lam_viec/ban_1.webp"},
    "wr5003": {"name": "Bộ Máy Tính Gỗ GLV103", "price": 2790000, "photo": "../images/products/phong_lam_viec/ban_6.jpg"},
    "wr5004": {"name": "Bàn Làm Việc Gỗ Màu Tự Nhiên GLV104", "price": 2390000, "photo": "../images/products/phong_lam_viec/ban_7.jpg"},
    "wr5005": {"name": "Bàn Làm Việc Basic Chân Sắt GLV105", "price": 2250000, "photo": "../images/products/phong_lam_viec/ban_5.jpg"},
    "wr5006": {"name": "Ghế Xoay Văn Phòng Tay Gập Thông Minh GVP101", "price": 1690000, "photo": "../images/products/phong_lam_viec/ghe_van_phong.jpg"},
    "wr5007": {"name": "Ghế Xoay Văn Phòng Ngã Lưng GVP102", "price": 2120000, "photo": "../images/products/phong_lam_viec/ghe_van_phong2.jpg"},
    "wr5008": {"name": "Ghế Chơi Game Tay Gập GVP103", "price": 1950000, "photo": "../images/products/phong_lam_viec/ghe_gaming3.jpg"},
    "wr5009": {"name": "Ghế Gaming Red Racing Bọc Da Cao Cấp GVP104", "price": 2380000, "photo": "../images/products/phong_lam_viec/ghe_gaming.jpg"},
    "wr5010": {"name": "Ghế Gaming Ergonomic Có Gác Chân GVP105", "price": 7920000, "photo": "../images/products/phong_lam_viec/ghe-gaming2.jpg"},
    "wr5011": {"name": "Kệ Sách 5 Tầng GKS101", "price": 3190000, "photo": "../images/products/phong_lam_viec/ke_sach.jpg"},
    "wr5012": {"name": "Kệ Sách 3 Tầng GKS102", "price": 1520000, "photo": "../images/products/phong_lam_viec/Ke_sach2.jpg"},
    "wr5013": {"name": "Kệ Sách 3 Hộc Gỗ Công Nghiệp GKS103", "price": 4550000, "photo": "../images/products/phong_lam_viec/ke_sach3.jpg"},
    "wr5014": {"name": "Kệ Sách Nhiều Ngăn Gỗ Công Nghiệp GKS104", "price": 5180000, "photo": "../images/products/phong_lam_viec/ke_sach4.jpg"},
    "wr5015": {"name": "Kệ Sách Hình Cây Gỗ Cao Su GKS105", "price": 2750000, "photo": "../images/products/phong_lam_viec/ke_sach9.jpg"},
    "wr5016": {"name": "Kệ Sách 2 Tầng Nhiều Ngăn GKS106", "price": 1720000, "photo": "../images/products/phong_lam_viec/ke_sach6.jpg"},
    "wr5017": {"name": "Kệ Sách Hình Nhánh Cây Từ Gỗ Plywood GKS107", "price": 1250000, "photo": "../images/products/phong_lam_viec/ke_sach7.jpg"},
    "wr5018": {"name": "Kệ Góc Tường 5 Tầng Gỗ Cao Su GKS108", "price": 2700000, "photo": "../images/products/phong_lam_viec/ke_sach8.jpg"},
    "wr5019": {"name": "Kệ Sách 5 Tầng Gỗ Tràm Có Bánh Xe GKS109", "price": 3000000, "photo": "../images/products/phong_lam_viec/ke_sach10.jpg"},
    "wr5020": {"name": "Kệ Sách Trang Trí Gỗ Cao Su GKS110", "price": 1250000, "photo": "../images/products/phong_lam_viec/ke_sach11.jpeg"},
    "wr5021": {"name": "Tủ Cá Nhân 4 Ngăn Kéo Gỗ Cao Su GTL101", "price": 3080000, "photo": "../images/products/phong_lam_viec/tu_ca_nha.jpeg"},
    "wr5022": {"name": "Tủ Cá Nhân Di Động Có Ngăn Kéo GTL102", "price": 2185000, "photo": "../images/products/phong_lam_viec/tu_ca_nhan2.jpg"},
    "wr5023": {"name": "Tủ Cá Nhân Di Động Gỗ Tự Nhiên GTL103", "price": 2790000, "photo": "../images/products/phong_lam_viec/tu_ca_nhan3.jpg"},
    "wr5024": {"name": "Tủ 2 Ngăn Có Khóa GTL104", "price": 1390000, "photo": "../images/products/phong_lam_viec/tu_ca_nhan4.jpg"},
};
// HÀM THÊM SẢN PHẨM VÀO MỤC YÊU THÍCH
function addFavorite(code){
// Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code
    var name=itemList[code].name;
// Kiểm tra sự tồn tại của mã sản phẩm trong localStorage
    if(typeof localStorage[code] == "undefined") window.localStorage.setItem(code, 1);
    alert("Đã thêm sản phẩm " + name + " vào mục yêu thích thành công!");
};
// HÀM HIỂN THỊ SẢN PHẨM TRONG MỤC YÊU THÍCH
function showFavorite() {
// Khai báo biến formatter để hiển thị giá tiền sản phẩm dưới dạng tiền tệ VND
    var formatter = new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"});
// Khai báo biến container lấy phần tử có id = favoriteDetail, trong đó lấy phần tử con có nhãn HTML là tbody
    var container = document.getElementById("favoriteDetail").getElementsByTagName("tbody")[0];
    container.innerHTML="";
    for(var i = 0; i < window.localStorage.length; i++){
        if(typeof itemList[localStorage.key(i)] === "undefined") continue;
        var tr = document.createElement("tr");
        var photoCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var priceCell = document.createElement("td");
        var removeCell = document.createElement("td");
        var removeLink = document.createElement("a");
        var item = itemList[localStorage.key(i)];
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='" + item.photo + "' class='round-figure' width='100px' />";
        nameCell.innerHTML=item.name;
        nameCell.style.textAlign="center";
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="center";
        removeLink.innerHTML="<i class='fa fa-trash'></i>";
        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", localStorage.key(i));
        removeLink.onclick=function(){
            removeFavorite(this.dataset.code);
        };
        removeCell.style.textAlign="center";
        removeCell.appendChild(removeLink);
        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(priceCell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
    }
}
// HÀM XÓA SẢN PHẨM KHỎI MỤC YÊU THÍCH
function removeFavorite(code) {
// Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code
    var name=itemList[code].name;
    if(confirm("Bạn có chắc chắn muốn xóa sản phẩm " + name + " khỏi mục yêu thích không? Nhấn OK để xác nhận xóa hoặc nhấn Cancel để hủy")){
        if(typeof window.localStorage[code] !== "undefined"){
// Xóa sản phẩm khỏi localStorage
            window.localStorage.removeItem(code);
// Xóa nội dung của phần thân của bảng (<tbody>)
            document.getElementById("favoriteDetail").getElementsByTagName("tbody")[0].innerHTML="";
// Hiển thị lại nội dung của trang yêu thích
            showFavorite();
        }
        alert("Đã xóa sản phẩm " + name + " khỏi mục yêu thích thành công!");
    }
}
