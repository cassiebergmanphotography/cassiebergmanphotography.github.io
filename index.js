var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
	res.render('index.ejs');
});

app.get('/about',function(req,res){
	res.render('about.ejs');
});

app.get('/wedding', function(req,res){
	res.render('wedding.ejs');
});

var weddingImages = [
	{title: 'Wedding1', src:'https://c8.staticflickr.com/8/7522/27245000111_5dbe6f1c5b_b.jpg',subject: 'Wedding Photo Print', content: "Hi Cassie, I would like wedding1 photo printed, please choose size: size 1, size 2, size 3"}, 
	{title: 'Wedding2', src:'https://c8.staticflickr.com/8/7677/27244999271_1c6d1864e4_b.jpg'}, 
	{title: 'Wedding3', src:'https://c5.staticflickr.com/8/7664/27282008396_4327a4d07b_b.jpg'},
	{title: 'Wedding4', src:'https://c8.staticflickr.com/8/7312/26708888423_4259fc2aef_b.jpg'},
	{title: 'Wedding5', src:'https://c2.staticflickr.com/8/7111/26708886633_4a2ede3180_b.jpg'},
	{title: 'Wedding6', src:'https://c4.staticflickr.com/8/7753/27245001811_d348cc89bd_b.jpg'},
	{title: 'Wedding7', src:'https://c8.staticflickr.com/8/7246/26838415303_8c498d9d93_b.jpg'},
	{title: 'Wedding8', src:'https://c7.staticflickr.com/8/7055/27169330030_51e0e1b14b_b.jpg'},
	{title: 'Wedding9', src:'https://c7.staticflickr.com/8/7315/27169330750_18986d77ca_b.jpg'},
	{title: 'Wedding10', src:'https://c2.staticflickr.com/8/7304/26838417273_f8b7b0149a_b.jpg'},
	{title: 'Wedding11', src:'https://c3.staticflickr.com/8/7143/27169332010_de11516f4f_b.jpg'},
	{title: 'Wedding12', src:'https://c4.staticflickr.com/8/7342/26838418643_49b30e4d5e_b.jpg'},
	{title: 'Wedding13', src:'https://c8.staticflickr.com/8/7476/26838419183_398ec3ea5c_b.jpg'},
	{title: 'Wedding14', src:'https://c1.staticflickr.com/8/7226/27169333040_dfd055a5a0_b.jpg'},
	{title: 'Wedding15', src:'https://c1.staticflickr.com/8/7091/27169333440_d41199083b_b.jpg'},
	{title: 'Wedding16', src:'https://c8.staticflickr.com/8/7104/27446018695_8ea0fe5f42_b.jpg'},
	{title: 'Wedding17', src:'https://c7.staticflickr.com/8/7762/27169333910_491d5f77b7_b.jpg'},
	{title: 'Wedding18', src:'https://c8.staticflickr.com/8/7388/27446019175_c0418be9fc_b.jpg'},
	{title: 'Wedding19', src:'https://c8.staticflickr.com/8/7343/27374182111_dbb67d9bfe_b.jpg'},
	{title: 'Wedding20', src:'https://c2.staticflickr.com/8/7314/26838421993_d0a71a2532_b.jpg'},
	{title: 'Wedding21', src:'https://c6.staticflickr.com/8/7336/27374183581_03bc413d07_b.jpg'},
	{title: 'Wedding22', src:'https://c8.staticflickr.com/8/7043/27374184631_c71fecfa56_b.jpg'},
	{title: 'Wedding23', src:'https://c2.staticflickr.com/8/7673/26838424793_76d5c88e89_b.jpg'},
	{title: 'Wedding24', src:'https://c2.staticflickr.com/8/7026/26838426073_8c17895e5f_b.jpg'},
	{title: 'Wedding25', src:'https://c4.staticflickr.com/8/7296/26838430483_906984a394_b.jpg'}
];

app.get('/wedding-gallery', function(req,res){
	res.render('weddingGallery.ejs',{weddingImages: weddingImages});
});

app.get('/wedding-images/:idx',function(req,res){
	imagesIdx = parseInt(req.params.idx);
	console.log(imagesIdx);
	if(imagesIdx >= 0 && imagesIdx < weddingImages.length){
		res.render('weddingShow.ejs',{
			weddingImages: weddingImages[imagesIdx]
		}); 
	} else {
			res.send('error');
	};
});

app.get('/engagement', function(rew,res){
	res.render('engagement.ejs');
})

app.get('/engagement-gallery', function(req,res){
	res.render('engagementGallery.ejs', {engagementImages: engagementImages});
})

var engagementImages = [
	{title: 'engagement-photo1', src: 'https://c3.staticflickr.com/8/7441/27111226490_d51135e18b_b.jpg'},
	{title: 'engagement-photo2', src: 'https://c3.staticflickr.com/8/7741/27111225050_da7de3574a_b.jpg'},
	{title: 'engagement-photo3', src: 'https://c2.staticflickr.com/8/7316/26780178713_6f9b87887e_b.jpg'},
	{title: 'engagement-photo4', src: 'https://c2.staticflickr.com/8/7616/26780180673_584b6ea3ef_b.jpg'},
	{title: 'engagement-photo5', src: 'https://c3.staticflickr.com/8/7207/27111226010_d42c7f7f39_b.jpg'},
	{title: 'engagement-photo5', src: 'https://c6.staticflickr.com/8/7294/26780180293_fcf4bb17be_b.jpg'}
];

app.get('/engagement-images/:idx', function(req,res){
	var engagementIdx = parseInt(req.params.idx);
	if(engagementIdx >= 0 && engagementIdx < engagementImages.length){
		res.render('engagementShow.ejs', {
			engagementImages: engagementImages[engagementIdx]
		});
	} else {
		res.send('error');
	};
});

var kidsImages = [
{title: 'kids1', src: 'https://c1.staticflickr.com/8/7031/27353927336_1146f6bfcb_b.jpg'},
{title: 'kids2', src: 'https://c1.staticflickr.com/8/7299/27353930416_d9f4c2958d_b.jpg'},
{title: 'kids3', src: 'https://c5.staticflickr.com/8/7319/27353927956_7f941e5084_b.jpg'},
{title: 'kids4', src: 'https://c2.staticflickr.com/8/7789/27387391385_38f0f8a907_b.jpg'},
{title: 'kids5', src: 'https://c4.staticflickr.com/8/7064/27387390315_d15e2b3c09_b.jpg'},
{title: 'kids6', src: 'https://c5.staticflickr.com/8/7384/27353929676_d5f92ebe6f_b.jpg'},
{title: 'kids7', src: 'https://c5.staticflickr.com/8/7305/27353925836_9384387c5f_b.jpg'},
{title: 'kids8', src: 'https://c5.staticflickr.com/8/7422/26994993244_1077da87fe.jpg'},
{title: 'kids8', src: 'https://c7.staticflickr.com/8/7321/27327940350_65591fe387.jpg'},
{title: 'kids9', src: 'https://c2.staticflickr.com/8/7163/27387390785_a5903c1a85_b.jpg'},
{title: 'kids10', src: 'https://c4.staticflickr.com/8/7308/27387389875_92b5c06ab4_b.jpg'},
{title: 'kids11', src: 'https://c5.staticflickr.com/8/7546/27353926516_debd365a01_b.jpg'},
{title: 'kids12', src: 'https://c5.staticflickr.com/8/7738/27353928916_f3e97ab893_b.jpg'},
{title: 'kids13', src: 'https://c3.staticflickr.com/8/7305/27353927306_57d023b545_b.jpg'},
{title: 'kids14', src: 'https://c3.staticflickr.com/8/7218/27353925546_03bb9c0911_b.jpg'}
];

app.get('/kids', function(req,res){
	res.render('kids.ejs');
})

app.get('/kids-gallery',function(req,res){
	res.render('kidsGallery.ejs',{kidsImages: kidsImages});
})

app.get('/kids-images/:idx', function(req,res){
	var kidsIdx = parseInt(req.params.idx);
	if(kidsIdx >= 0 && kidsIdx < kidsImages.length){
		res.render('kidsShow.ejs',
			{kidsImages: kidsImages[kidsIdx]
		});
	} else {
		res.send('error');
	};
});

var familyImages = [
	{title: 'Family1',src:'https://c7.staticflickr.com/8/7283/27353917966_b5e96ddcae_b.jpg'},
	{title: 'Family2',src:'https://c3.staticflickr.com/8/7617/27289366882_32e4277320_b.jpg'}
]

app.get('/family', function(req,res){
	res.render('family.ejs');
})

app.get('/family-gallery', function(req,res){
	res.render('familyGallery.ejs',{familyImages: familyImages});
})

app.get('/family-images/:idx',function(req,res){
	var familyIdx = parseInt(req.params.idx);
	if(familyIdx >= 0 && familyIdx < familyImages.length){
		res.render('familyShow.ejs',
			{familyImages: familyImages[familyIdx]
		});
	} else {
		res.send('error');
	};
});

var maternityImages = [
	{title: 'Maternity1',src:'https://c3.staticflickr.com/8/7212/27353933746_f964fd7ec6_b.jpg'}
]

app.get('/maternity',function(req,res){
	res.render('maternity.ejs');
})

app.get('/maternity-gallery', function(req,res){
	res.render('maternityGallery.ejs',{maternityImages: maternityImages});
})

app.get('/maternity-images/:idx', function(req,res){
	var maternityIdx = parseInt(req.params.idx);
	if(maternityIdx >= 0 && maternityIdx < maternityImages.length){
		res.render('maternityShow.ejs',
			{maternityImages:maternityImages[maternityIdx]
		});
	} else {
		res.send('error');
	};
});

var graduationImages = [
{title: 'Graduation1', src:'https://c5.staticflickr.com/8/7347/27403088700_ec406e4c9b_c.jpg'},
{title: 'Graduation2', src:'https://c5.staticflickr.com/8/7254/27403088860_d103a21d62_c.jpg'},
{title: 'Graduation3', src:'https://c3.staticflickr.com/8/7292/27403088650_9ebc6aa9e0_c.jpg'},
{title: 'Graduation4', src:'https://c1.staticflickr.com/8/7210/27403088320_35227d7be9_c.jpg'},
{title: 'Graduation5', src:'https://c8.staticflickr.com/8/7385/27071081343_a72ed662fa_c.jpg'},
{title: 'Graduation6', src:'https://c7.staticflickr.com/8/7309/27403088870_8dba4a5b60_c.jpg'},
{title: 'Graduation7', src:'https://c7.staticflickr.com/8/7283/27403088950_6beba4acf7_c.jpg'},
{title: 'Graduation8', src:'https://c4.staticflickr.com/8/7438/27071081483_35706dec86_c.jpg'},
{title: 'Graduation9', src:'https://c1.staticflickr.com/8/7291/27403087840_55e1266218_c.jpg'},
{title: 'Graduation10', src:'https://c5.staticflickr.com/8/7392/27403088100_d4c12050da_c.jpg'},
{title: 'Graduation11', src:'https://c2.staticflickr.com/8/7765/27071081433_a1cf8eb34c_c.jpg'}
];

app.get('/graduation',function(req,res){
	res.render('graduation.ejs');
})

app.get('/graduation-gallery',function(req,res){
	res.render('graduationGallery',{graduationImages:graduationImages});
})

app.get('/graduation-images/:idx', function(req,res){
	var graduationIdx = parseInt(req.params.idx);
	if(graduationIdx >= 0 && graduationIdx < graduationImages.length){
		res.render('graduationShow.ejs',{
			graduationImages:graduationImages[graduationIdx]
		});
	}
})

app.get('/contact', function(req,res){
	res.render('contact.ejs');
})

app.listen(3000);