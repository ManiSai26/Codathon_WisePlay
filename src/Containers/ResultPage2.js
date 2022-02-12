import React, { useState } from "react";
import Success from "../media/Success.svg";
import LandingNavbar from "../components/landingNavbar";
import Certificate from "../media/certificate.jpeg";
import Share from "../media/Share.svg";
import Footer from "../components/footer";
import SharePopup from "../components/sharePopup";
import "../stylesheets/ResultPage2.css";

const ResultPage = () => {
  let [popupDisplay, setPopupDisplay] = useState(false);
  window.onload= function()
  {

    var c = document.getElementById("rscertificatepreview");
  var ctx = c.getContext("2d");
  var img = document.getElementById("rsCertificate");
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, c.width, c.height);
  ctx.font = "20px Arial";
  ctx.fillText("Pranesh", 210, 130);
  ctx.font = "15px Arial";
  ctx.fillText("100%", 70, 235);
  ctx.fillText("100%", 163, 235);
  ctx.fillText("100%", 223, 235);
  ctx.fillText("100%", 300, 235);
  ctx.fillText("100%", 383, 235);
  ctx.font = "10px Arial";
  ctx.fillText("09-02-2022", 120, 275);
  }
  return (
    <div className="RPMainDiv">
      <LandingNavbar />
      <div className="rsMaindiv">
        <div className="rscongodiv">
          <div className="rssucessimg">
            <img src={Success} />
          </div>
          <div className="rscongoh">
            <span>Congratulations!!</span>
          </div>
          <div className="rscongotext">
            <span> You have successfully completed the assessment test. </span>
          </div>
        </div>
        <div className="rsscorediv">
          <div className="rsscoreh">
            <span>Your Score</span>
          </div>
          <div className="rsscorerow">
            <div className="rsscoregraph">
              <span>Score graph Here</span>
            </div>
            <hr class="rounded" />
            {/* <div className="rscertificatepreview">
              <img src={Certificate} />
            </div> */}
            <img
            id="rsCertificate"
            src={Certificate}
            alt="The Certificate"
            className="rshideimage"
          />
            <canvas id="rscertificatepreview" width="481px" height="340px">
              Your browser does not support the HTML5 canvas tag.
            </canvas>
          
          </div>
        </div>
        <div className="rssharerow">
          <div
            className="rssharebutton"
            onClick={() => {
              setPopupDisplay(true);
              console.log(popupDisplay);
            }}
          >
            <img src={Share} />
            <span>Share</span>
          </div>
        </div>
      </div>
      <Footer />
      {popupDisplay && <SharePopup close={setPopupDisplay} />}
    </div>
  );
};

export default ResultPage;