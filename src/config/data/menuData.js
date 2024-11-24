export const menuData = [
  {
    title: "KHÁM PHÁ",
    link: "/explore",
    subMenu: [
      { title: "Khách sạn", link: "/hotel" },
      {
        title: "Hoạt động",
        link: "/adventure",
        subMenu: [
          { title: "Chèo thuyền", link: "/adventure/Chèo thuyền" },
          { title: "Chèo thuyền kayak", link: "/adventure/Chèo thuyền kayak" },
          {
            title: "Chèo thuyền vượt thác",
            link: "/adventure/Chèo thuyền vượt thác",
          },
          { title: "Cắm trại", link: "/adventure/Cắm trại" },
          { title: "Đa thể thao", link: "/adventure/Đa thể thao" },
          { title: "Leo núi", link: "/adventure/Leo núi" },
        ],
      },
      { title: "Phong cảnh", link: "/scenery" },
      { title: "+ Tất cả tour", link: "/tour" },
    ],
  },
  {
    title: "ĐIỂM ĐẾN",
    link: "/destination",
    subMenu: [
      { title: "Việt Nam", link: "/destination/Việt Nam" },
      { title: "Nhật Bản", link: "/destination/Nhật Bản" },
      { title: "Trung Quốc", link: "/destination/Trung Quốc" },
      { title: "Hàn Quốc", link: "/destination/Hàn Quốc" },
      { title: "Hoa Kỳ", link: "/destination/Hoa Kỳ" },
      { title: "Pháp", link: "/destination/Pháp" },
      { title: "+ Tất cả quốc gia", link: "/destination" },
    ],
  },
  { title: "BÀI VIẾT", link: "/blog" },
  { title: "GIỚI THIỆU", link: "/about" },
  { title: "LIÊN HỆ", link: "/contact" },
];
