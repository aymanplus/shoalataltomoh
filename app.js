/* ==========================================================================
   Product Database
   ========================================================================== */
const products = [
  // 1. MILKO BRAND (3 Cheeses)
  {
    id: "milko-feta-saudi",
    brand: "milko",
    category: "cheese",
    name: "فيتا سعودي (Saudi Feta)",
    image: "صور%20المنتجات/milko/الاجبان/m%20(2).png",
    description: "القوام المثالي الكلاسيكي للموائد المحلية، تُصنع يومياً بأعلى معايير النقاء وتقدم نكهة متزنة وممتازة لكافة الوجبات والسلطات.",
    specs: [
      "مكونة من حليب بقري مجفف منزوع الدسم بنسبة 10%",
      "تحتوي على زيوت نباتية صحية (نواة النخيل) بنسبة مدروسة",
      "رطوبة لا تزيد عن 60% لضمان تماسك مثالي وسهولة في التقطيع",
      "استخدام منفحة ميكروبية طبيعية معتمدة بنسبة 0.2%",
      "تخزن مبردة تحت نظام تبريد دقيق بدرجة 5.2 مئوية"
    ],
    sizes: ["500 جم", "1 كجم", "5 كجم (عبوة توريد تجاري)"]
  },
  {
    id: "milko-feta-hungarian",
    brand: "milko",
    category: "cheese",
    name: "فيتا هنغاري (Hungarian Feta)",
    image: "صور%20المنتجات/milko/الاجبان/m%20(3).png",
    description: "نكهة غنية ومميزة تلبي أذواق محبي الأجبان الأوروبية الشرقية، تمتاز بقوامها القوي المتماسك ونكهتها الحامضة المحببة.",
    specs: [
      "حليب مجفف منزوع الدسم بنسبة 10%",
      "زيوت نباتية صحية (نواة النخيل)",
      "رطوبة لا تزيد عن 60% لضمان التماسك التقليدي للفيتا الهنغاري",
      "منفحة ميكروبية طبيعية بنسبة 0.2%",
      "نسبة دسم لا تقل عن 40% للمادة الصلبة"
    ],
    sizes: ["500 جم", "1 كجم", "5 كجم", "10 كجم (HORECA)"]
  },
  {
    id: "milko-feta-danish",
    brand: "milko",
    category: "cheese",
    name: "فيتا دنماركي (Danish Feta)",
    image: "صور%20المنتجات/milko/الاجبان/m%20(1).png",
    description: "نعومة فائقة وقابلية ممتازة للدهن والتقطيع. تمتاز بقوام كريمي ناعم للغاية يذوب في الفم ويناسب السندوتشات والمقبلات الفاخرة.",
    specs: [
      "حليب بقري مجفف منزوع الدسم بنسبة 10%",
      "زيوت نباتية صحية (نواة النخيل) ممتازة للنكهة والنعومة",
      "رطوبة لا تزيد عن 60% لضمان الملمس الكريمي القابل للدهن",
      "منفحة ميكروبية طبيعية 0.2%",
      "ملح مائدة بنسبة 2.5% للحصول على حموضة متزنة"
    ],
    sizes: ["500 جم", "1 كجم", "5 كجم (HORECA)"]
  },

  // 2. MAMLAKAT AL-TAYEB BRAND - CHEESES (11 items)
  {
    id: "tayeb-cheese-alexandrian",
    brand: "tayeb",
    category: "cheese",
    name: "جبن اسكندراني فاخر",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(3).png",
    description: "وصفة إقليمية أصيلة مطورة لموائد اليوم، قوام غني ونكهة معتدلة ومميزة تضفي أصالة على مائدتكم.",
    specs: [
      "حليب طبيعي طازج مبستر",
      "ملح بحري خفيف ونقي",
      "مصنعة وفقاً لأعلى معايير الجودة والاشتراطات الصحية",
      "نسبة دسم لا تقل عن 40% للمادة الصلبة"
    ],
    sizes: ["1 كجم", "2 كجم", "10 كجم للتوريد التجاري"]
  },
  {
    id: "tayeb-cheese-feta",
    brand: "tayeb",
    category: "cheese",
    name: "جبن فيتا بلدية",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(2).png",
    description: "طعم غني وقوام متماسك، مثالي لجميع الموائد والسلطات اليومية والعائلية بعبوة ممتازة وسهلة الفتح.",
    specs: [
      "حليب بقري طازج بالكامل",
      "ملح مائدة متزن بنسبة 2.3%",
      "خالية من الإضافات والنشويات الصناعية",
      "قوام متماسك قابل للتقطيع لمكعبات"
    ],
    sizes: ["1 كجم", "2 كجم", "10 كجم"]
  },
  {
    id: "tayeb-cheese-domiaty",
    brand: "tayeb",
    category: "cheese",
    name: "جبن دمياطي معتق",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(1).png",
    description: "جبن أبيض معتق بعناية ذو نكهة عميقة وقوية تناسب عشاق المذاق الأصيل والتقليدي.",
    specs: [
      "حليب كامل الدسم مبستر",
      "تعتيق طويل الأمد تحت ظروف تبريد صارمة 5.2°C",
      "ملح بحري مركز ونكهة حادة لذيذة",
      "منفحة طبيعية 100%"
    ],
    sizes: ["1 كجم", "5 كجم", "10 كجم (تعبئة صفيح للمطابخ)"]
  },
  {
    id: "tayeb-cheese-baramily",
    brand: "tayeb",
    category: "cheese",
    name: "جبن براميلي كلاسيك",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(4).png",
    description: "نكهة قوية ومملحة بعناية فائقة وتخزين طويل الأمد لتجربة طعم تقليدية رائعة لا تُنسى.",
    specs: [
      "حليب بقري طازج مصنع محلياً 100%",
      "نسبة رطوبة متزنة تعطي قواماً جافاً متماسكاً",
      "ملح مرتفع نسبياً للتعتيق التقليدي في براميل الحفظ",
      "خالية تماماً من الزيوت المهدرجة"
    ],
    sizes: ["2 كجم", "10 كجم (براميل توريد)"]
  },
  {
    id: "tayeb-cheese-doublecream",
    brand: "tayeb",
    category: "cheese",
    name: "جبن دبل كريم غني",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(5).png",
    description: "قوام كريمي غني ودسم جداً، خيار مثالي للفنادق والمطاعم ومحلات المعجنات والمخابز الراقية.",
    specs: [
      "حليب بقري كامل الدسم مع إضافة قشطة طبيعية لرفع الدسم",
      "قوام ناعم جداً وسهل الدهن والخلط",
      "رطوبة مرتفعة وملح خفيف جداً لمذاق حلو وحليبي",
      "بدون أي مواد حافظة ضارة"
    ],
    sizes: ["1 كجم", "5 كجم", "10 كجم (سطل بلاستيك تجاري)"]
  },
  {
    id: "tayeb-cheese-lowsalt-fullfat",
    brand: "tayeb",
    category: "cheese",
    name: "جبن ملح خفيف كامل الدسم",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(8).png",
    description: "خيار صحي موزون يجمع بين الطعم الغني للدسم الكامل ونسبة الملح الخفيفة للمحافظة على الصحة وضغط الدم.",
    specs: [
      "حليب طازج كامل الدسم",
      "ملح خفيف جداً لا يتعدى 1.2%",
      "منفحة ميكروبية طبيعية وآمنة",
      "مثالية لمرضى الضغط والباحثين عن طعم لذيذ خفيف الملوحة"
    ],
    sizes: ["1.5 كجم", "3 كجم", "10 كجم"]
  },
  {
    id: "tayeb-cheese-lowsalt-lowfat",
    brand: "tayeb",
    category: "cheese",
    name: "جبن ملح خفيف قليل الدسم",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(6).png",
    description: "خيار صحي بامتياز وبدون دسم، خفيف جداً على المعدة وسهل الهضم مع الاحتفاظ بالطعم الطبيعي المتميز.",
    specs: [
      "مصنع من حليب فرز طبيعي منزوع الدسم جزئياً",
      "ملح خفيف جداً بنسبة 1% فقط",
      "غني بالكالسيوم والبروتين الطبيعي وقليل السعرات الحرارية",
      "مثالي للحميات والرياضيين"
    ],
    sizes: ["1 كجم", "2 كجم"]
  },
  {
    id: "tayeb-cheese-istambouly",
    brand: "tayeb",
    category: "cheese",
    name: "جبن اسطنبولي بالفلفل",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(9).png",
    description: "نكهة حارة ولذيذة معتقة بعناية بالتناغم مع قطع الفلفل الأخضر والأحمر الحار لتناسب المذاق الشرقي الأصيل.",
    specs: [
      "حليب طازج مع تعتيق متقن",
      "قطع فلفل حار طبيعية مفرومة وموزعة بانتظام",
      "نكهة حادة وحارة تناسب وجبات الفطور والمقبلات",
      "خالية من النكهات الاصطناعية"
    ],
    sizes: ["1 كجم", "2 كجم", "10 كجم (صفيح تجاري)"]
  },
  {
    id: "tayeb-cheese-olives",
    brand: "tayeb",
    category: "cheese",
    name: "جبن فيتا بالزيتون الأخضر",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(10).png",
    description: "مكعبات جبن بيضاء ممزوجة بقطع الزيتون الأخضر وزيت الزيتون والأعشاب البرية العطرية لتضفي طعماً ساحراً.",
    specs: [
      "جبن فيتا طازج معتدل الملوحة",
      "شرائح زيتون أخضر فاخرة مخلية",
      "مغمورة بزيت زيتون بكر ممتاز",
      "متبلة بالأعشاب الطبيعية والزعتر"
    ],
    sizes: ["1 كجم", "5 كجم للتوريد التجاري"]
  },
  {
    id: "tayeb-cheese-akkawi",
    brand: "tayeb",
    category: "cheese",
    name: "قشطة طازجة",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(7).png",
    description: "جبن عكاوي أبيض مخصص لصناعة الكنافة والحلويات والمعجنات الفاخرة، يمتاز بمرونته ومطاطيته العالية عند الذوبان.",
    specs: [
      "حليب بقري مبستر نقي 100%",
      "نسبة ملوحة تقليدية يتم التخلص منها بسهولة بالتحلية (النقع بالماء)",
      "مطاطية ممتازة وهيكل متماسك عند درجات الحرارة المرتفعة",
      "مفضل لدى كبرى محلات الحلويات بالمملكة"
    ],
    sizes: ["2 كجم", "10 كجم (قوالب تجارية)"]
  },
  {
    id: "tayeb-cheese-quresh",
    brand: "tayeb",
    category: "cheese",
    name: "قشطة بلدي",
    image: "صور%20المنتجات/مملكه%20الطيب/الاجبان/a%20(11).png",
    description: "جبن قريش طبيعي تقليدي غني ببروتين الكازين، خالي تماماً من أي دهون أو زيوت مضافة وملح خفيف جداً، رائع لبناء العضلات والتخسيس.",
    specs: [
      "مصنوع من حليب طبيعي طازج منزوع الدسم 100%",
      "ملح خفيف جداً 0.8%",
      "قوام رطب وخفيف بنسبة رطوبة متزنة",
      "بدون أي مواد حافظة أو زيوت مهدرجة"
    ],
    sizes: ["500 جم", "1 كجم"]
  },

  // 3. MAMLAKAT AL-TAYEB BRAND - LABNEH (7 items)
  {
    id: "tayeb-labneh-pomegranate",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة بالرمان ودبس الرمان",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(4).png",
    description: "لمسة حيوية استثنائية من حبات الرمان الطازجة الممزوجة باللبنة مع قطرات دبس الرمان الفاخر وزيت الزيتون لتقديم طبق مقبلات فاخر.",
    specs: [
      "لبنة بلدية مخملية كاملة الدسم من الحليب الطبيعي",
      "حبيبات رمان طازجة وحلوة مضافة يدوياً",
      "مغطاة بزيت زيتون بكر ممتاز ودبس رمان مصفى",
      "قوام متماسك وملمس كريمي ناعم"
    ],
    sizes: ["500 جم", "1 كجم", "2.5 كجم (أواني مقبلات جاهزة)"]
  },
  {
    id: "tayeb-labneh-makdous",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة مكدوس بالخلطة والمكسرات",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(1).png",
    description: "تمازج عبقري فاخر يجمع حموضة اللبنة المتوازنة وقرمشة جوز القلب (عين الجمل) والمكدوس الشامي المتبل بزيت الزيتون.",
    specs: [
      "لبنة بلدية كاملة الدسم مصفاة جيداً",
      "قطع مكدوس باذنجان متبل بالثوم والفلفل وزيت الزيتون",
      "قطع جوز عين جمل مقرمشة وفاخرة",
      "جاهزة للتقديم الفوري كمقبلات باردة"
    ],
    sizes: ["500 جم", "1 كجم", "2.5 كجم"]
  },
  {
    id: "tayeb-labneh-berries",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة بالتوت الطبيعي",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(2).png",
    description: "ابتكار جريء فريد يدمج القوام الكريمي الحامض للبنة وحلاوة التوت البري الطبيعي المنعشة. خيار رائع للفطور والحلويات العصرية.",
    specs: [
      "لبنة بلدية ناعمة جداً ومصفاة",
      "توت بري طبيعي (مربى التوت وقطع التوت الكاملة)",
      "نكهة حلوة وحامضة متناغمة تعجب الأطفال والشباب",
      "مظهر جذاب بلون مخملي جذاب"
    ],
    sizes: ["500 جم", "1 كجم"]
  },
  {
    id: "tayeb-labneh-veg",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة بالخضار والنعناع",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(7).png",
    description: "خلطتنا السرية الغنية بالتوابل والخضروات الطازجة كالجزر والنعناع الأخضر وزيت الزيتون، وجبة إفطار كاملة وشهية.",
    specs: [
      "لبنة مصفاة كاملة الدسم",
      "جزر مبشور ناعم، نعناع يابس مطحون، زيتون مفروم",
      "توابل خفيفة وزيت زيتون بكر",
      "طعم منعش ومثالي للسندوتشات والغموس"
    ],
    sizes: ["1 كجم", "2.5 كجم (جاهز للمطاعم)"]
  },
  {
    id: "tayeb-labneh-special",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة سبيشيل بالتوابل الحارة",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(5).png",
    description: "خلطة حارة فاخرة بالتوابل الشرقية وزيت الزيتون وحبة البركة والزعتر، تعطي مذاقاً غنياً ودافئاً لمحبي النكهات المبتكرة.",
    specs: [
      "لبنة بقري طازجة كاملة الدسم",
      "رقائق فلفل أحمر مجفف وحار مفروم ناعم",
      "زيت زيتون بكر ممتاز مغذي وحبة البركة السوداء",
      "نكهة حارة متزنة لا تؤذي المعدة"
    ],
    sizes: ["1500 جم", "2.5 كجم"]
  },
  {
    id: "tayeb-labneh-plain",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة سادة بلدية فاخرة",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(3).png",
    description: "لبنة بلدية كلاسيكية بقوام كريمي مخملي وطعم غني متوازن يرضي الذواقة، تُصنع يومياً بطريقة التصفية التقليدية.",
    specs: [
      "حليب بقري مبستر طازج 100%",
      "تصفية طبيعية بدون إضافة أي نشا أو مغلظات قوام",
      "قوام مخملي ثقيل ومثالي للدهن والتشكيل",
      "حموضة خفيفة منعشة وطبيعية"
    ],
    sizes: ["1 كجم", "5 كجم", "10 كجم (جردل تجاري لقطاع الأغذية)"]
  },
  {
    id: "tayeb-labneh-thyme",
    brand: "tayeb",
    category: "labneh",
    name: "لبنة بالزعتر الفلسطيني وزيت الزيتون",
    image: "صور%20المنتجات/مملكه%20الطيب/لبنه/l%20(6).png",
    description: "المزيج الكلاسيكي الأكثر طلباً وشعبية، يجمع بين اللبنة المخملية والزعتر الفلسطيني الأصلي بالسمسم وزيت الزيتون البكر.",
    specs: [
      "لبنة بلدية كاملة الدسم طازجة",
      "زعتر بلدي فاخر بسمسم محمص وسماق مضاف بعناية",
      "طبقة غنية من زيت الزيتون البكر الممتاز",
      "نكهة تقليدية رائعة وسريعة للتقديم"
    ],
    sizes: ["500 جم", "1 كجم", "2.5 كجم"]
  },

  // 4. MAMLAKAT AL-TAYEB BRAND - SALADS (4 items)
  {
    id: "tayeb-salad-mafrooka",
    brand: "tayeb",
    category: "salad",
    name: "سلطة أجبان مفروكة باردة",
    image: "صور%20المنتجات/مملكه%20الطيب/السلطات/s%20(3).png",
    description: "سلطة مقبلات باردة جاهزة للتقديم فوراً، قوامها غني ودسم، تدمج بين قطع الأجبان المفتتة والتوابل الشامية وزيت الزيتون.",
    specs: [
      "خلطة أجبان بيضاء طازجة مفتتة ومخلوطة بعناية",
      "نعناع بري جاف، رقائق فلفل حلو، زيتون أخضر مفروم",
      "مغمورة بزيت زيتون بكر ممتاز يعزز النكهة",
      "مفضلة جداً في بوفيهات الفنادق والمطاعم"
    ],
    sizes: ["1 كجم", "2 كجم", "5 كجم (عبوات تقديم تجاري)"]
  },
  {
    id: "tayeb-salad-fitacubes",
    brand: "tayeb",
    category: "salad",
    name: "سلطة مكعبات فيتا بالخضار والزيتون",
    image: "صور%20المنتجات/مملكه%20الطيب/السلطات/s%20(4).png",
    description: "مكعبات جبن متماسكة ممزوجة بالخضار الطازجة وزيت الزيتون والنعناع، جاهزة فوراً لتقديمها كطبق مقبلات فاخر في المطاعم والفنادق وتقلل وقت التحضير.",
    specs: [
      "مكعبات جبن فيتا متماسكة وصلبة لا تذوب",
      "قطع خضار طازجة (خيار، طماطم، فلفل ألوان، زيتون أسود وأخضر شرائح)",
      "متبلة بالأعشاب والنعناع وزيت الزيتون والليمون",
      "مثالية لقطاع HORECA لتوفير وقت العمالة والتحضير"
    ],
    sizes: ["1 كجم", "2 كجم", "5 كجم"]
  },
  {
    id: "tayeb-salad-mixcheese",
    brand: "tayeb",
    category: "salad",
    name: "سلطة أجبان مفروكة حارة",
    image: "صور%20المنتجات/مملكه%20الطيب/السلطات/s%20(2).png",
    description: "سلطة مقبلات غنية بمزيج رائع ومتنوع من مكعبات الأجبان المختلفة والتوابل والزعتر البري وزيت الزيتون البكر.",
    specs: [
      "أجبان بيضاء منوعة (شيدر، فيتا، جبن بلدي)",
      "زعتر بلدي بسمسم وسماق وتوابل شرقية",
      "زيت زيتون بكر ممتاز وفلفل أحمر بارد",
      "قوام متماسك وطعم متكامل الملوحة"
    ],
    sizes: ["1 كجم", "2 كجم"]
  },
  {
    id: "tayeb-salad-olivecheese",
    brand: "tayeb",
    category: "salad",
    name: "سلطة مكعبات فيتا حارة",
    image: "صور%20المنتجات/مملكه%20الطيب/السلطات/s%20(1).png",
    description: "سلطة مقبلات متميزة غنية بقطع الزيتون الأخضر والأسود الفاخر منزوع النوى وممزوج بفتات الجبنة والنعناع العطري وزيت الزيتون.",
    specs: [
      "زيتون أخضر وأسود مخلي شرائح كبيرة وفاخرة",
      "فتات وجبن بلدي طازج متبل",
      "نعناع يابس، فلفل أحمر حلو مفروم، كمون خفيف",
      "زيت زيتون بكر طبيعي"
    ],
    sizes: ["1 كجم", "2 كجم"]
  }
];

/* ==========================================================================
   State & Global Variables
   ========================================================================== */
let activeTheme = "corporate";
let currentSlideIndex = 0;
const totalSlides = 13;

/* ==========================================================================
   DOM Elements
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });

    // Close mobile menu when a link is clicked
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        icon = mobileToggle.querySelector("i");
        icon.className = "fa-solid fa-bars";
      });
    });
  }

  // Active Link Highlight on scroll
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Init Functions
  initBrandSwitcher();
  initSlider();
  initCatalog();
  initModals();
  initContactForm();
  initScrollReveal();
});

/* ==========================================================================
   Brand Switcher Logic
   ========================================================================== */
function initBrandSwitcher() {
  const switcherBtns = document.querySelectorAll(".switcher-btn");
  const headerLogo = document.getElementById("headerLogo");
  const heroBrandCard = document.getElementById("heroBrandCard");
  const heroShowcaseLogo = document.getElementById("heroShowcaseLogo");
  const heroShowcaseTitle = document.getElementById("heroShowcaseTitle");
  const heroShowcaseDesc = document.getElementById("heroShowcaseDesc");
  const brandSelect = document.getElementById("brandSelect");

  const brandData = {
    corporate: {
      logo: "",
      showcaseLogo: "",
      title: "شركة شعلة الطموح التجارية",
      desc: "الكيان الأم المالك لعلامتي مملكة الطيب وميلكو للأغذية الفاخرة.",
      selectValue: "all"
    },
    tayeb: {
      logo: "شعار%20البرندين/مملكة%20الطيب.png",
      showcaseLogo: "شعار%20البرندين/مملكة%20الطيب.png",
      title: "مملكة الطيب",
      desc: "للأجبان التراثية واللبنة الفاخرة المبتكرة بخلطات طبيعية سرية ونكهات تقليدية أصيلة.",
      selectValue: "tayeb"
    },
    milko: {
      logo: "شعار%20البرندين/ميلكو.png",
      showcaseLogo: "شعار%20البرندين/ميلكو.png",
      title: "ميلكو (Milko)",
      desc: "لأجبان الفيتا العالمية الفاخرة، المصنعة يومياً وفقاً لأعلى معايير النقاء والنعومة والتماسك.",
      selectValue: "milko"
    }
  };

  switcherBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme-target");
      if (theme) {
        // Set body theme
        document.body.dataset.theme = theme;
        activeTheme = theme;

        // Toggle active button on all switchers
        switcherBtns.forEach(b => {
          if (b.getAttribute("data-theme-target") === theme) {
            b.classList.add("active");
          } else {
            b.classList.remove("active");
          }
        });

        // Smoothly update visual assets
        const data = brandData[theme];
        
        // Header Logo
        if (headerLogo) {
          if (theme === "corporate") {
            headerLogo.style.opacity = "0";
            setTimeout(() => {
              headerLogo.src = "";
              headerLogo.style.display = "none";
            }, 200);
          } else {
            headerLogo.style.display = "block";
            headerLogo.style.opacity = "0";
            setTimeout(() => {
              headerLogo.src = data.logo;
              headerLogo.style.opacity = "1";
            }, 200);
          }
        }

        // Hero Card
        if (heroBrandCard && heroShowcaseLogo && heroShowcaseTitle && heroShowcaseDesc) {
          heroBrandCard.style.transform = "rotateY(0deg) scale(0.9)";
          heroBrandCard.style.opacity = "0.5";
          
          setTimeout(() => {
            const heroCorpLogos = document.getElementById("heroCorpLogos");
            const heroShowcaseBadge = document.getElementById("heroShowcaseBadge");
            
            if (theme === "corporate") {
              if (heroShowcaseLogo) heroShowcaseLogo.style.display = "none";
              if (heroCorpLogos) heroCorpLogos.style.display = "flex";
              heroShowcaseTitle.textContent = data.title;
              heroShowcaseDesc.textContent = data.desc;
              if (heroShowcaseBadge) heroShowcaseBadge.textContent = "صناعة سعودية 100%";
            } else {
              if (heroCorpLogos) heroCorpLogos.style.display = "none";
              if (heroShowcaseLogo) {
                heroShowcaseLogo.src = data.showcaseLogo;
                heroShowcaseLogo.style.display = "block";
                heroShowcaseLogo.style.opacity = "1";
              }
              heroShowcaseTitle.textContent = data.title;
              heroShowcaseDesc.textContent = data.desc;
              if (heroShowcaseBadge) {
                heroShowcaseBadge.textContent = theme === "tayeb" ? "براند سعودي فاخر" : "جودة عالمية مصنعة محلياً";
              }
            }
            
            heroBrandCard.style.transform = "rotateY(-10deg) rotateX(10deg)";
            heroBrandCard.style.opacity = "1";
          }, 300);
        }

        // Sync Contact Form Select Dropdown
        if (brandSelect) {
          brandSelect.value = data.selectValue;
        }

        // Auto filter products catalog based on theme selection
        filterCatalogByBrandTheme(theme);
      }
    });
  });
}

function filterCatalogByBrandTheme(theme) {
  // Sync the UI tabs in products catalog
  const brandTabs = document.querySelectorAll("#brandFilterTabs .filter-tab-btn");
  brandTabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.getAttribute("data-brand") === "all" && theme === "corporate") {
      tab.classList.add("active");
    } else if (tab.getAttribute("data-brand") === theme) {
      tab.classList.add("active");
    }
  });

  // Re-run the filter catalog script
  renderProducts();
}

/* ==========================================================================
   Interactive Slider Logic
   ========================================================================== */
function initSlider() {
  const slidesContainer = document.getElementById("slidesContainer");
  const prevSlideBtn = document.getElementById("prevSlideBtn");
  const nextSlideBtn = document.getElementById("nextSlideBtn");
  const slideIndicator = document.getElementById("slideIndicator");
  const thumbnailStrip = document.getElementById("thumbnailStrip");

  if (!slidesContainer || !prevSlideBtn || !nextSlideBtn || !slideIndicator || !thumbnailStrip) return;

  // Clear container
  slidesContainer.innerHTML = "";
  thumbnailStrip.innerHTML = "";

  // Generate slides and thumbnails
  for (let i = 1; i <= totalSlides; i++) {
    // Slide Card
    const slide = document.createElement("div");
    slide.className = `slide ${i === 1 ? 'active' : ''}`;
    slide.innerHTML = `<img src="البروفايل/pages/page_${i}.png" alt="الصفحة ${i} من بروفايل الشركة" loading="lazy">`;
    slidesContainer.appendChild(slide);

    // Thumbnail Button
    const thumb = document.createElement("button");
    thumb.className = `thumb-btn ${i === 1 ? 'active' : ''}`;
    thumb.setAttribute("data-slide-index", i - 1);
    thumb.innerHTML = `<img src="البروفايل/pages/page_${i}.png" alt="مصغرة ${i}">`;
    thumbnailStrip.appendChild(thumb);

    thumb.addEventListener("click", () => {
      goToSlide(i - 1);
    });
  }

  function goToSlide(index) {
    const slides = document.querySelectorAll(".slides-container .slide");
    const thumbs = document.querySelectorAll(".thumbnail-strip .thumb-btn");
    
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlideIndex = index;

    // Toggle active slide
    slides.forEach((s, idx) => {
      s.classList.remove("active");
      if (idx === index) s.classList.add("active");
    });

    // Toggle active thumb
    thumbs.forEach((t, idx) => {
      t.classList.remove("active");
      if (idx === index) {
        t.classList.add("active");
        // Scroll thumbnail strip to active thumb
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Update index label
    slideIndicator.textContent = `${index + 1} / ${totalSlides}`;
  }

  prevSlideBtn.addEventListener("click", () => {
    goToSlide(currentSlideIndex - 1);
  });

  nextSlideBtn.addEventListener("click", () => {
    goToSlide(currentSlideIndex + 1);
  });

  // Swipe gesture support for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  slidesContainer.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slidesContainer.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    // Swipe left (next) or swipe right (prev)
    if (touchStartX - touchEndX > 50) {
      goToSlide(currentSlideIndex + 1); // Swipe left
    }
    if (touchEndX - touchStartX > 50) {
      goToSlide(currentSlideIndex - 1); // Swipe right
    }
  }

  // Keyboard controls
  document.addEventListener("keydown", e => {
    // Only trigger if section is in viewport
    const rect = slidesContainer.getBoundingClientRect();
    const inViewport = (rect.top >= -200 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200);
    
    if (inViewport) {
      if (e.key === "ArrowLeft") {
        goToSlide(currentSlideIndex + 1);
      }
      if (e.key === "ArrowRight") {
        goToSlide(currentSlideIndex - 1);
      }
    }
  });
}

/* ==========================================================================
   Product Catalog Logic
   ========================================================================== */
function initCatalog() {
  const searchInput = document.getElementById("searchInput");
  const brandTabs = document.querySelectorAll("#brandFilterTabs .filter-tab-btn");
  const categoryTabs = document.querySelectorAll("#categoryFilterTabs .filter-tab-btn");

  if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
  }

  brandTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      brandTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProducts();
    });
  });

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProducts();
    });
  });

  // Initial render
  renderProducts();
}

function getSelectedBrand() {
  const activeBrandTab = document.querySelector("#brandFilterTabs .filter-tab-btn.active");
  return activeBrandTab ? activeBrandTab.getAttribute("data-brand") : "all";
}

function getSelectedCategory() {
  const activeCategoryTab = document.querySelector("#categoryFilterTabs .filter-tab-btn.active");
  return activeCategoryTab ? activeCategoryTab.getAttribute("data-category") : "all";
}

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("searchInput");

  if (!productsGrid || !resultsCount) return;

  const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedBrand = getSelectedBrand();
  const selectedCategory = getSelectedCategory();

  // Filter dataset
  const filtered = products.filter(product => {
    // 1. Search Query filter (matches name, description or specs)
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.specs.some(s => s.toLowerCase().includes(searchQuery));

    // 2. Brand filter
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;

    // 3. Category filter
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesBrand && matchesCategory;
  });

  // Render cards
  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state-box text-center glass-card" style="grid-column: 1 / -1; padding: 50px;">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3.5rem; color: var(--text-sub); margin-bottom: 20px;"></i>
        <h3>لم يتم العثور على أي منتج</h3>
        <p style="color: var(--text-sub); margin-top: 8px;">يرجى تجربة كلمات بحث أخرى أو تغيير تصفيات الفلترة.</p>
      </div>
    `;
    resultsCount.textContent = "عدد المنتجات: 0";
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card glass-card scroll-reveal revealed";
    
    // Setup category label in Arabic
    let catLabel = "أجبان";
    if (product.category === "labneh") catLabel = "لبنة";
    if (product.category === "salad") catLabel = "سلطات";

    const brandName = product.brand === "tayeb" ? "مملكة الطيب" : "ميلكو (Milko)";

    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-brand-label">${brandName}</div>
      <h3 class="product-title">${product.name}</h3>
      <p class="product-short-desc">${product.description}</p>
      <div class="product-footer">
        <span class="product-cat-tag">${catLabel}</span>
        <div class="view-details-indicator" aria-label="عرض التفاصيل"><i class="fa-solid fa-chevron-left"></i></div>
      </div>
    `;

    // Click event to open details modal
    card.addEventListener("click", () => {
      openProductModal(product);
    });

    productsGrid.appendChild(card);
  });

  resultsCount.textContent = `عدد المنتجات المعروضة: ${filtered.length}`;
}

/* ==========================================================================
   Modals Manager
   ========================================================================== */
function initModals() {
  const productModal = document.getElementById("productModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const pdfModal = document.getElementById("pdfModal");
  const pdfModalCloseBtn = document.getElementById("pdfModalCloseBtn");

  if (modalCloseBtn && productModal) {
    modalCloseBtn.addEventListener("click", () => {
      productModal.classList.remove("active");
    });
    // Click outside modal
    productModal.addEventListener("click", e => {
      if (e.target === productModal) {
        productModal.classList.remove("active");
      }
    });
  }

  if (pdfModalCloseBtn && pdfModal) {
    pdfModalCloseBtn.addEventListener("click", () => {
      pdfModal.classList.remove("active");
      const pdfIframe = document.getElementById("pdfIframe");
      if (pdfIframe) pdfIframe.src = "";
    });
    pdfModal.addEventListener("click", e => {
      if (e.target === pdfModal) {
        pdfModal.classList.remove("active");
        const pdfIframe = document.getElementById("pdfIframe");
        if (pdfIframe) pdfIframe.src = "";
      }
    });
  }

  // Bind PDF viewing buttons
  const viewPdfBtns = document.querySelectorAll(".view-pdf-btn");
  viewPdfBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-pdf-src");
      const title = btn.closest(".cert-card").querySelector("h3").textContent;
      if (src) {
        openPdfModal(src, title);
      }
    });
  });
}

function openProductModal(product) {
  const productModal = document.getElementById("productModal");
  const modalProductImage = document.getElementById("modalProductImage");
  const modalProductBrand = document.getElementById("modalProductBrand");
  const modalProductTitle = document.getElementById("modalProductTitle");
  const modalProductCategory = document.getElementById("modalProductCategory");
  const modalProductDesc = document.getElementById("modalProductDesc");
  const modalTechSpecsList = document.getElementById("modalTechSpecsList");
  const modalSizesTags = document.getElementById("modalSizesTags");
  const modalOrderBtn = document.getElementById("modalOrderBtn");

  if (!productModal) return;

  // Fill content
  modalProductImage.src = product.image;
  modalProductImage.alt = product.name;
  
  const brandName = product.brand === "tayeb" ? "مملكة الطيب" : "Milko (ميلكو)";
  modalProductBrand.textContent = brandName;
  modalProductTitle.textContent = product.name;
  
  let catLabel = "قسم الأجبان والتراثية";
  if (product.category === "labneh") catLabel = "قسم اللبنة الفاخرة";
  if (product.category === "salad") catLabel = "قسم السلطات الجاهزة للتقديم";
  modalProductCategory.textContent = catLabel;

  modalProductDesc.textContent = product.description;

  // Specs List
  modalTechSpecsList.innerHTML = "";
  product.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    modalTechSpecsList.appendChild(li);
  });

  // Package Sizes
  modalSizesTags.innerHTML = "";
  product.sizes.forEach(size => {
    const span = document.createElement("span");
    span.textContent = size;
    modalSizesTags.appendChild(span);
  });

  // Order WhatsApp URL
  const textMsg = `مرحباً شعلة الطموح، أود الاستفسار عن التوريد التجاري لمنتج: [ ${product.name} ] من علامة [ ${brandName} ] لقطاع الأعمال الخاص بنا.`;
  modalOrderBtn.href = `https://wa.me/966540221102?text=${encodeURIComponent(textMsg)}`;

  // Show
  productModal.classList.add("active");
}

function openPdfModal(src, title) {
  const pdfModal = document.getElementById("pdfModal");
  const pdfModalTitle = document.getElementById("pdfModalTitle");
  const pdfIframe = document.getElementById("pdfIframe");
  const pdfFallbackBox = document.getElementById("pdfFallbackBox");
  const pdfFallbackLink = document.getElementById("pdfFallbackLink");

  if (!pdfModal || !pdfIframe) return;

  pdfModalTitle.textContent = title;
  pdfFallbackBox.style.display = "none";
  pdfIframe.style.display = "block";

  // Attempt to load the PDF
  pdfIframe.src = src;

  // Handle fallback if load fails (or on mobile device browsers that block frames)
  pdfFallbackLink.href = src;
  
  // Basic frame load checking
  pdfIframe.onerror = () => {
    pdfIframe.style.display = "none";
    pdfFallbackBox.style.display = "flex";
  };

  pdfModal.classList.add("active");
}

/* ==========================================================================
   Contact Form Submission
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (!contactForm || !successMessage) return;

  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    // Collect data (front-end simulation)
    const data = {
      name: document.getElementById("clientName").value,
      phone: document.getElementById("clientPhone").value,
      email: document.getElementById("clientEmail").value,
      brand: document.getElementById("brandSelect").value,
      message: document.getElementById("clientMessage").value
    };

    console.log("Contact Form Submitted successfully:", data);

    // Show Success screen inside card
    successMessage.classList.add("active");

    // Clear form
    contactForm.reset();

    // Auto close success screen after 6 seconds
    setTimeout(() => {
      successMessage.classList.remove("active");
    }, 6000);
  });
}

/* ==========================================================================
   Scroll Reveal System (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".scroll-reveal");

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Optionally stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05, // trigger when 5% of card is visible
      rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support observer
    reveals.forEach(el => el.classList.add("revealed"));
  }
}
