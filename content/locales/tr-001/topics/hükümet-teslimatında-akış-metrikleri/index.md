# Hükümet Teslimatında Akış Metrikleri

Akış metrikleri — Little Yasası, süren iş (WIP) sınırları ve akış verimliliği — işin sınırlı kapasiteli bir sistemde ne kadar hızlı ilerlediğini tarif eder. Bir sprint panosu böyle bir sistemdir; bir yardım başvuruları kuyruğu, bir planlama başvuru sicili veya bir vize vaka birikimi, farklı bir üniforma giymiş tam olarak aynı matematiktir.

## Neden önemli

Hükümet vaka yükleri kuyruk sistemleridir ve kuyruk sistemleri, kimse onları ölçse de ölçmese de kuyruk yasalarına uyar. Yasal karar süreleri bunu açık kılar: Town and Country Planning rejimi altında, çoğu küçük planlama başvurusu 8 haftalık yasal karar hedefi taşır ve büyük başvurular 13 hafta — doğrudan yasaya gömülü bir çevrim süresi taahhüdü. Ulusal Denetim Ofisi ve İçişleri Seçilmiş Komitesi tarafından defalarca incelenen İçişleri Bakanlığı sığınma vaka birikimi, süren işin sürdürülen bir dönem boyunca iş hacminden daha hızlı büyüdüğü, çevrim sürelerini herhangi bir yasal veya hizmet beklentisinin çok ötesine taşıdığı iyi belgelenmiş bir kamu sistemi örneğidir. Akış metrikleri, mühendislere ve vaka yönetim yöneticilerine bu başarısızlık biçimi için, onu nitel bir "birikim sorunu" olarak bırakmak yerine, ortak, nicel bir sözlük sağlar.

## Matematik

```
Little Yasası:  WIP = İş hacmi × Çevrim süresi
            →   Çevrim süresi = WIP / İş hacmi

Akış verimliliği = aktif (dokunma) süresi / toplam çevrim süresi   (Vacanti)

WIP sınırı etkisi: sabit iş hacmi için WIP'yi yarıya indirmek ortalama
çevrim süresini kabaca yarıya indirir (Little Yasası yeniden düzenlenmiş) —
personel eklemeden mevcut olan kaldıraç.
```

Vaka çalışması yerine yazılım dağıtım boru hatlarına uygulanan eşdeğer matematik için bkz. [kamu değeri için DORA metrikleri](../kamu-değeri-için-dora-metrikleri/).

## Çalışılmış örnek

**Yerel yönetim planlama dairesi**: herhangi bir zamanda 400 başvuru açık (WIP), ekip haftada 50 başvuruyu çözüyor (iş hacmi).

```
Çevrim süresi = WIP / İş hacmi = 400 / 50 = 8 hafta
```

Bu, küçük başvurular için yasal 8 haftalık hedefte tam olarak sonuçlanır — boşluk olmadan, yani gelen talepteki veya danışılan kuruluşun yanıt süresindeki herhangi bir değişkenlik kararları yasal son tarihin ötesine iter.

**Akış verimliliği**: bu 8 haftanın (56 takvim günü) içinde, bir başvuru tipik olarak yaklaşık 6 saat gerçek vaka çalışanı işleme süresine sahiptir.

```
Akış verimliliği = 6 saat / (56 gün × günde 8 çalışma saati)
                 = 6 / 448 ≈ %1,3
```

Vacanti'nin yazılım ekipleri için kıyaslaması tipik akış verimliliğini %15–20 olarak belirler; birden fazla yasal danışılan kuruluş devri ve kamuoyu istişare pencereleri olan hükümet vaka çalışması çoğu zaman bir büyüklük sırası daha düşük çalışır. Sekiz haftanın gerçekte gittiği yer vaka çalışanı kapasitesi değil, "bekleme" süresinin %98,7'sidir.

**WIP sınırı müdahalesi**: vaka çalışanı başına açık başvuruları sınırsız 25 yerine 15 ile sınırlamak (iş hacmini sabit tutarak), 16 kişilik bir ekip genelinde WIP'yi 400'den kabaca 240'a kaydırır:

```
Yeni çevrim süresi = 240 / 50 = 4,8 hafta
```

Bir personel artışından değil, bir politika değişikliğinden çevrim süresinde neredeyse yarı yarıya düşüş — DORA tarzı teslimat ekiplerinin sprint WIP'sini sınırladıklarında çektikleri aynı kaldıraç.

## Yazılım mühendisliği bağlantısı

Akış metrikleri, bir teslimat ekibinin Kanban panosu ile yazılım geliştirdiği vaka çalışma zemini arasındaki ortak dildir: bir vaka çalışanının kuyruğu ve bir pull request kuyruğu ikisi de Little Yasası tarafından yönetilir ve ikisi de çevrim süresi hedeflerini aynı şekilde aşar — iş hacmine göre çok fazla WIP. Bu, doğrudan [kamu programlarında gecikme maliyeti](../kamu-programlarında-gecikme-maliyeti/) için önemlidir: çevrim süresi × CoD, herhangi bir anda kuyrukta bekleyen sterlindir ve [hizmet standartları ve işlem metrikleri](../hizmet-standartları-ve-işlem-metrikleri/) için önemlidir; burada yayımlanmış bir dönüş hedefi, kaçırıldığında yalnızca akış metriklerinin teşhis edebileceği bir çevrim süresi taahhüdüdür. Bir vaka yönetim sisteminin yazılımı, WIP'yi ve çevrim süresini kimsenin sorgulamadığı bir vaka yönetim sisteminin içine gömmek yerine birinci sınıf operasyonel metrikler olarak sunmalıdır.

## Tuzaklar

- **Gerçek darboğazı düzeltmeden WIP sınırları eklemek**: kısıt harici bir yasal danışılan kuruluşun yanıt süresiyse, vaka çalışanı WIP'sini sınırlamak kuyruğu kısaltmak yerine yalnızca yukarı akışa taşır.
- **Akış verimliliğini manipüle edilecek bir hedef olarak ele almak**: aktif sürenin %1,3'ünü hızlandırmak çevrim süresini neredeyse hiç hareket ettirmez; kaldıraç neredeyse her zaman bekleme durumlarındadır, bu da genellikle vaka çalışanı hızı değil süreç yeniden tasarımı anlamına gelir.
- **Değişkenliği göz ardı etmek**: Little Yasası ortalamaları tarif eder; yüksek talep varyansı olan bir vaka yükü yalnızca daha sıkı bir WIP sınırına değil tampon kapasiteye de ihtiyaç duyar, yoksa ortalama iyileşirken bile dalgalı kuyrukta yasal son tarihler yine kaçırılır.
- **WIP'yi tutarsız ölçmek**: kayıt sisteminde "açık" ama gerçekte üçüncü bir tarafı bekleyerek duran bir vaka hâlâ WIP'dir; onu hariç tutmak, vatandaşa dönük gerçekliği değiştirmeden sayıları olduğundan iyi gösterir.

## Kaynaklar

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
