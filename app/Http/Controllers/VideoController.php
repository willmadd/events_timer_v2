<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use FFMpeg;

class VideoController extends Controller
{
    public function makeVideo(Request $request)
    {



        $fps=10;
$seconds=$request->time;
$mantissaDigits=2;
$upperFont=600;
$lowerFont=100;
$color="#333333";

$command = `ffmpeg -loop 1 -i ~/Pictures/biggles.jpg -c:v libx264 -r $fps -t $seconds -pix_fmt yuv420p -vf "fps=$fps,drawtext=fontfile='/usr/share/fonts/urw-base35/C059-Bold.otf':fontcolor=$color:fontsize=$upperFont:x=(w-text_w)/2:y=(h-text_h)/2:text='%{eif\:($seconds-t)\:d}.%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}',drawtext=fontfile='/usr/share/fonts/urw-base35/C059-Bold.otf':fontcolor=$color:fontsize=$lowerFont:x=(w-text_w)/2:y=((h-text_h)/2)+$upperFont:text='Elapsed\: %{eif\:(t)\:d}.%{eif\:(mod(t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}'" "$seconds seconds countdown timer $request->identifier.mp4";`;

return $command;


    }
}
