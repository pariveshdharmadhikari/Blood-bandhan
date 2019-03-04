import React from "react";
import './css/corousal.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, } from
  "mdbreact";

const CarouselPage = () => {
  return (
    <div>
      <MDBCarousel interval={2500} activeItem={1} length={5} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>

          <MDBCarouselItem itemId="1">
              <MDBView>
                <img className="d-block w-100 c-img" src="https://brandongaille.com/wp-content/uploads/2013/10/39-Catchy-Blood-Drive-Campaign-Slogans.jpg" alt="First slide" />
                <MDBMask overlay="black-light" />
              </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
              <MDBView>
                <img className="d-block w-100 c-img" src="https://4.bp.blogspot.com/-Qk_u7c7MmrI/Wh8CtXly_pI/AAAAAAAABTg/DPwHYkVbje4fpRZk99eLPhGHvUHnnURUwCLcBGAs/s1600/3.jpg" alt="Second slide" />
                <MDBMask overlay="black-strong" />
              </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
              <MDBView>
                <img className="d-block w-100 c-img" src="https://i1.wp.com/www.bms.co.in/wp-content/uploads/2015/06/World-Blood-Donor-Day-Images-8.jpg" alt="Third slide" />
                <MDBMask overlay="black-slight" />
              </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
              <MDBView>
                <img className="d-block w-100 c-img" src="https://www.healthworks.my/wp-content/uploads/2014/06/world_blood_donor_day.jpg" alt="Fourth slide" />
                <MDBMask overlay="black-light" />
              </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="5">
              <MDBView>
                <img className="d-block w-100 c-img" src="http://wallpaperen.com/wp-content/uploads/2018/04/deluxe-quotes-on-donating-blood-best-blood-donation-quotes-quotesgram-quotes-on-donating-blood.jpg" alt="Fifth Slide" />
                <MDBMask overlay="black-light" />
              </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default CarouselPage;