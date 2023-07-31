import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile" style="background-color: #ffffff; display: flex; flex-direction: row; justify-content: center; width: 100%;">
      <div class="div" style="background-color: #ffffff; border: 1px none; height: 932px; position: relative; width: 430px;">
        <div class="overlap-group" style="height: 730px; left: 0; position: absolute; top: 75px; width: 430px;">
          <div class="rectangle" style="background-color: #023047; height: 216px; left: 0; position: absolute; top: 0; width: 430px;"></div>
          <div class="rectangle-2" style="background-color: #f0f0f0; border-radius: 20px; height: 575px; left: 40px; position: absolute; top: 155px; width: 353px;"></div>
          <div class="text-wrapper" style="color: #669bbc; font-family: 'Inter-Bold', Helvetica; font-size: 13.6px; font-weight: 700; left: 60px; letter-spacing: 0; line-height: normal; position: absolute; text-align: center; top: 253px; width: 312px;">Mbali Chauke</div>
          <div class="text-wrapper-2" style="color: #ffffff; font-family: 'Inter-ExtraBold', Helvetica; font-size: 16px; font-weight: 800; left: 47px; letter-spacing: 0; line-height: normal; position: absolute; top: 39px; width: 157px;">Profile</div>
          <div class="text-wrapper-3" style="color: #669bbc; font-family: 'Inter-Bold', Helvetica; font-size: 16px; font-weight: 700; left: 120px; letter-spacing: 0; line-height: normal; position: absolute; top: 368px; width: 155px;">Account</div>
          <div class="text-wrapper-4" style="color: #669bbc; font-family: 'Inter-Bold', Helvetica; font-size: 16px; font-weight: 700; left: 120px; letter-spacing: 0; line-height: normal; position: absolute; top: 316px; width: 155px;">My Progress</div>
          <div class="text-wrapper-5" style="color: #669bbc; font-family: 'Inter-Bold', Helvetica; font-size: 16px; font-weight: 700; left: 120px; letter-spacing: 0; line-height: normal; position: absolute; top: 474px; width: 155px;">Share with friend</div>
          <div class="text-wrapper-6" style="color: #669bbc; font-family: 'Inter-Bold', Helvetica; font-size: 16px; font-weight: 700; left: 120px; letter-spacing: 0; line-height: normal; position: absolute; top: 421px; width: 155px;">Review</div>
          <div class="text-wrapper-7" style="color: #669bbc; font-family: 'Inter-Bold', Helvetica; font-size: 16px; font-weight: 700; left: 125px; letter-spacing: 0; line-height: normal; position: absolute; top: 526px; width: 155px;">Logout</div>
          <div class="frame" style="background-image: url(./frame-321.png); background-position: 50% 50%; background-size: cover; border-radius: 30px; height: 166px; left: 141px; position: absolute; top: 71px; width: 150px;"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // You can add any necessary logic or data bindings here
}
