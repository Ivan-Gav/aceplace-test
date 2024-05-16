const YM_BASE_URL = "https://yandex.ru/maps/?text=";

export function getGeoLink(adress: string) {
  const encodedAddress = encodeURI(adress);
  return YM_BASE_URL + encodedAddress;
}
