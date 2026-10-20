# art-archive
Art archive website test

## FFMPEG commands
(Note: Create the ``small`` folder first)

For making longest edge equal 1000px:
```
for %j in ("C:\<your-path>\*.png") do ( ffmpeg -i "%j" -vf "scale=1000:1000:force_original_aspect_ratio=decrease" "C:\<your-path>\small\%~nj.png" )
```
Make images WEBP:
```
for %j in ("C:\Users\<your-path>\*.png") do ( ffmpeg -i "%j" -vf "scale=1000:1000:force_original_aspect_ratio=decrease" -c:v libwebp -lossless 1 "C:\Users\<your-path>\small\%~nj.webp" )
```
Alternative (add FFMPEG to environment variables first):
```
for %j in (*.png *.jpg *.jpeg *.webp *.gif) do ( ffmpeg -i "%j" -vf "scale=1000:1000:force_original_aspect_ratio=decrease" "small\%~nj.png" )
```
