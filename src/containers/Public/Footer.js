import React from 'react';

const Footer = () => {
    return (
        <footer  className="inline-block pl-15 w-full">
        <div className="absolute-footer dark medium-text-center small-text-center ">
          <div className="container clearfix flex justify-center p-5 items-center gap-20">
            <div className="footer-primary pull-left">
              <div className="copyright-footer  justify-start">
                <b>Công ty TNHH Thương Mại và Dịch Vụ ABC</b><br />
                Trụ sở chính: Tầng 2A, Tòa 27A3 Greenstars 234 Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội<br />
                GPĐK: Số 0102957334 cấp ngày 09/04/2008<br />
                ĐT: 0984966806
                Email: tamnguyenmedia@gmail.com    </div>
            </div>

            <div className="footer-secondary pull-right ">
              <div className="footer-text inline-block small-block  justify-end">
                © 2011 Tam Nguyên Media ., JSC. All rights reserved<br />
                <img src="https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/bct.png" />      
              </div>
            </div>{/* -right */}
            
          </div>
        </div>
        <a href="#top" className="back-to-top button invert plain is-outline hide-for-medium icon circle fixed bottom z-1" id="top-link"><i className="icon-angle-up" /></a>
      </footer>
    );
}

export default Footer;
