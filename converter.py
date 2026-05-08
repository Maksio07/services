import os
from PIL import Image
from pillow_heif import register_heif_opener

# Rejestracja dekodera HEIF w bibliotece Pillow
register_heif_opener()

def convert_heic_to_jpg(source_folder):
    # Tworzymy folder na gotowe zdjęcia, jeśli nie istnieje
    output_folder = os.path.join(source_folder, "converted")
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Przeglądamy pliki w folderze
    for filename in os.listdir(source_folder):
        if filename.lower().endswith(".heic"):
            print(f"Konwertowanie: {filename}...")
            
            # Pełna ścieżka do pliku
            file_path = os.path.join(source_folder, filename)
            
            # Otwieranie obrazu
            image = Image.open(file_path)
            
            # Przygotowanie nazwy wyjściowej (zmiana rozszerzenia na .jpg)
            target_name = os.path.splitext(filename)[0] + ".jpg"
            target_path = os.path.join(output_folder, target_name)
            
            # Zapisywanie jako JPEG (możesz dostosować jakość parametrem quality)
            image.save(target_path, "JPEG", quality=95)

    print(f"\nGotowe! Zdjęcia znajdziesz w: {output_folder}")

# Uruchomienie (kropka oznacza bieżący folder)
if __name__ == "__main__":
    convert_heic_to_jpg("C:/Users/mmaks/OneDrive/Рабочий стол/zdjęcia/Łazienki/Nowy folder")