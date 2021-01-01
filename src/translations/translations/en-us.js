import createTranslation from '../create-translation'

const translation = createTranslation({
  // profile
  Follow: () => 'Takip et',
  Unfollow: () => 'Takibi Bırak',
  'Edit profile': () => 'Profili Düzenle',
  'Display name': () => '	Görüntülenecek İsim',
  Description: () => 'Açıklama',
  'Thumbnail URL': () => 'Profil Resmi URL’si',
  'Banner URL': () => 'Kapak Sayfası URL’si',

  // menu
  Home: () => 'Anasayfa',
  Profile: () => 'Profil',
  Search: () => 'Ara',
  'Search user ID': () => 'Kullanıcı Adı Ara',
  Peers: () => 'Eşler',
  'Connected peers posts': () => 'Eşlere Bağlandı',
  Stats: () => 'İstatikler',
  'Connected peers stats': () => 'Eşler  İstatiklerine bağlandı',
  'Connecting to peers': () => 'Eşlere bağlanıyor',
  Following: () => 'Takip ediliyor',
  'Not following anyone': () => 'Hiç kimseyi takip etmiyorsunuz',
  Export: () => 'Dışarı aktar',
  Import: () => 'İçeri aktar',

  // post
  'Uncensorable content': () => 'Sansürsüz içerik'
})

export default translation
