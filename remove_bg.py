from PIL import Image
import numpy as np
import sys

def main():
    try:
        # Open the image
        img = Image.open('public/images/hero/logo.jpg').convert('RGBA')

        # Convert image to numpy array
        data = np.array(img)

        # Find pixels that are close to black
        # Use a threshold to catch compression artifacts (e.g., RGB < 25, 25, 25)
        r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
        
        # Identify black pixels based on a threshold
        black_areas = (r < 20) & (g < 20) & (b < 20)
        
        # To anti-alias, we can blend the transition or just use a strict cutoff.
        # Strict cutoff:
        data[..., 3][black_areas] = 0

        # Create new image and save
        new_img = Image.fromarray(data)
        new_img.save('public/images/hero/logo.png')
        print("Successfully created logo.png")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
