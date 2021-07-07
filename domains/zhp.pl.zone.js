D('zhp.pl', noneRegistrar, DnsProvider(azureProvider), DefaultTTL(3600),
    A('@', '51.75.54.175'),
    Ms365_Root('zhp.pl')
);

require_glob('zhp.pl.d/');

// TODO lines below require clean-up
D_EXTEND('zhp.pl',
    TXT('_acme-challenge.haliz', 'jd-YDJYrtRp7nynl5NEJyNrHqwrtfpm7j1H-rOJ5LfQ'),
    TXT('_github-challenge-bialostockazhp.bialostocka', '871ae7c463'),
    TXT('_github-challenge-itwzhp.gk', 'e9917cb777'),
    TXT('_github-challenge-itwzhp', 'da1510325a'),

    CNAME('*.a.panel', 'a.panel.zhp.pl.'),
    CNAME('*.augustow', 'augustow.zhp.pl.'),
    CNAME('*.bialostocka', 'bialostocka.zhp.pl.'),
    CNAME('*.bielskpodlaski', 'bielskpodlaski.zhp.pl.'),
    CNAME('*.by.bialostocka', 'by.bialostocka.zhp.pl.'),
    CNAME('*.grajewo', 'grajewo.zhp.pl.'),
    CNAME('*.hks.tuchola', 'hks.tuchola.zhp.pl.'),
    CNAME('*.jaroslaw', 'jaroslaw.zhp.pl.'),
    CNAME('*.kch', 'kch.zhp.pl.'),
    CNAME('*.komenda.legnica', 'komenda.legnica.zhp.pl.'),
    CNAME('*.opatow', 'opatow.zhp.pl.'),
    CNAME('*.pilot.bialostocka', 'pilot.bialostocka.zhp.pl.'),
    CNAME('*.poczta.bialostocka', 'poczta.bialostocka.zhp.pl.'),
    CNAME('*.ratownicy.lodzka', 'ratownicy.lodzka.zhp.pl.'),
    CNAME('*.siemiatycze', 'siemiatycze.zhp.pl.'),
    CNAME('*.skrzaty.wadowice', 'skrzaty.wadowice.zhp.pl.'),
    CNAME('*.skwierzyna', 'skwierzyna.zhp.pl.'),
    CNAME('*.sokolka', 'sokolka.zhp.pl.'),
    CNAME('*.suwalki', 'suwalki.zhp.pl.'),
    CNAME('*.swieto2011.lodzka', 'swieto2011.lodzka.zhp.pl.'),
    CNAME('*.tornister.fsj', 'tornister.fsj.zhp.pl.'),
    CNAME('*.tuchola', 'tuchola.zhp.pl.'),
    CNAME('*.wypoczynek.lodzka', 'wypoczynek.lodzka.zhp.pl.'),
    Delegation_NS('100latgrojec', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    Delegation_NS('2szczep.pabianice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('646napfp2tt7', 'gv-4pvab7ilnxipxn.dv.googlehosted.com.'),
    A('a.panel', '89.161.251.120'),
    MX('a.panel', 10, 'a.panel.zhp.pl.'),
    TXT('a.panel', 'v=spf1 mx a ip4:89.161.251.120 ~all'),
    Delegation_NS('abcabc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('adm.pabianice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('admin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('andrychow', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    A('archiwum', '51.75.54.175'),
    A('augustow', '79.96.169.242'),
    MX('augustow', 10, 'augustow.zhp.pl.'),
    CNAME('autodiscover.bialostocka', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.dolnoslaska', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.grunwald', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.jpt', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.lodzka', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.muzeumharcerstwa', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.opolska', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.pabianice', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.plock', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.przysucha', 'autodiscover.outlook.com.'),
    Delegation_NS('award', ['ns1.superhost.pl.', 'ns2.superhost.pl.']),
    Delegation_NS('baldy', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),
    Delegation_NS('bazapajak', ['dns3.trustnet.pl.', 'dns.trustnet.pl.', 'dns2.trustnet.pl.']),
    A('bazy', '51.75.54.175'),
    Delegation_NS('berdo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    MX('bialostocka', 10, 'bialostocka-zhp-pl.mail.protection.outlook.com.'),
    A('bialostocka', '79.96.169.242'),
    TXT('bialostocka', 'v=spf1 include:spf.protection.outlook.com -all'),
    Delegation_NS('bialystok', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
    A('bielskpodlaski', '79.96.169.242'),
    MX('bielskpodlaski', 10, 'bielskpodlaski.zhp.pl.'),
    Delegation_NS('bierutow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    A('bip', '51.75.54.175'),
    Delegation_NS('bochnia', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('boleslawiec', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),
    Delegation_NS('brodnica', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('brzeg', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    Delegation_NS('brzesko', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    A('brzeziny', '212.191.78.183'),
    Delegation_NS('bumerang', ['ns20.ovh.net.', 'dns20.ovh.net.']),
    A('by.bialostocka', '79.96.169.242'),
    MX('by.bialostocka', 10, 'by.bialostocka.zhp.pl.'),
    Delegation_NS('bydgoszcz', ['ns1.ibc.pl.', 'ns2.ibc.pl.']),
    Delegation_NS('bystrzycaklodzka', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    A('cbp', '51.75.54.175'),
    Delegation_NS('chelmza', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    Delegation_NS('chodziez', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('chojnice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('chojnow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('cichociemni.grojec', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('ciechanow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('cogito', ['ns1.superhost.pl.', 'ns2.superhost.pl.']),
    A('covid-zaswiadczenia', '51.75.54.175'),
    Delegation_NS('czarna', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    Delegation_NS('czarna2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('czarnyszlak', ['ns1.hostinghouse.pl.', 'ns2.hostinghouse.pl.']),
    A('czat', '51.75.54.175'),
    Delegation_NS('czerwonak', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    A('czuwaj', '51.75.54.175'),
    Delegation_NS('czuwaj2', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('dabrowa', ['ns1.whshost.com.', 'ns2.whshost.com.']),
    Delegation_NS('debica', ['dns1.mydevil.net.', 'dns2.mydevil.net.']),
    A('dev-rejestracja', '213.189.38.130'),
    A('devel', '194.29.174.10'),
    Delegation_NS('dhkielce', ['ns7.webd.pl.', 'ns5.webd.pl.']),
    A('dk', '51.75.54.175'),
    Delegation_NS('dlugoleka', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    CNAME('dokumenty.ostroda', 'ghs.google.com.'),
    A('dokumenty', '51.75.54.175'),
    Delegation_NS('dolinapilicy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('dolnoslaska', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    TXT('dolnoslaska', 'v=spf1 include:spf.protection.outlook.com -all'),
    MX('dolnoslaska', 0, 'dolnoslaska-zhp-pl.mail.protection.outlook.com.'),
    Delegation_NS('dolnoslaska2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('dolnoslaska3', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('drezdenko', ['ns1.easyisp.pl.', 'ns2.easyisp.pl.']),
    Delegation_NS('dzierzoniow', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('e-aos', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('e-mazowiecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('e', '51.75.54.175'),
    A('ed', '104.214.218.237'),
    A('edek', '104.214.218.237'),
    A('edeklaracja', '51.105.209.75'),
    A('edev', '213.189.38.133'),
    A('edev2', '213.189.38.133'),
    A('edruzyna', '213.189.38.133'),
    A('ehufiec', '213.189.38.133'),
    A('ej2020', '51.75.54.175'),
    A('ekodruzyna', '51.75.54.175'),
    CNAME('enterpriseenrollment.bialostocka', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.dolnoslaska', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.jpt', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.lodzka', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.muzeumharcerstwa', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.opolska', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.plock', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.przysucha', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseregistration.bialostocka', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.dolnoslaska', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.jpt', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.lodzka', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.muzeumharcerstwa', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.opolska', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.plock', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.przysucha', 'enterpriseregistration.windows.net.'),
    Delegation_NS('exkursion', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
    Delegation_NS('festiwal-kielce', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('festiwalbrodnica', ['ns1.manifo.org.', 'ns2.manifo.org.']),
    Delegation_NS('folusz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('frelichowski', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.', 'fns1.42.pl.']),
    A('fsj', '51.75.54.175'),
    CNAME('ftp', 'zhp.pl.'),
    Delegation_NS('glodowka', ['ns1.netart.pl.', 'ns2.netart.pl.']),
    Delegation_NS('glogow', ['ns1.netart.pl.', 'ns2.netart.pl.']),
    Delegation_NS('glubczyce', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
    A('gniezno', '178.32.205.96'),
    Delegation_NS('golubdobrzyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('google46a5c5b885027ebd.kielcepowiat', 'google.com.'),
    A('gorczanski', '188.128.203.43'),
    Delegation_NS('gorlice', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('gostynin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('grajewo', '79.96.169.242'),
    MX('grajewo', 10, 'grajewo.zhp.pl.'),
    Delegation_NS('grojec', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('grudziadz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    TXT('grunwald', 'v=spf1 include:spf.protection.outlook.com -all'),
    A('grunwald', '51.75.54.175'),
    MX('grunwald', 0, 'grunwald-zhp-pl.mail.protection.outlook.com.'),
    A('haliz', '51.75.54.175'),
    A('harc2o', '51.75.54.175'),
    Delegation_NS('harcbieg', ['ns1.megiteam.pl.', 'ns2.megiteam.pl.']),
    A('hib', '51.75.54.175'),
    A('hks.tuchola', '89.161.238.192'),
    MX('hks.tuchola', 10, 'hks.tuchola.zhp.pl.'),
    Delegation_NS('hops', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),
    A('hp8', '213.189.38.135'),
    Delegation_NS('inowlodz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('inowroclaw', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('instruktor.pabianice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('integrationservice', '104.214.218.237'),
    A('intranet', '51.75.54.175'),
    CNAME('irc', 'chat.eu.scoutlink.net.'),
    CNAME('irc2', 'chat.scoutlink.net.'),
    Delegation_NS('jaktorow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('jamboree2015', '51.75.54.175'),
    A('jamboree2019', '51.75.54.175'),
    MX('jaroslaw', 10, 'jaroslaw.zhp.pl.'),
    A('jaroslaw', '79.96.163.93'),
    Delegation_NS('jawor', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
    Delegation_NS('jedrzejow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('jordanow', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    MX('jpt', 0, 'jpt-zhp-pl.mail.protection.outlook.com.'),
    TXT('jpt', 'v=spf1 include:spf.protection.outlook.com -all'),
    CNAME('kalendarz.ostroda', 'ghs.google.com.'),
    Delegation_NS('kalisz', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('karkonoski', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
    Delegation_NS('katy', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    MX('kch', 10, 'kch.zhp.pl.'),
    A('kch', '89.161.251.115'),
    Delegation_NS('kedzierzynkozle', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    Delegation_NS('kepno', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('kety', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('kielcemiasto', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcepoludnie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcepowiat', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('klodzko', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
    Delegation_NS('kolno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    MX('komenda.legnica', 10, 'komenda.legnica.zhp.pl.'),
    A('komenda.legnica', '89.161.255.27'),
    A('komunikaty.gk', '51.75.54.175'),
    Delegation_NS('konin', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    Delegation_NS('konskie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('konstantynow', '85.232.255.122'),
    Delegation_NS('kopernikanski', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('koronowo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('korzkiew', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('kostrzyn', ['ns7.webd.pl.', 'ns5.webd.pl.']),
    Delegation_NS('kozmin', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('kp', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('krakowkrowodrza', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('krakownowahuta', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('krakowpodgorze', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('krakowska', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('krakowsrodmiescie', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('krapkowice', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    Delegation_NS('krosno', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('krzeszowice', ['dns1.slaskdatacenter.pl.', 'dns2.slaskdatacenter.pl.', 'dns3.slaskdatacenter.pl.']),
    Delegation_NS('ksiegagromad', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('kursharcmistrzowski', ['ns1.superhost.pl.', 'ns2.superhost.pl.']),
    A('kursy', '51.75.54.175'),
    Delegation_NS('kutno', ['dns1.mydevil.net.', 'dns2.mydevil.net.']),
    A('lacznosc', '51.75.54.175'),
    Delegation_NS('lagiewniki', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('lancut', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    Delegation_NS('lask', ['ns1.iq.pl.', 'ns2.iq.pl.']),
    Delegation_NS('lednica', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    A('lesneplemiona', '51.75.54.175'),
    Delegation_NS('leszno', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('lezajsk', ['ns1.statnet.pl.', 'ns2.statnet.pl.']),
    Delegation_NS('limev3', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('limev4', '51.75.54.175'),
    Delegation_NS('lipsko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lodzgorna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lodzka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    TXT('lodzka', 'v=spf1 include:spf.protection.outlook.com -all'),
    MX('lodzka', 0, 'lodzka-zhp-pl.mail.protection.outlook.com.'),
    Delegation_NS('lodzpolesie', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('lodzsrodmiescie', ['ns1.oiq.pl.', 'ns2.oiq.pl.']),
    Delegation_NS('lodzwidzew', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lomza', ['ns1.datasferix.pl.', 'ns2.datasferix.pl.']),
    A('lotnictwo', '51.75.54.175'),
    MX('lowicz', 10, 'lowicz.zhp.pl.'),
    A('lowicz', '85.128.206.44'),
    Delegation_NS('luban', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('lubin', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']),
    CNAME('mail', 'zhp.pl.'),
    Delegation_NS('mailing', ['redir1.freshmail.pl.', 'redir2.freshmail.pl.']),
    Delegation_NS('mak', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('malecz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('mazowiecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('mazowieckazostajewdomu', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('mazowszeplock', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('merkury.ostroda', 'merkury.homelinux.net.'),
    Delegation_NS('miks', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('milicz', ['ns1.keed.pl.', 'ns2.keed.pl.', 'ns3.keed.pl.']),
    Delegation_NS('minsk', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('mlawa', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('msoid.bialostocka', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid.dolnoslaska', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid.jpt', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid.lodzka', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid.plock', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid.przysucha', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid', 'clientconfig.microsoftonline-p.net.'),
    Delegation_NS('mszczonow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    MX('muzeumharcerstwa', 0, 'muzeumharcerstwa-zhp-pl.mail.protection.outlook.com.'),
    TXT('muzeumharcerstwa', 'v=spf1 include:spf.protection.outlook.com -all'),
    A('muzeumharcerstwa', '185.36.169.152'),
    Delegation_NS('myslenice', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    CNAME('mysql', 'sql.zhp.pl.'),
    A('n', '51.75.54.175'),
    A('natropie', '51.75.54.175'),
    Delegation_NS('nazajecia', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('nforum', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('niemodlin', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    Delegation_NS('nml', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('nowe', '51.75.54.175'),
    A('nowemiasto', '185.23.21.18'),
    Delegation_NS('nowysacz', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    A('ns1.worker', '46.101.240.55'),
    A('ns2.worker', '46.101.240.55'),
    Delegation_NS('nysa', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    Delegation_NS('oboz.krzeszowice', ['ns1.hostdns.pl.', 'ns2.hostdns.pl.']),
    Delegation_NS('ocypel', ['ns1.netmark.pl.', 'ns2.netmark.pl.']),
    A('odkrywcy', '51.75.54.175'),
    Delegation_NS('olawa', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
    Delegation_NS('olesnica', ['ns1.datanet.pl.', 'ns2.datanet.pl.']),
    Delegation_NS('olkusz', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('opal', ['ns1.webserwer.pl.', 'ns2.webserwer.pl.']),
    MX('opatow', 10, 'opatow.zhp.pl.'),
    A('opatow', '62.129.228.173'),
    Delegation_NS('opoczno', ['dns12.linuxpl.com.', 'ns12.linuxpl.com.']),
    Delegation_NS('opole', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    CNAME('opolemiasto', 'opole.zhp.pl.'),
    MX('opolska', 0, 'opolska-zhp-pl.mail.protection.outlook.com.'),
    TXT('opolska', 'v=spf1 include:spf.protection.outlook.com -all'),
    Delegation_NS('opolska', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    Delegation_NS('ostroleka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('ostrowiec', ['dns1.onecik.pl.', 'dns2.onecik.pl.']),
    Delegation_NS('ostrowwielkopolski', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('ostrzeszow', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('oswiecim', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    TXT('ovhcontrol', 'aoRqdwWKKnTDamiIqv6uqQ'),
    A('pabianice', '79.133.210.186'),
    TXT('pabianice', 'v=spf1 include:spf.protection.outlook.com -all'),
    MX('pabianice', 0, 'pabianice-zhp-pl.mail.protection.outlook.com.'),
    Delegation_NS('paluki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('panel', '51.75.54.175'),
    A('patronus', '109.95.157.35'),
    Delegation_NS('perkoz', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
    Delegation_NS('pielgrzymka', ['dns.smarthost.pl.', 'dns2.smarthost.pl.', 'dns3.smarthost.pl.']),
    Delegation_NS('pila', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    A('pilot.bialostocka', '79.96.169.242'),
    MX('pilot.bialostocka', 10, 'pilot.bialostocka.zhp.pl.'),
    Delegation_NS('piotrkow', ['ns10.az.pl.', 'ns11.az.pl.', 'ns12.az.pl.']),
    Delegation_NS('plock', ['dns113.ovh.net.', 'ns113.ovh.net.']),
    Delegation_NS('plonsk', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('pobierowo', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    Delegation_NS('pobierowo2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    MX('poczta.bialostocka', 10, 'poczta.bialostocka.zhp.pl.'),
    A('poczta.bialostocka', '79.96.169.242'),
    CNAME('poczta.ostroda', 'ghs.google.com.'),
    A('poczta.worker', '46.101.240.55'),
    A('poczta', '51.75.54.175'),
    A('podcast.radio', '89.161.251.119'),
    Delegation_NS('podhalanski', ['dns12.linuxpl.com.', 'ns12.linuxpl.com.']),
    Delegation_NS('podkarpacka', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
    Delegation_NS('podkrakowski', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('polko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('polubicfinanse', '89.161.251.120'),
    Delegation_NS('powiatwloclawek', ['ns3.biznes-host.pl.', 'ns4.biznes-host.pl.']),
    A('powodydodumy', '51.75.54.175'),
    A('poznangrunwald', '94.23.27.27'),
    Delegation_NS('poznanjezyce', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('poznannowemiasto', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('poznanrejon', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('poznansrodmiescie', ['ns1.cal.pl.', 'ns2.cal.pl.']),
    Delegation_NS('poznanstaremiasto', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('poznanwilda', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']),
    TXT('praszka', 'YCt6GUiBSQdODPJJJ9SnkA'),
    Delegation_NS('praszka', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
    A('programator', '51.75.54.175'),
    Delegation_NS('przasnysz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('przeslanie', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    TXT('przysucha', 'v=spf1 include:spf.protection.outlook.com -all'),
    Delegation_NS('przysucha', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    MX('przysucha', 0, 'przysucha-zhp-pl.mail.protection.outlook.com.'),
    Delegation_NS('ps', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    A('qnapgk', '213.189.38.134'),
    Delegation_NS('qwas', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('rada.mazowiecka', ['ns1.megiteam.pl.', 'ns2.megiteam.pl.']),
    Delegation_NS('radom', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('radommiasto', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('radomsko', ['ns1.webserwer.pl.', 'ns2.webserwer.pl.']),
    Delegation_NS('rajdgranica', ['dns1.linuxpl.com.', 'dns2.linuxpl.com.', 'dns3.linuxpl.com.']),
    A('rajdodkrywcow', '51.75.54.175'),
    Delegation_NS('rajdscenariusz', ['ns1.8p.pl.', 'ns2.8p.pl.']),
    Delegation_NS('rajdswietokrzyski', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    A('raporty.odkrywcy', '51.75.54.175'),
    MX('ratownicy.lodzka', 10, 'ratownicy.lodzka.zhp.pl.'),
    A('ratownicy.lodzka', '89.161.255.25'),
    Delegation_NS('rawicz', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    A('repozytorium', '51.75.54.175'),
    Delegation_NS('rnz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('rozewie', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    Delegation_NS('rzeszow', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    A('sapi', '213.189.38.133'),
    A('sezam', '89.171.90.254'),
    Delegation_NS('siedlce', ['ns1.manifo.pl.', 'ns2.manifo.pl.']),
    A('siemiatycze', '79.96.169.242'),
    MX('siemiatycze', 10, 'siemiatycze.zhp.pl.'),
    A('sieradz', '85.232.255.122'),
    Delegation_NS('sierpc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('siodemka', ['ns1.cal.pl.', 'ns2.cal.pl.']),
    Delegation_NS('skarzysko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('skierniewice', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    A('skrzaty.wadowice', '62.129.222.4'),
    MX('skrzaty.wadowice', 10, 'skrzaty.wadowice.zhp.pl.'),
    A('skwierzyna', '79.96.5.114'),
    MX('skwierzyna', 10, 'skwierzyna.zhp.pl.'),
    Delegation_NS('slupca', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    A('sluzba', '51.75.54.175'),
    Delegation_NS('smigiel', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('sochaczew', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('sokolka', '79.96.169.242'),
    MX('sokolka', 10, 'sokolka.zhp.pl.'),
    Delegation_NS('sokolow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('spadochroniarze', '51.75.54.175'),
    A('specjalnosci', '51.75.54.175'),
    Delegation_NS('sroda', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('srodaslaska', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
    Delegation_NS('stalowawola', ['ns1.domena.pl.', 'ns2.domena.pl.']),
    Delegation_NS('stanica.mazowiecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('starachowice', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    A('starszyzna', '51.75.54.175'),
    A('starszyzna2', '51.75.54.175'),
    CNAME('start.ostroda', 'ghs.google.com.'),
    Delegation_NS('staszow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('stock', '51.75.54.175'),
    A('stopka', '51.75.54.175'),
    // MX('strategia', 10, 'strategia.zhp.pl.'),
    Delegation_NS('strategia2025', ['ns7.wixdns.net.', 'ns6.wixdns.net.']),
    A('strony', '51.75.54.175'),
    Delegation_NS('superstrona', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('suwalki', '79.96.169.242'),
    MX('suwalki', 10, 'suwalki.zhp.pl.'),
    A('swiatlo', '51.75.54.175'),
    Delegation_NS('swidnica', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('swiecie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('swieto2011.lodzka', '89.161.255.29'),
    MX('swieto2011.lodzka', 10, 'swieto2011.lodzka.zhp.pl.'),
    Delegation_NS('szaradruzyna', ['d.ns1.pl.', 'd.ns2.pl.']),
    Delegation_NS('sztum', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('tarnow', ['ns1.kei.pl.', 'ns2.kei.pl.']),
    A('test-rejestracja', '213.189.38.130'),
    Delegation_NS('test1234', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('tezm-mazowiecka', ['ns1.x14.eu.', 'ns3.x25.pl.']),
    A('tornister.fsj', '89.161.251.120'),
    MX('tornister.fsj', 10, 'tornister.fsj.zhp.pl.'),
    Delegation_NS('torun', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('trzcianka', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('trzebinia', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    MX('tuchola', 10, 'tuchola.zhp.pl.'),
    A('tuchola', '89.161.238.192'),
    Delegation_NS('turek', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    A('turniej', '51.75.54.175'),
    A('turniejgromad', '51.75.54.175'),
    Delegation_NS('uczestnik.sdm', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('uniejow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('veturi', '213.189.38.133'),
    CNAME('vpn.ostroda', 'merkury.ostroda.zhp.pl.'),
    A('vpngk', '213.189.38.130'),
    Delegation_NS('wadowice', ['ns11.linuxpl.com.', 'dns11.linuxpl.com.']),
    Delegation_NS('wagrowiec', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('walbrzych', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    A('watra', '51.75.54.175'),
    A('wedrownicy.bialostocka', '79.96.169.242'),
    Delegation_NS('wegrow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('westerplatte', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('wieliczka', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    Delegation_NS('wielkopolska', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    A('wilczysko', '109.95.157.35'),
    Delegation_NS('wloclawek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('wloclawekpowiat', 'powiatwloclawek.zhp.pl.'),
    A('wntgk', '213.189.38.130'),
    Delegation_NS('wolow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.']),
    Delegation_NS('wolsztyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('work', '51.75.54.175'),
    Delegation_NS('wroclaw', ['dns20.ovh.net.', 'ns20.ovh.net.']),
    Delegation_NS('wroclawpolnoc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wroclawpoludnie', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
    Delegation_NS('wroclawwschod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),
    Delegation_NS('wrzesnia', ['ns1.interian.pl.', 'ns3.tomkii.net.']),
    Delegation_NS('wschowa', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    AAAA('wschowa', '2001:41d0:1:1b00:87:98:239:3'),
    A('wschowa', '87.98.239.3'),
    CNAME('www.czarnyszlak', 'czarnyszlak.zhp.pl.'),
    A('www.gniezno', '178.32.205.96'),
    CNAME('www.haliz', 'haliz.zhp.pl.'),
    CNAME('www.lancut', 'lancut.zhp.pl.'),
    CNAME('www.lowicz', 'lowicz.zhp.pl.'),
    CNAME('www.poznangrunwald', 'poznangrunwald.zhp.pl.'),
    CNAME('www.rajdswietokrzyski', 'rajdswietokrzyski.zhp.pl.'),
    A('www.starszyzna', '51.75.54.175'),
    A('www.wschowa', '87.98.239.3'),
    AAAA('www.wschowa', '2001:41d0:1:1b00:87:98:239:3'),
    CNAME('www', 'zhp.pl.'),
    A('wypoczynek.lodzka', '89.161.255.31'),
    MX('wypoczynek.lodzka', 10, 'wypoczynek.lodzka.zhp.pl.'),
    Delegation_NS('wyszkow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wzlot', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('youthwave', 'zhp.pl.'),
    Delegation_NS('zabkowiceslaskie', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.']),
    Delegation_NS('zalecze', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('zapytaj', '51.75.54.175'),
    Delegation_NS('zdunskawola', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('zgierz', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    A('zgloszenia-rajdodkrywcow', '51.75.54.175'),
    Delegation_NS('zgloszenia.rajdgrunwaldzki', ['ns1.megiteam.pl.', 'ns2.megiteam.pl.']),
    A('zhpbaluty', '217.76.113.42'),
    Delegation_NS('zielonanuta', ['ns1.he.net.', 'ns2.he.net.', 'ns3.he.net.']),
    Delegation_NS('ziemiarzeszowska', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('zkk.lodzpolesie', ['ns-pl.1and1-dns.pl.', 'ns-pl.1and1-dns.biz.']),
    Delegation_NS('zlotow', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_NS('zmigrod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),
    Delegation_NS('zuchy.pabianice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zuromin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zychlin', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.']),
    Delegation_NS('zyrardow', ['ns1.atthost.pl.', 'ns2.atthost.pl.'])
);
