function xoa() {
$(function(){
    $('article').addClass('test');
});
const ty = [];
const quizContainer = document.getElementById("quiz");
ty.push(
  `
<section class="scp-quizzes-main">
<div class="scp-quizzes-data">
  <h3>1.- “How do you do?”<br>- “______”
</h3>
<br/>
    <input type="radio" id="1.1" name="q1">
       <label onclick="trueAns()" for="1.1" value="true">A. How do you do?</label><br/>
    <input type="radio" id="1.2" name="q1">
       <label for="1.2" value="false">B. Not too bad.</label><br/>
    <input type="radio" id="1.3" name="q1">
       <label for="1.3" value="false">C. I’m well. Thank you.</label> <br/>
    <input type="radio" id="1.4" name="q1">
     <label for="1.4" value="false">D. Yeah, OK.</label> 
 </div>
 <div class="scp-quizzes-data">
  <h3>2. Helen: "Where do you come from?"<br>Ann: "______."
</h3>
<br/>
    <input type="radio" id="2.1" name="q2">
       <label for="2.1" value="true">A. In London.</label><br/>
    <input type="radio" id="2.2" name="q2">
       <label for="2.2" value="false">B. Yes, I have just come here.</label><br/>
    <input type="radio" id="2.3" name="q2">
       <label for="2.3" value="false">C. I’m living in London.</label> <br/>
    <input type="radio" id="2.4" name="q2">
     <label onclick="trueAns()" for="2.4" value="false">D. I come from London.</label> 
 </div>
 <div class="scp-quizzes-data">
  <h3>3. Helen: “Congratulations!”<br>Jane: “______”
</h3>
<br/>
    <input type="radio" id="3.1" name="q3">
       <label for="3.1" value="true">A. What a pity!</label><br/>
    <input type="radio" id="3.2" name="q3">
       <label for="3.2" value="false">B. You are welcome.</label><br/>
    <input type="radio" id="3.3" name="q3">
       <label onclick="trueAns()" for="3.3" value="false">C. Thank you.</label> <br/>
    <input type="radio" id="3.4" name="q3">
     <label for="3.4" value="false">D. I’m sorry.</label> 
 </div>
  <div class="scp-quizzes-data">
  <h3>4. David: "Happy Christmas!"<br>Jason: "______"
</h3>
<br/>
    <input type="radio" id="4.1" name="q4">
       <label onclick="trueAns()" for="4.1" value="true">A. The same to you!</label><br/>
    <input type="radio" id="4.2" name="q3">
       <label for="4.2" value="false">B. Happy Christmas with you!</label><br/>
    <input type="radio" id="4.3" name="q3">
       <label for="4.3" value="false">C. You are the same!</label> <br/>
    <input type="radio" id="4.4" name="q3">
     <label for="4.4" value="false">D. Same for you!</label> 
 </div>
  <div class="scp-quizzes-data">
  <h3>5. - “Would you like to have dinner with me?”<br>- “______.”
</h3>
<br/>
    <input type="radio" id="5.1" name="q5">
       <label onclick="trueAns()" for="5.1" value="true">A. What a pity!</label><br/>
    <input type="radio" id="5.2" name="q3">
       <label for="5.2" value="false">B. You are welcome.</label><br/>
    <input type="radio" id="5.3" name="q3">
       <label for="5.3" value="false">C. Thank you.</label> <br/>
    <input type="radio" id="5.4" name="q3">
     <label for="5.4" value="false">D. I’m sorry.</label> 
 </div>
   <div class="scp-quizzes-data">
  <h3>6. Linda: "Excuse me! Where’s the post office?"<br>Maria: "______."
</h3>
<br/>
    <input type="radio" id="6.1" name="q6">
       <label for="6.1" value="true">A. Don’t worry.</label><br/>
    <input type="radio" id="6.2" name="q3">
       <label onclick="trueAns()" for="6.2" value="false">B. It’s over there.</label><br/>
    <input type="radio" id="6.3" name="q3">
       <label for="6.3" value="false">C. Yes, I think so.</label> <br/>
    <input type="radio" id="6.4" name="q3">
     <label for="6.4" value="false">D. I'm afraid not.</label> 
 </div>
   <div class="scp-quizzes-data">
  <h3>Sue: “I love pop music.”<br>Alice: “______”
</h3>
<br/>
    <input type="radio" id="7.1" name="q7">
       <labelfor="7.1" value="true">A. No, I won't.</label><br/>
    <input type="radio" id="7.2" name="q3">
       <label for="7.2" value="false">B. Neither do I.</label><br/>
    <input type="radio" id="7.3" name="q3">
       <label for="7.3" value="false">C. Yes, I like it.</label> <br/>
    <input type="radio" id="7.4" name="q3">
     <label onclick="trueAns()"  for="7.4" value="false">D. So do I.</label> 
 </div>
   <div class="scp-quizzes-data">
  <h3>8. - “_________”<br>-“Oh, it’s great!”
</h3>
<br/>
    <input type="radio" id="8.1" name="q8">
       <label for="8.1" value="true">A. How is the English competition like?</label><br/>
    <input type="radio" id="8.2" name="q3">
       <label for="8.2" value="false">B. Would you like the English competition?</label><br/>
    <input type="radio" id="8.3" name="q3">
       <label for="8.3" value="false">C. What do you like about the English competition?</label> <br/>
    <input type="radio" id="8.4" name="q3">
     <label onclick="trueAns()" for="8.4" value="false">D. What do you think of the English competition?</label> 
 </div>
   <a href="#" onclick="Re()" class="btn btn-primary btn-lg">Sub</a>
 </section>
  <div id="quiz2"></div>
  `
  );
    quizContainer.innerHTML = ty.join("");
  }
  var x = 0;
  function trueAns() {
  x++;
  };
  function Re() {
$(function(){
    $('section').addClass('test');
});
const ty2 = [];
const quiz2Container = document.getElementById("quiz2");   
      if(x > 5)
      {
  ty2.push(`
    <div class="container">
    <p style="padding-top:60px">
CẤP ĐỘ HIỆN TẠI: ĐANG HỌC
<br>1. Lộ trình ôn các kiến thức:
<br>- Ôn lại cấu trúc câu, từ vựng, ngữ pháp.
<br>- Ôn lại cách phát âm và ngữ điệu trong Tiếng Anh.
<br>- Ôn các từ nối câu, luyện nói các cụm từ, không nên luyện từng từ.
<br>- Luyện nói một số chủ đề từ vựng nâng cao: Work, Person, Event, Activities, Favorite…
<br>- Chuẩn bị một vài tình huốn cụ thể: đi ăn ở nhà hàng, tại bệnh viện, nhà ga, đặt phòng khách sạn, đi lại bằng xe buýt…
<br>- Tâp trả lời câu hỏi theo chủ đề sử dụng format A.R.E.A với Answer, Reason, Example, Alternative.
<br>- Luyện nghĩ bằng Tiếng Anh để tăng phản xạ.
<br>- Luyện nói với người bản xứ, lập nhóm học/tham gia câu lạc bộ, luyện nói với bạn bè, người xung quanh…
<br>- Xem các chương trình, phim sub.
<br>2. Phương pháp và quy tắc cần thiết:
<br>- Tập trung vào sự trôi chảy chứ không phải ngữ pháp, luyện đọc to, rõ ràng.
<br>- Hãy luyện Tongue Twisters – những chuỗi từ dài và khó nói nhanh.
<br>- Ghi âm, nghe lại và sửa lỗi những gì bạn nói.
<br>- Ôn luyện hằng ngày, nói bất cứ nơi đâu có thể.
<br>- Tạo lập môi trường nói Tiếng Anh càng nhiều càng tốt với mọi người xung quanh để nói trôi chảy, đúng ngữ pháp, không bị vấp, câu cú rõ ràng logic.
<br>- Cố gắng và thêm nhấn mạnh phụ vào những phần quan trọng mà bạn đang nói.
<br>- Học tất cả các hính thái của từ giúp vốn từ của bạn phong phú hơn.
<br>3. Thời gian ôn luyện: 30-60p/ngày, cuối tuần bạn nên tham gia các câu lạc bộ Tiếng Anh, đến những nơi có người nước ngoài và tập giao tiếp với họ về các chủ đề bạn đã biết.

    </p>
    </div>
    `); 
      }
      else
      {
  ty2.push(`
    <div class="container">
    <p style="padding-top:60px">
CẤP ĐỘ HIỆN TẠI: MẤT GỐC
<br>1. Lộ trình ôn các kiến thức:
<br>- Ôn lại cấu trúc câu, từ vựng, ngữ pháp.
<br>- Ôn lại cách phát âm và ngữ điệu trong Tiếng Anh.
<br>- Ôn các từ nối câu, luyện nói các cụm từ, không nên luyện từng từ.
<br>- Luyện nói một số chủ đề từ vựng cơ bản: People, The World, At Home, School & Workplaces…
<br>- Tập nói chuyện một mình. Bạn có thể luyện nói về một chủ đề cụ thể ở trên, hay viết một thẻ câu hỏi và luyện tập trả lời chúng.
<br>- Xem các chương trình, phim sub.
<br>- Lập nhóm học/tham gia câu lạc bộ, luyện nói với bạn bè, người xung quanh…
<br>2. Phương pháp và quy tắc cần thiết:
<br>- Nói thật chậm, phát âm tất cả các âm trong từ, luyện đọc to, rõ ràng.
<br>- Gắn liền với ngữ pháp mà bạn đã học.
<br>- Luyện tập trước bằng tiếng Việt
<br>- Ghi âm, nghe lại và sửa lỗi những gì bạn nói.
<br>- Ôn luyện hằng ngày, nói bất cứ nơi đâu có thể.
<br>- Tạo lập môi trường nói Tiếng Anh càng nhiều càng tốt với mọi người xung quanh để nói trôi chảy, đúng ngữ pháp, không bị vấp, câu cú rõ ràng logic.
<br>3. Thời gian ôn luyện: 5-10p/ngày, cuối tuần bạn nên tham gia các câu lạc bộ Tiếng Anh, đến những nơi có người nước ngoài và tập giao tiếp với họ về các chủ đề bạn đã biết.
<br>4. Tài liệu, Website bổ ích:
    </p>
    </div>
    `);         
      }
  quiz2Container.innerHTML = ty2.join("");
  }