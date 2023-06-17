'use strict';

// classがthumbに対応するオブジェクトをすべて代入
const thumbs = document.querySelectorAll('.thumb');

// 例 item=<img src="../images/room2.jpg" class="thumb" data-image="img1.jpg">, index=それぞれのオブジェクトの番号(自動で0からついている)
// htmlのdata-imageで代入した値を表示
thumbs.forEach(function(item, index){
    item.onclick = function() {
        document.getElementById('bigimg').src = this.dataset.image;
    }
});