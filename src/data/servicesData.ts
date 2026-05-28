export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStats {
  successRate: string;
  recoveryTime: string;
  procedureDuration: string;
  anesthesiaType?: string;
}

export interface ClinicalService {
  slug: string;
  name: string;
  category: "surgical" | "skin-hair" | "weight";
  tag: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  stats: ServiceStats;
  process: string[];
  faqs: ServiceFAQ[];
  suitability: string;
  credentials: string[];
}

export const servicesData: ClinicalService[] = [
  {
    slug: "breast-reduction",
    name: "Breast Reduction Surgery",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "Relief from chronic back strain, shoulder grooving, and anatomical discomfort through expert, highly specialized clinical reduction.",
    longDescription: "Breast reduction surgery (reduction mammoplasty) is a life-changing procedure designed for individuals who experience physical discomfort, chronic neck/back pain, and skin irritation due to disproportionately large, heavy breasts. Led by board-certified plastic and reconstructive surgeons, Awish Clinic provides customized, tissue-sparing surgical mapping to reposition the nipple-areolar complex, excise excess glandular tissue and skin, and create a lighter, more symmetrical breast contour that fits your natural body proportions.",
    benefits: [
      "Permanent relief from physical neck, back, and shoulder pain",
      "Elimination of deep shoulder strap grooving and sub-mammary rashes",
      "Enhanced physical mobility and capacity to engage in athletic activity",
      "Beautiful, proportional breast symmetry with optimal lift"
    ],
    stats: {
      successRate: "99%",
      recoveryTime: "2 - 3 Weeks",
      procedureDuration: "3 - 4 Hours",
      anesthesiaType: "General Anesthesia"
    },
    process: [
      "Initial Assessment: Precise physical mapping, tissue laxity analysis, and medical clearance reviews.",
      "Pre-Op Planning: Symmetrical markings outlining the new nipple-areolar complex location and tissue excise boundaries.",
      "Surgical Execution: Under general anesthesia, excess skin, fat, and glandular tissue are sculpted away using advanced tissue-sparing methods.",
      "Suturing & Support: Micro-layered closing to reduce scarring, followed by application of supportive surgical garments."
    ],
    faqs: [
      {
        question: "How long before I can return to normal physical activity?",
        answer: "Light walking is encouraged immediately after surgery to assist circulation. Most patients return to desk jobs within 10-14 days. However, high-impact exercise, heavy lifting, and strenuous chest workouts should be avoided for 6 weeks."
      },
      {
        question: "Will the results be permanent?",
        answer: "Yes, the physical reduction of breast tissue is permanent. However, significant weight fluctuations, pregnancy, or aging can affect the shape and volume of the breasts over time."
      },
      {
        question: "Will breast reduction affect my ability to breastfeed?",
        answer: "While modern techniques prioritize keeping the milk ducts and nerve connections intact, there is a possibility that breastfeeding capacity may be reduced. It is best to discuss your family planning goals during your consultation."
      }
    ],
    suitability: "Patients experiencing physical discomfort (back, neck, or shoulder pain), skin irritation beneath the breasts, or self-consciousness due to breast volume.",
    credentials: ["Board-Certified Reconstructive Surgeon", "Advanced Daycare Surgery Facility", "Private Post-Operative Recovery Suite"]
  },
  {
    slug: "breast-enlargement",
    name: "Breast Enlargement Surgery",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "Proportional, natural-looking breast augmentation tailored specifically to your body goals, using world-class US-FDA approved safe implants.",
    longDescription: "Breast enlargement (augmentation mammoplasty) at Awish Clinic is custom-designed to enhance breast fullness, restore lost volume after pregnancy or weight changes, and correct natural asymmetry. We utilize only premium, cohesive-gel silicone implants that are US-FDA approved, ensuring unparalleled safety, durability, and a highly natural feel. Our surgical team plans implant placement (submuscular or subglandular) based on your unique anatomy, skin elasticity, and aesthetic aspirations.",
    benefits: [
      "Enhanced breast volume, projection, and cleavage contour",
      "Symmetrical restoration addressing congenital asymmetry",
      "Use of highly durable, US-FDA approved cohesive silicone gel implants",
      "Tailored pocket placement (submuscular/subglandular) for natural results"
    ],
    stats: {
      successRate: "98.5%",
      recoveryTime: "1 - 2 Weeks",
      procedureDuration: "1.5 - 2.5 Hours",
      anesthesiaType: "General Anesthesia"
    },
    process: [
      "Consultation & Sizing: Advanced anatomic assessment and selection of ideal implant profiles (round vs. anatomical).",
      "Incision Selection: Collaborative choice of incision site (inframammary, periareolar, or transaxillary) to hide future scarring.",
      "Implant Placement: Under general anesthesia, a precise pocket is created and the implant is safely positioned.",
      "Closure: Fine sutures are placed and support dressings are applied to optimize the initial setting."
    ],
    faqs: [
      {
        question: "What is the difference between silicone and saline implants?",
        answer: "We primarily recommend cohesive silicone gel implants because they mimic the natural texture of breast tissue more closely and are less prone to rippling, offering a superior aesthetic outcome."
      },
      {
        question: "Do modern breast implants need to be replaced every 10 years?",
        answer: "Not automatically. Modern US-FDA approved implants are highly durable and can last much longer. We recommend routine annual evaluations to ensure the integrity of the implants."
      },
      {
        question: "What does recovery look like in the first few days?",
        answer: "Some chest tightness and mild swelling are normal. A specialized supportive recovery bra must be worn 24/7. Pain is manageable with prescribed oral medications, and most swelling subsides dramatically within the first 2-3 weeks."
      }
    ],
    suitability: "Women desiring fuller breasts, seeking to restore volume lost due to nursing or weight loss, or looking to resolve significant natural asymmetry.",
    credentials: ["US-FDA Approved Safe Implants Only", "Custom Dynamic Sizing Mapping", "Comprehensive Annual Checkups"]
  },
  {
    slug: "hair-transplant",
    name: "FUE Hair Transplant",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "Ultra-natural hair restoration using advanced Follicular Unit Extraction (FUE) to re-establish crown density and custom hairlines.",
    longDescription: "Awish Clinic is a premier destination for FUE (Follicular Unit Extraction) hair transplantation. This state-of-the-art, minimally invasive procedure involves harvesting individual follicular units from a donor area (typically the back or sides of the head) and grafting them into thinning or balding regions. Led by our certified trichology surgeons, we calculate optimal graft angles, natural hair swirl patterns, and dense packing structures to ensure high follicle survival rates and a completely natural, undetectable hairline.",
    benefits: [
      "High follicle survival rate with minimally invasive extraction",
      "No linear donor scars, allowing for short haircuts post-procedure",
      "Meticulous mapping of natural hair growth angles for seamless blending",
      "Permanent, self-growing hair that can be cut, styled, and washed normally"
    ],
    stats: {
      successRate: "98%",
      recoveryTime: "5 - 7 Days",
      procedureDuration: "4 - 8 Hours",
      anesthesiaType: "Local Anesthesia with Sedation"
    },
    process: [
      "Hairline Design: Detailed mapping of the recipient zone and artistic creation of the new hairline framework.",
      "Donor Harvesting: Individual hair follicles are carefully extracted from the dense donor area using micro-punches.",
      "Graft Preparation: Harvested grafts are sorted, hydrated, and chilled in specialized nutrient media to maintain vitality.",
      "Implantation: Micro-channels are created at precise angles, and grafts are systematically implanted into thinning areas."
    ],
    faqs: [
      {
        question: "Is the FUE hair transplant procedure painful?",
        answer: "The procedure is performed under local anesthesia, so you will feel no pain during the harvesting or implantation phases. Patients can comfortably watch movies, listen to music, or read during the session."
      },
      {
        question: "When will I see the final results?",
        answer: "Transplanted hair naturally sheds around 3-4 weeks post-op (called 'shock loss'), which is normal. New, permanent hair growth begins at month 3. Significant styling density is visible by month 6, with the final mature density achieved at 12 months."
      },
      {
        question: "How many grafts will I need?",
        answer: "This depends entirely on your stage of alopecia (Norwood Scale) and hairline goals. During your consultation, we use digital scalp analyzers to determine the exact graft count required."
      }
    ],
    suitability: "Individuals experiencing male or female pattern baldness, receding hairlines, or crown thinning who have a stable donor area on the back of the scalp.",
    credentials: ["Micro-Punch Follicle Extraction", "Certified Trichology Experts", "Sterile Double-Sanitized Operating Suites"]
  },
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty Surgery (Nose Reshaping)",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "Nose reshaping to enhance facial symmetry, adjust nasal bridges, and improve structural breathing patterns.",
    longDescription: "Rhinoplasty, commonly referred to as a 'nose job', is a highly specialized procedure that balances cosmetic harmony with nasal airway function. At Awish Clinic, we approach rhinoplasty with surgical artistry and clinical precision. Whether you are looking to smooth a nasal bump, narrow a wide tip, adjust nose projection, or repair a deviated septum that obstructs normal breathing, our board-certified surgeons create a personalized plan to deliver elegant, balanced results that complement your entire facial structure.",
    benefits: [
      "Perfected facial symmetry and natural aesthetic proportions",
      "Correction of dorsal humps, bulbous tips, and crooked bridges",
      "Significant structural improvement in nasal airflow and breathing",
      "Precise closed or open surgical techniques designed to minimize visible scars"
    ],
    stats: {
      successRate: "97.5%",
      recoveryTime: "1 - 2 Weeks",
      procedureDuration: "2 - 3 Hours",
      anesthesiaType: "General Anesthesia"
    },
    process: [
      "Aesthetic Mapping: Detailed digital analysis of facial angles, nasal proportions, and internal septum pathways.",
      "Access & Incision: Incisions are carefully hidden inside the nostrils (closed) or across the narrow strip of skin between them (open).",
      "Structural Sculpting: Sub-dermal bone and cartilage are carefully reshaped, and any septal deviation is corrected.",
      "Splinting & Protection: The new framework is secured with a protective splint to support healing and maintain alignment."
    ],
    faqs: [
      {
        question: "How long must I wear the external nose splint?",
        answer: "The external splint must remain dry and in place for 7 days post-surgery. Our team will gently remove the splint and any structural sutures during your first follow-up appointment."
      },
      {
        question: "When will the swelling go away?",
        answer: "About 80% of visible bruising and swelling resolves within 10-14 days. The remaining minor tissue swelling, particularly around the nasal tip, refines gradually over 6 to 12 months."
      },
      {
        question: "Will a cosmetic rhinoplasty fix my breathing problems?",
        answer: "Absolutely. If you have a deviated septum or turbinate hypertrophy, we can combine cosmetic reshaping with a septoplasty (functional rhinoplasty) to improve breathing and aesthetics simultaneously."
      }
    ],
    suitability: "Adults seeking to correct nasal bumps, wide tips, crooked nasal bridges, or individuals dealing with chronic nasal congestion caused by a deviated septum.",
    credentials: ["Double Board-Certified Plastic Surgeon", "High-Precision Surgical Cartilage Sculpting", "Complete Post-Surgical Support"]
  },
  {
    slug: "dimple-creation",
    name: "Dimple Creation Surgery",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "A quick, outpatient micro-procedure to create natural-looking cheek dimples with precise suture anchoring.",
    longDescription: "Dimpleplasty is a highly popular, safe, and minimally invasive outpatient procedure that creates natural-looking dimples on the cheeks or chin. Dimples are naturally caused by a small split in the buccinator muscle. During this quick 30-minute procedure, our skilled surgeons create this connection artificially through a tiny, completely internal incision. Because the entire procedure is performed from inside the mouth, there is absolutely no external scarring, and the results are permanent and highly expressive.",
    benefits: [
      "Quick 30-minute outpatient procedure with immediate discharge",
      "Completely internal technique resulting in zero external scarring",
      "Custom placement aligned with your natural smile lines",
      "Permanent, charming results that look beautiful and highly authentic"
    ],
    stats: {
      successRate: "99%",
      recoveryTime: "3 - 5 Days",
      procedureDuration: "30 - 45 Minutes",
      anesthesiaType: "Local Anesthesia"
    },
    process: [
      "Position Planning: The surgeon maps the exact spot on the cheek where the dimple will appear most natural.",
      "Local Numbing: Local anesthesia is administered internally to ensure a completely pain-free experience.",
      "Micro-Anchoring: A tiny internal incision is made, and a specialized dissolvable suture is passed through the cheek muscle to link it to the skin.",
      "Post-Op Rinse: Specialized antibacterial mouthwash is prescribed to keep the internal suture site completely sterile."
    ],
    faqs: [
      {
        question: "Will the dimple be visible all the time?",
        answer: "Initially, the dimple will be visible even when your face is at rest. As the internal tissue heals and the suture dissolves (typically 2-3 weeks), the dimple will settle and appear only when you smile, just like a natural dimple."
      },
      {
        question: "Is the procedure painful?",
        answer: "Not at all. We use a localized numbing agent inside the cheek, so you will feel no pain during the procedure. Post-op tenderness is minimal and easily managed with standard mild pain relievers."
      },
      {
        question: "What should I eat after the procedure?",
        answer: "We recommend eating soft foods for the first 3-5 days and rinsing your mouth with the prescribed antiseptic wash after every meal to ensure clean healing."
      }
    ],
    suitability: "Individuals who want to add charm and facial expression with permanent, natural-looking cheek or chin dimples.",
    credentials: ["Zero-External-Scar Technique", "Done Under Simple Local Numbing", "Dissolvable Micro-Sutures"]
  },
  {
    slug: "facelift",
    name: "Facelift Surgery (Rhytidectomy)",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "Look refreshed and completely natural. Relieve skin laxity, restore midface volume, and contour jawlines safely.",
    longDescription: "A facelift (rhytidectomy) at Awish Clinic is designed to counteract the visible signs of aging by tightening the underlying muscle layers (SMAS) and removing excess, sagging skin. Rather than simply pulling the skin tight, our surgical specialists lift the deeper structural tissues of the face. This sophisticated technique prevents the unnatural 'windblown' look, restoring youthful volume to the cheeks, sharpening a sagging jawline, and smoothing deep creases around the mouth and nose.",
    benefits: [
      "Tightens deep muscular layers (SMAS) for organic, youthful contours",
      "Restores natural volume to flat cheeks and smooths hollow regions",
      "Virtually invisible scars hidden along the natural hairline and ear creases",
      "Can be combined with neck lifting to completely address lower face sagging"
    ],
    stats: {
      successRate: "98%",
      recoveryTime: "2 - 3 Weeks",
      procedureDuration: "3 - 5 Hours",
      anesthesiaType: "General Anesthesia or Deep Sedation"
    },
    process: [
      "Comprehensive Consultation: Full facial evaluation focusing on bone structure, skin elasticity, and muscle tone.",
      "Incisions: Placed carefully along the hairline, extending in front of and behind the ears to conceal scarring.",
      "SMAS Muscle Lift: The deep facial muscles and structural tissues are lifted, repositioned, and secured.",
      "Skin Redraping: Excess skin is gently draped, the redundant tissue is trimmed, and delicate sutures are placed."
    ],
    faqs: [
      {
        question: "How long do the results of a facelift last?",
        answer: "A high-quality SMAS facelift typically turns back the clock by 10-15 years. While your face will continue to age naturally, you will always look significantly younger than if you had not undergone the procedure."
      },
      {
        question: "Will I look unnatural or tight after the surgery?",
        answer: "No. The tight, 'windblown' look is a result of older surgical techniques that only pulled the skin. By focusing on lifting the deep muscle layers (SMAS), we achieve a soft, youthful, and completely natural rejuvenation."
      },
      {
        question: "What is the recovery timeline?",
        answer: "Most swelling and bruising peak by day 3 and subside significantly within 10-14 days, after which you can confidently return to social activities and apply makeup. Full structural healing takes about 4-6 weeks."
      }
    ],
    suitability: "Men and women experiencing moderate to severe facial sagging, deep jowls, loose neck skin, or heavy lines around the nose and mouth.",
    credentials: ["Expert SMAS Lift Specialists", "Advanced Scar-Concealment Techniques", "Dedicated Concierge Post-Op Care"]
  },
  {
    slug: "blepharoplasty",
    name: "Blepharoplasty (Eyelid Surgery)",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "Remove heavy eye bags and drooping eyelids to reveal a well-rested, youthful, and naturally brightened gaze.",
    longDescription: "Blepharoplasty (eyelid rejuvenation) is a highly effective surgical procedure that targets puffiness, heavy bags under the eyes, and sagging upper eyelids that can make you look constantly fatigued or even interfere with your vision. At Awish Clinic, we perform both upper and lower blepharoplasty. By carefully removing excess skin, muscle, and repositioning structural fat deposits, we restore a bright, rested, and youthful frame to your eyes while preserving your unique natural expressions.",
    benefits: [
      "Eliminates heavy, drooping upper eyelid skin that can obstruct vision",
      "Smoothes puffy, fluid-filled bags and dark hollows under the lower eyes",
      "Erases chronic signs of fatigue, creating an alert and refreshed gaze",
      "Micro-incisions hidden in the natural eyelid crease or inside the lower lid"
    ],
    stats: {
      successRate: "98.5%",
      recoveryTime: "7 - 10 Days",
      procedureDuration: "1 - 2 Hours",
      anesthesiaType: "Local Anesthesia with Sedation"
    },
    process: [
      "Eyelid Mapping: The surgeon marks the natural skin folds to ensure incisions are completely hidden when the eyes are open.",
      "Upper/Lower Incisions: For upper lids, incisions are in the natural crease. For lower lids, the incision is just below the lash line or entirely inside the lid.",
      "Fat & Tissue Adjustment: Excess skin and muscle are trimmed, and herniated fat pads are repositioned or removed.",
      "Delicate Closure: Ultra-fine sutures are placed, and cooling eye pads are applied to minimize immediate swelling."
    ],
    faqs: [
      {
        question: "Will blepharoplasty get rid of my under-eye wrinkles completely?",
        answer: "While it significantly tightens loose skin and flattens eye bags, very fine wrinkles or crow's feet around the temples are better addressed with complementary treatments like Botox or laser resurfacing."
      },
      {
        question: "Are the incisions visible?",
        answer: "Upper eyelid incisions are perfectly hidden within your natural eyelid crease. Lower eyelid incisions are placed either inside the eyelid (transconjunctival technique, leaving no scar) or right under the lower eyelashes, which fades to a faint, invisible line."
      },
      {
        question: "How should I prepare for post-op recovery?",
        answer: "You should plan to rest with your head elevated and apply cold compresses frequently during the first 48 hours. Most patients experience minimal discomfort and can return to wearing contact lenses and reading within 7-10 days."
      }
    ],
    suitability: "Patients with sagging or puffy eyelids, tired-looking eyes, or vision obstruction caused by loose skin hanging over the eyelashes.",
    credentials: ["Delicate Ophthalmic Surgical Focus", "Scarless Inner-Lid Lower Blepharoplasty", "US-FDA Approved Precision Tech"]
  },
  {
    slug: "hymenoplasty",
    name: "Hymenoplasty Surgery (Hymen Restoration)",
    category: "surgical",
    tag: "Surgical / Aesthetic",
    shortDescription: "A completely private, secure cosmetic procedure to reconstruct and restore the hymen with absolute clinical confidentiality.",
    longDescription: "Hymenoplasty (hymen reconstruction surgery) is a delicate gynecological procedure designed to repair and reconstruct the thin, ring-like vaginal membrane known as the hymen. At Awish Clinic, we prioritize patient comfort, safety, and absolute confidentiality. Performed by our highly experienced, female board-certified gynecological surgeons, this minor outpatient procedure uses ultra-fine, self-dissolving sutures to rejoin the torn edges of the hymen, restoring its anatomical integrity with zero external scars.",
    benefits: [
      "Absolute 100% patient confidentiality and private consultation suites",
      "Reconstruction of the hymeneal membrane using advanced micro-sutures",
      "Quick outpatient procedure with dissolvable sutures and zero scarring",
      "Performed in a highly sterile, safe, and supportive clinical environment"
    ],
    stats: {
      successRate: "99%",
      recoveryTime: "1 - 2 Weeks",
      procedureDuration: "45 - 60 Minutes",
      anesthesiaType: "Local Anesthesia with Sedation"
    },
    process: [
      "Private Consultation: Comprehensive medical discussion in a fully private, empathetic, and secure environment.",
      "Surgical Prep: Gentle prep under local anesthesia paired with light sedation to ensure absolute physical comfort.",
      "Hymenal Reconstruction: The torn tags of the hymeneal tissue are precisely aligned and sutured with self-absorbing thread.",
      "Post-Op Recovery: A brief rest in our private suite before discharge, complete with detailed hygiene guidelines."
    ],
    faqs: [
      {
        question: "Is the procedure completely confidential?",
        answer: "Absolutely. At Awish Clinic, privacy is our highest priority. All patient records, consultations, and surgical schedules are protected under strict clinical confidentiality protocols."
      },
      {
        question: "How long before the sutures dissolve?",
        answer: "We use specialized, ultra-fine absorbable sutures that dissolve naturally within 10-14 days, meaning you do not need to return to the clinic for suture removal."
      },
      {
        question: "What is the recommended recovery period?",
        answer: "Most patients return to light, daily activities within 2-3 days. However, heavy lifting, strenuous workouts, swimming, and vaginal insertion (tampons/intercourse) must be avoided for 6 weeks to ensure proper healing."
      }
    ],
    suitability: "Women seeking hymen reconstruction for personal, cultural, or physical reasons in a safe and supportive clinical environment.",
    credentials: ["Female Board-Certified Gynecological Surgeons", "Absolute 100% Privacy Protocols", "Dissolvable Micro-Sutures"]
  },
  {
    slug: "white-glow",
    name: "White Glow Therapy",
    category: "skin-hair",
    tag: "Skin & Hair",
    shortDescription: "Dermatologist-led deep skin brightening and hyperpigmentation therapy utilizing professional antioxidant infusions and medical peels.",
    longDescription: "White Glow Therapy is Awish Clinic's signature medical-grade skin brightening and rejuvenation program. Unlike standard salon facials, this dermatologist-designed treatment targets stubborn dermal hyperpigmentation, melasma, sun damage, and uneven tone at the cellular level. By combining high-potency medical peels (such as lactic or salicylic acids) with micro-infusions of pure glutathione, vitamin C, and hyaluronic acid, we encourage rapid cell turnover, neutralize free radicals, and suppress excess melanin production for a radiant complexion.",
    benefits: [
      "Dramatically reduces dark spots, melasma, and stubborn hyperpigmentation",
      "Exfoliates dead epidermal layers to reveal a smooth, glass-like skin texture",
      "Infuses deep-acting antioxidants to brighten skin tone from within",
      "Dermatologist-formulated and completely customized to your skin sensitivity"
    ],
    stats: {
      successRate: "96%",
      recoveryTime: "Immediate (Zero Downtime)",
      procedureDuration: "60 - 75 Minutes",
      anesthesiaType: "None (Painless)"
    },
    process: [
      "Skin Assessment: A detailed analysis of your skin type, hydration levels, and pigmentation depth using diagnostic wood lamps.",
      "Deep Cleansing: Clinical vacuum exfoliation to remove dirt, sebum, and prepare the skin barrier.",
      "Targeted Medical Peel: Application of a mild, customized peel to gently dissolve hyperpigmentation and stimulate cell renewal.",
      "Antioxidant Infusion: Ultrasonic delivery of highly concentrated glutathione and vitamin C to brighten and hydrate."
    ],
    faqs: [
      {
        question: "How many sessions will I need to see significant results?",
        answer: "You will notice a refreshed, glowing complexion immediately after your first session. For lasting pigment reduction and a brighter skin tone, we generally recommend a structured series of 4-6 sessions spaced 2 weeks apart."
      },
      {
        question: "Is there any peeling or downtime after the treatment?",
        answer: "There is zero downtime. Since we use advanced, self-neutralizing medical-grade peels, you may experience only very mild redness that resolves within a few hours. You can return to normal activities immediately."
      },
      {
        question: "Is the treatment safe for sensitive skin?",
        answer: "Yes. Our dermatologists adjust the strength and ingredients of the medical peels and infusions to match your specific skin tolerance, making it completely safe and highly effective even for sensitive skin."
      }
    ],
    suitability: "Individuals seeking to resolve dullness, sunspots, uneven skin tone, melasma, or dry, scaling skin textures.",
    credentials: ["Dermatologist Supervised Protocols", "US-FDA Approved Active Ingredients", "Immediate Radiant Rejuvenation"]
  },
  {
    slug: "pimple-scar-treatment",
    name: "Pimple & Scar Resurfacing",
    category: "skin-hair",
    tag: "Skin & Hair",
    shortDescription: "Dermatologist-grade revision of deep-pitted acne scars (boxcar, icepick, rolling) using RF microneedling and fractional lasers.",
    longDescription: "Acne scars can be a source of persistent self-consciousness. At Awish Clinic, we provide comprehensive, dermatologist-grade scar revision using a combination of the world's most advanced skin resurfacing technologies. Our specialized plans combine Fractional CO2 Laser resurfacing, RF (Radiofrequency) Microneedling, and subcision. This multi-layered approach breaks down the tough, fibrous anchor bands under deep scars, stimulates massive new collagen production, and smooths out uneven, pitted skin texture.",
    benefits: [
      "Reconstructs deep boxcar, icepick, and rolling acne scars",
      "Stimulates natural, long-term collagen synthesis for skin rebuilding",
      "Refines enlarged pores and smooths rough epidermal texture",
      "Custom combined therapies tailored to the depth of your scars"
    ],
    stats: {
      successRate: "95%",
      recoveryTime: "3 - 5 Days",
      procedureDuration: "45 - 60 Minutes",
      anesthesiaType: "Topical Numbing Cream"
    },
    process: [
      "Scar Diagnostic: Digital mapping of scar types (rolling, boxcar, icepick) to define the ideal therapy mix.",
      "Anesthetic Prep: Application of a high-potency topical numbing cream for 45 minutes to ensure full comfort.",
      "RF Microneedling / Laser: Precise delivery of radiofrequency thermal energy or fractional laser beams deep into the dermis.",
      "Soothing Hydration: Application of sterile cooling gels and peptide recovery creams to accelerate cellular repair."
    ],
    faqs: [
      {
        question: "How many sessions are required to remove acne scars?",
        answer: "Because acne scars involve deep dermal tissue changes, a single session is rarely enough. Most patients see a dramatic 60-80% improvement in skin smoothness after a series of 4-6 sessions, spaced 4 weeks apart."
      },
      {
        question: "What does the skin look like immediately after the treatment?",
        answer: "Your skin will appear sunburned and feel warm for the first 24-48 hours. By day 3, light micro-crusts will form and naturally flake off by day 5, revealing smoother, healthier skin underneath."
      },
      {
        question: "Is the treatment painful?",
        answer: "With our advanced topical numbing cream applied beforehand, the procedure is very tolerable. Most patients describe the feeling as a warm, prickly sensation rather than pain."
      }
    ],
    suitability: "Anyone struggling with persistent pitted acne scars, enlarged pores, or rough, uneven skin texture from past breakouts.",
    credentials: ["Fractional Dermal Resurfacing Tech", "Dermatologist-Led Clinical Scar Revision", "Post-Treatment Soothing Support"]
  },
  {
    slug: "anti-aging-treatments",
    name: "Anti-Aging Treatments",
    category: "skin-hair",
    tag: "Skin & Hair",
    shortDescription: "Premium Botox, hyaluronic fillers, and thread lifts designed to restore volume, lift sagging skin, and erase fine lines.",
    longDescription: "Awish Clinic offers a sophisticated, doctor-led suite of non-surgical anti-aging treatments designed to restore a youthful, refreshed appearance without the downtime of surgery. Utilizing premium dermal fillers (hyaluronic acid), Botox (botulinum toxin), and PDO thread lifts, our dermatologists focus on restoring lost volume to the cheeks, smoothing out dynamic forehead and eye wrinkles (crow's feet), and lifting sagging jawlines with absolute precision, ensuring you look naturally radiant and never 'overdone'.",
    benefits: [
      "Erases dynamic forehead lines, frown furrows, and crow's feet",
      "Restores natural cheek volume and plumps thinning lips with premium fillers",
      "Gently lifts sagging jowls and sharpens jawlines using specialized PDO threads",
      "Immediate youthful results with zero downtime and highly natural movement"
    ],
    stats: {
      successRate: "98%",
      recoveryTime: "Immediate (Zero Downtime)",
      procedureDuration: "30 - 60 Minutes",
      anesthesiaType: "Topical Numbing or Local Blocks"
    },
    process: [
      "Volume Mapping: An expert assessment of your facial symmetry, volume loss, and wrinkle depth.",
      "Targeted Markings: Precise mapping of injection points to ensure natural muscle movement and symmetry.",
      "Treatment Delivery: Skillful administration of Botox, hyaluronic fillers, or PDO threads under localized numbing.",
      "Sculpting & Cold Pack: Gentle sculpting of filler material followed by cold-pack application to prevent bruising."
    ],
    faqs: [
      {
        question: "How long do the results of Botox and Fillers last?",
        answer: "Botox results typically last between 3-6 months as the muscles gradually regain movement. Hyaluronic acid fillers are longer lasting, maintaining youthful volume for 9-18 months depending on the specific area treated."
      },
      {
        question: "Will I look frozen or lose my natural expressions?",
        answer: "Not at all. We believe in the 'less is more' philosophy. Our experienced dermatologists target only the specific muscles responsible for deep wrinkles, preserving your natural expressions and smile dynamics."
      },
      {
        question: "Is there any bruising or swelling after the injections?",
        answer: "Minor swelling and pinpoint redness are normal and typically resolve within 24-48 hours. Occasional mild bruising can occur at the injection site but can be easily concealed with light makeup the next day."
      }
    ],
    suitability: "Individuals looking to reduce dynamic wrinkles, restore lost facial volume, or address early signs of sagging skin without surgery.",
    credentials: ["Certified Dermal Injector Specialists", "Premium US-FDA Approved Products Only", "Natural expression-preserving designs"]
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "skin-hair",
    tag: "Skin & Hair",
    shortDescription: "Permanent hair reduction using US-FDA approved, triple-wavelength cooling laser systems. Safe for all skin tones.",
    longDescription: "Ditch the painful waxing, shaving cuts, and ingrown hair. Awish Clinic offers premium, permanent body hair reduction using state-of-the-art triple-wavelength diode laser systems. Equipped with advanced sapphire cooling tips, our technology delivers rapid, painless light pulses that selectively destroy hair follicles at the root without harming the surrounding skin. Safe, effective, and suitable for all skin tones, we customize our settings to deliver smooth, hair-free skin in the fewest sessions possible.",
    benefits: [
      "Permanent hair reduction with a significant slowdown in hair growth",
      "Advanced sapphire cooling technology ensures a completely painless experience",
      "Safe and highly effective for all skin tones and hair textures",
      "Eliminates painful ingrown hairs, razor bumps, and skin irritation"
    ],
    stats: {
      successRate: "97%",
      recoveryTime: "Immediate (Zero Downtime)",
      procedureDuration: "15 - 90 Minutes",
      anesthesiaType: "None (Painless Cooling Tech)"
    },
    process: [
      "Skin & Hair Analysis: Determination of your hair density, pigment levels, and skin type to set the optimal laser wavelength.",
      "Area Prep & Gel: The treatment area is shaved clean, and a cool, conductive gel is applied to protect the skin.",
      "Laser Scanning: The laser handpiece is glided smoothly over the skin, delivering targeted energy pulses.",
      "Calming Lotion: The gel is cleared, and a soothing moisturizer and sunblock are applied to the treated area."
    ],
    faqs: [
      {
        question: "How many sessions will I need for permanent hair reduction?",
        answer: "Because hair grows in different cycles (anagen, catagen, telogen), lasers can only target hair in the active growth phase. To achieve up to 90% permanent hair reduction, we recommend a series of 6-8 sessions spaced 4-6 weeks apart."
      },
      {
        question: "Is laser hair removal permanent?",
        answer: "Yes, the hair follicles destroyed by the laser will not grow back. Some dormant follicles may activate over time due to hormonal changes, which can be easily managed with a simple annual touch-up session."
      },
      {
        question: "Does it hurt?",
        answer: "Our advanced laser features a built-in cooling system that keeps the skin chilled to 4°C during the entire treatment. Most patients feel only a mild, warm tapping sensation, making it far more comfortable than waxing or epilating."
      }
    ],
    suitability: "Men and women looking for a permanent, painless, and highly convenient solution to body hair removal and ingrown hairs.",
    credentials: ["US-FDA Approved Triple-Wavelength Diode", "Sapphire Chill-Tip Painless Tech", "Soprano-Grade High Efficiency"]
  },
  {
    slug: "medi-facials",
    name: "Medical Medi-Facials",
    category: "skin-hair",
    tag: "Skin & Hair",
    shortDescription: "Advanced clinical facial therapies using pharmaceutical-grade active ingredients to deeply hydrate and restore skin health.",
    longDescription: "Medi-facials at Awish Clinic are professional, dermatologist-formulated skin treatments designed to support long-term skin health. Unlike standard beauty parlor facials that only work on the skin's surface, our medical facials utilize advanced clinical devices (such as high-pressure hydradermabrasion, ultrasonic infusion, and LED light therapy) to deliver active ingredients—like peptides, hyaluronic acid, and botanical growth factors—deep into the dermis, addressing acne, dehydration, and dullness.",
    benefits: [
      "Deep clinical pore extraction removing blackheads and congestion",
      "Intensified dermal hydration using high-pressure hyaluronic infusion",
      "Accelerates cellular repair and collagen production for a plump finish",
      "Fully customized by dermatologists based on your skin type and concerns"
    ],
    stats: {
      successRate: "98%",
      recoveryTime: "Immediate (Zero Downtime)",
      procedureDuration: "45 - 60 Minutes",
      anesthesiaType: "None (Highly Relaxing)"
    },
    process: [
      "Double Cleanse: Thorough disinfection of the skin to remove surface dirt, oils, and makeup.",
      "Hydra-Exfoliation: Gentle water-based peeling to dissolve dead skin cells and clear clogged pores.",
      "Ultrasonic Infusion: Targeted delivery of active serums (Vitamin C, Peptides) deep into the skin layers.",
      "LED Photo-Therapy: Application of red or blue LED light to calm redness and eliminate acne-causing bacteria."
    ],
    faqs: [
      {
        question: "How is a medi-facial different from a salon facial?",
        answer: "Salon facials often rely on heavily fragranced, generic creams and manual scrubbing, which can irritate the skin. Medi-facials use sterile, clinically proven active serums and advanced medical devices, ensuring a safe, hygienic, and highly effective treatment."
      },
      {
        question: "Will I break out after a medi-facial?",
        answer: "No. Our treatments include sterile medical extractions and antibacterial LED light therapy, which actively soothe existing breakouts and prevent future acne flare-ups."
      },
      {
        question: "How often should I get a medi-facial?",
        answer: "For optimal skin health, hydration, and a constant radiant glow, we recommend scheduling a medi-facial once every 4 weeks, aligned with your skin's natural 28-day renewal cycle."
      }
    ],
    suitability: "Anyone seeking deep hydration, thorough pore clearing, and an immediate radiant boost for dynamic skin health.",
    credentials: ["Dermatologist-Formulated Serums", "Advanced Hydradermabrasion Tech", "100% Sterile Medical Protocols"]
  },
  {
    slug: "iv-drips-skin-whitening",
    name: "IV Drip Therapy & Brightening",
    category: "skin-hair",
    tag: "Skin & Hair",
    shortDescription: "Glutathione, vitamin C, and multi-vitamin cellular drips to boost systemic radiance, vitality, and skin hydration from within.",
    longDescription: "IV Drip Therapy at Awish Clinic delivers powerful antioxidants, essential vitamins, and hydrating minerals directly into your bloodstream. By bypassing the digestive system entirely, we ensure 100% absorption and immediate cellular delivery. Our most popular formulation combines high-dose Glutathione—known as the body's master antioxidant—with Vitamin C. This powerful blend neutralizes free radicals, flushes toxins, and naturally brightens skin tone globally, leaving you feeling deeply energized.",
    benefits: [
      "Delivers 100% absorption of vital nutrients directly to cells",
      "Glutathione actively brightens skin globally and reduces melanin",
      "Boosts energy, strengthens the immune system, and flushes heavy toxins",
      "Supervised in a highly safe, sterile, and comfortable medical lounge"
    ],
    stats: {
      successRate: "95%",
      recoveryTime: "Immediate (Zero Downtime)",
      procedureDuration: "30 - 45 Minutes",
      anesthesiaType: "None (Simple Pinprick)"
    },
    process: [
      "Medical Check: We record your blood pressure, review your health history, and verify your wellness goals.",
      "Custom Formulation: Our medical team mixes your custom drip (Glutathione, Vitamin C, Hydration, or Energy).",
      "Comfortable IV Setup: You relax in a reclining chair in our private lounge while a sterile IV is gently placed.",
      "Infusion & Rest: The formulation drips slowly over 30-45 minutes while you read, watch a show, or rest."
    ],
    faqs: [
      {
        question: "Are IV drips safe?",
        answer: "Yes, extremely safe. All our IV infusions are formulated using medical-grade, sterile ingredients and administered by registered nurses under direct medical supervision in a sterile environment."
      },
      {
        question: "How long does it take to see skin brightening results?",
        answer: "Because IV drips work from the inside out, results appear gradually. Most patients notice improved energy and skin hydration within 48 hours. Significant, global skin brightening is typically visible after a series of 6-8 weekly sessions."
      },
      {
        question: "Does it hurt?",
        answer: "You will feel only a quick, minor pinprick sensation when the sterile micro-cannula is placed. Once the drip begins, the treatment is completely painless, relaxing, and comfortable."
      }
    ],
    suitability: "Individuals seeking global skin brightening, relief from chronic fatigue, body detoxification, or a rapid immune system boost.",
    credentials: ["Registered Nursing Staff Supervised", "Purest Clinical-Grade Glutathione", "Relaxing Private Lounge Suites"]
  },
  {
    slug: "overweight-treatment",
    name: "Overweight Clinical Diagnosis",
    category: "weight",
    tag: "Weight Management",
    shortDescription: "Endocrinologist-led medical assessment of hormonal, metabolic, and thyroid markers to target the root causes of weight gain.",
    longDescription: "At Awish Clinic, we know that successful weight loss is about much more than just calories. Our clinical overweight diagnosis program is an endocrinologist-led medical evaluation designed to uncover the physiological root causes of stubborn weight gain. We perform detailed blood panels to assess key metabolic markers, thyroid function, insulin resistance, cortisol levels, and hormonal imbalances (such as PCOS). This scientific assessment allows us to create highly personalized, effective medical weight management programs.",
    benefits: [
      "Identifies underlying metabolic blocks, insulin resistance, and thyroid imbalances",
      "Endocrinologist-led evaluation looking beyond simple diet and exercise",
      "Detailed body composition analysis tracking visceral fat and muscle mass",
      "Creates a clear, customized medical roadmap for sustainable weight loss"
    ],
    stats: {
      successRate: "94%",
      recoveryTime: "Immediate (Diagnostic)",
      procedureDuration: "60 Minutes (Consultation)",
      anesthesiaType: "None"
    },
    process: [
      "Body Metrics: Detailed analysis of your BMI, visceral fat levels, and muscle-to-fat ratio.",
      "Medical Consultation: A comprehensive review of your weight history, dietary habits, and physical symptoms.",
      "Diagnostic Lab Panels: Blood draws to test thyroid panels, fasting insulin, HbA1c, and key hormone levels.",
      "Personalized Blueprint: A detailed medical review of your lab results to establish your custom weight loss plan."
    ],
    faqs: [
      {
        question: "Why should I choose a medical diagnosis over a standard gym diet?",
        answer: "Many people struggle to lose weight because of underlying medical imbalances like PCOS, insulin resistance, or thyroid sluggishness. A clinical diagnosis pinpoints these exact issues, allowing us to treat the cause rather than just the symptoms."
      },
      {
        question: "What blood tests are included in the panel?",
        answer: "Our comprehensive panel includes Thyroid Stimulating Hormone (TSH), Free T3/T4, Fasting Insulin, HbA1c (blood sugar levels), Lipid Profile, Cortisol (stress hormone), and key reproductive hormones."
      },
      {
        question: "Is this program only for people with severe obesity?",
        answer: "Not at all. This diagnostic evaluation is beneficial for anyone struggling to lose stubborn weight, whether you want to lose 5kg or 50kg. Understanding your unique metabolic profile is the key to sustainable success."
      }
    ],
    suitability: "Anyone struggling with stubborn weight gain, sluggish metabolism, suspected hormonal imbalances, or suspected thyroid concerns.",
    credentials: ["Endocrinologist-Led Evaluations", "Highly Precise Laboratory Panels", "Visceral Fat Diagnostic Systems"]
  },
  {
    slug: "non-surgical-weight-reduction",
    name: "Non-Surgical Weight Reduction",
    category: "weight",
    tag: "Weight Management",
    shortDescription: "Personalized medical weight loss combining diet design, fat-freezing cryolipolysis, and metabolic coaching.",
    longDescription: "For individuals seeking to target stubborn fat pockets and lose weight without undergoing surgery, Awish Clinic offers an advanced, non-surgical weight reduction program. We combine customized, medically-supervised dietary plans with state-of-the-art body contouring technologies. Our program utilizes FDA-approved Cryolipolysis (fat freezing at -11°C to safely destroy fat cells) and High-Intensity EMS (Electromagnetic Stimulation) to build muscle tone and boost your resting metabolic rate.",
    benefits: [
      "Targets stubborn fat pockets in the belly, love handles, and thighs",
      "Completely non-invasive with zero needles, surgical incisions, or downtime",
      "Combines fat-freezing cryolipolysis with EMS muscle-building technology",
      "Includes continuous medical monitoring and customized metabolic coaching"
    ],
    stats: {
      successRate: "95%",
      recoveryTime: "Immediate (Zero Downtime)",
      procedureDuration: "45 - 60 Minutes per Session",
      anesthesiaType: "None (Comfortable Cool Treatment)"
    },
    process: [
      "Target Mapping: We measure the fat layer thickness in your target areas and set your shaping goals.",
      "Cryolipolysis Setup: A protective gel pad is placed on the skin, and the cooling applicator is gently applied.",
      "Fat Freezing: The system cools the fat cells to -11°C for 45 minutes, triggering natural fat cell elimination.",
      "EMS Toning: High-intensity electromagnetic pulses are applied to stimulate muscles and accelerate fat clearing."
    ],
    faqs: [
      {
        question: "How does fat freezing actually work?",
        answer: "Fat cells are naturally more sensitive to cold than skin and muscle cells. Cryolipolysis cools them to a temperature that triggers their natural elimination (apoptosis) without harming surrounding tissues. The body then naturally flushes these cells over the next 8-12 weeks."
      },
      {
        question: "Does the treatment require downtime?",
        answer: "No, there is absolutely no downtime. You may experience mild numbness, redness, or a slight tingling sensation in the treated area, but you can return to work, exercise, and normal activities immediately."
      },
      {
        question: "How much fat reduction can I expect from one session?",
        answer: "A single Cryolipolysis session typically reduces the fat layer thickness in the treated area by 20-25%. Results start to appear in 3 weeks, with the most dramatic improvements visible at the 2-month mark."
      }
    ],
    suitability: "Individuals within a healthy weight range who have stubborn, exercise-resistant fat pockets on the abdomen, flanks, or thighs.",
    credentials: ["US-FDA Approved -11°C Cryolipolysis", "High-Intensity Muscle EMS Stimulation", "Certified Body Sculpting Clinicians"]
  },
  {
    slug: "surgical-weight-reduction",
    name: "Surgical Weight Reduction (Bariatric)",
    category: "weight",
    tag: "Weight Management",
    shortDescription: "Expert gastric sleeve and gastric bypass surgeries for patients with clinically significant obesity and metabolic syndromes.",
    longDescription: "For individuals struggling with severe obesity and weight-related health conditions (such as Type 2 diabetes, severe sleep apnea, or cardiovascular concerns), bariatric surgery offers a highly effective, clinically proven path to long-term health. At Awish Clinic, we provide comprehensive, laparoscopic bariatric surgery, including Gastric Sleeve (Sleeve Gastrectomy) and Gastric Bypass. Performed by our highly experienced bariatric surgical team, these advanced procedures are supported by a complete network of endocrinologists, cardiologists, and expert nutritional guides to ensure your safety and success.",
    benefits: [
      "Achieve significant, sustainable weight loss of up to 60-80% of excess body weight",
      "Promotes rapid remission or improved management of Type 2 diabetes and hypertension",
      "Advanced laparoscopic techniques ensure minimal discomfort and rapid recovery",
      "Supported by a dedicated, lifetime team of medical and nutritional experts"
    ],
    stats: {
      successRate: "97.5%",
      recoveryTime: "1 - 2 Weeks",
      procedureDuration: "1.5 - 3 Hours",
      anesthesiaType: "General Anesthesia"
    },
    process: [
      "Pre-Op Screening: A detailed evaluation including blood panels, cardiac clearance, and dietary preparation.",
      "Laparoscopic Access: Micro-incisions are made, and a high-definition camera is inserted to guide the surgeon.",
      "Stomach Reshaping: The stomach is carefully resized (creating a sleeve or bypass) using advanced surgical staplers.",
      "Post-Op Recovery: You are closely monitored in our recovery suite, followed by a structured multi-phase liquid diet."
    ],
    faqs: [
      {
        question: "What is the difference between Gastric Sleeve and Gastric Bypass?",
        answer: "A Gastric Sleeve removes approximately 80% of the stomach, leaving a narrow tube or 'sleeve'. A Gastric Bypass creates a small stomach pouch and connects it directly to the middle of the small intestine. Our surgical team will recommend the ideal option based on your BMI, medical history, and health goals."
      },
      {
        question: "How long is the recovery period?",
        answer: "Thanks to our minimally invasive laparoscopic techniques, most patients stay in the hospital for only 1-2 days and return to light, daily activities within 7-10 days. Full internal healing takes about 4-6 weeks."
      },
      {
        question: "Will I have to take vitamins for the rest of my life?",
        answer: "Yes. Because these surgical procedures reduce the size of your stomach and alter digestion, daily multi-vitamin and mineral supplements are essential to ensure your body receives optimal nutrition."
      }
    ],
    suitability: "Individuals with a BMI over 35, or a BMI over 30 with weight-related medical conditions (such as diabetes, severe sleep apnea, or high blood pressure).",
    credentials: ["Senior Laparoscopic Bariatric Surgeon Leads", "State-of-the-Art Hospital Care Partner", "Comprehensive Lifetime Nutritional Follow-ups"]
  }
];
