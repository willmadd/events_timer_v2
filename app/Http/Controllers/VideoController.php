<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Str;

use FFMpeg;

use FFMpeg\Format\Video\X264;

class VideoController extends Controller
{
    public function makeVideo(Request $request)
    {
        $id = Str::random(6);
        $fps=30;
        // $seconds=$request->time;
        $seconds=20;
        $mantissaDigits=2;
        $upperFont=100;
        $lowerFont=100;
        $color=$request->textColor;
        $name="countdown_timer_$id.mp4";
        $wtr = '-i ~/Pictures/biggles.jpg -filter_complex \
        "[1]scale=iw*0.7:-1[wm];[0][wm]overlay=x=(W-w)/2:y=(H-h)/2" -codec:a copy';
$font = env("APP_FONT", "/").'DIGITALDREAM.ttf';
$featureImage = '-i '.env("APP_BACKGROUND_URL", "/").'/public/images/backgrounds/'.'1.jpg'.' -filter_complex "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"';
        $str = "Visit W3Schogols";
$pattern = "/#\w{4,8}/i";
$image=env("APP_BACKGROUND_URL", "/").'/public/images/backgrounds/'.$request->backgroundImage.'.jpg';
if(preg_match($pattern, $request->backgroundImage)){
$bg='-f lavfi -i color=c='.$request->backgroundImage.':s=1280x720:r=24 ';
} else{
    $bg = '-loop 1 -i '.$image ;
}

        $background = "";

        // $command = `ffmpeg -loop 1 -i $image -c:v libx264 -r $fps -t $seconds -pix_fmt yuv420p -vf "fps=$fps,drawtext=fontfile='/usr/share/fonts/urw-base35/C059-Bold.otf':fontcolor=$color:fontsize=$upperFont:x=(w-text_w)/2:y=(h-text_h)/2:text='%{eif\:($seconds-t)\:d}.%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}',drawtext=fontfile='/usr/share/fonts/urw-base35/C059-Bold.otf':fontcolor=$color:fontsize=$lowerFont:x=(w-text_w)/2:y=((h-text_h)/2)+$upperFont:text='Elapsed\: %{eif\:(t)\:d}.%{eif\:(mod(t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}'" $name;`;
 $things = env("APP_BACKGROUND_URL", "/").'/public/images/backgrounds/'.'1.jpg';
        $command = `ffmpeg $bg  \
        -c:v libx264 \
        -r $fps \
        -t $seconds \
        -pix_fmt yuv420p \
        -vf "fps=$fps,\
        drawtext=fontfile='$font':\
        fontcolor=$color:\
        fontsize=$upperFont\
        :x=(w-text_w)/2:y=(h-text_h)-40:\
        text='%{eif\:($seconds-t)\:d}\:%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}" \
        $name -loglevel debug -v verbose;`;
  
        
        `ffmpeg -i $name`;
        // $command = `ffmpeg -loop 1 -i $image -filter 'fade=in:5:20:color=yellow' -c:v libx264 -r $fps -t $seconds -pix_fmt yuv420p -vf "fps=$fps,drawtext=fontfile='/usr/share/fonts/urw-base35/C059-Bold.otf':fontcolor=$color:fontsize=$upperFont:x=(w-text_w)/2:y=(h-text_h)/2:text='%{eif\:($seconds-t)\:d}.%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}" $name -loglevel debug -v verbose;`;
  
$newimg = env("APP_BACKGROUND_URL", "/")."/public/images/backgrounds/1.jpg";

        // $command = "ffmpeg -loop 1 ".
        // "-i $newimg ".
        // "-c:v libx264 ".
        // "-t 15 ".
        // "-pix_fmt yuv420p ".
        // "'-vf drawtext=fontfile='/usr/share/fonts/urw-base35/C059-Bold.otf': x=(w-text_w)/2: y=(h-text_h)/2:text='hello' ".
        // "-vf scale=1280:720 ".
        // "out21432.mp4;";
        
        // system($command);


        return response()->json(
        [
            'success'=>true,
            'file_name'=> $name,
            'path' => $image,
            'command' => $command,
            'font' => $font
        ],
            200
        );
    }

    public function create(Request $request)
    {
        $font = env("APP_FONT", "/").'DIGITALDREAM.ttf';

        $id = Str::random(6);
        $seconds = $request->time;
        // $seconds= 5;
        $duration = $seconds+0.05;
        $mantissaDigits = 2;
        $color=$request->textColor;
        $upperFont = 50;
        $fps=$request->fps;
        $name="countdown_timer_$id.mp4";
        $featureImage = $request->featureImage;

        $audioFile = $request->audio;

        if($audioFile){
            $audio="-stream_loop 1 -i mp3/$audioFile.mp3 -c:v copy ";
        }else{
            $audio="";
        }
        if($request->featureImgPos === "right"){
            $ft_img_pos='x=W-w:y=(H-h)/2-40';
        }else if($request->featureImgPos === "left"){
            $ft_img_pos='x=0:y=(H-h)/2-40';
        }else{
            $ft_img_pos='x=(W-w)/2:y=(H-h)/2-40';
        }

        if($request->hideMs){
            $ms="";
        }else{
            $ms="\:%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}";
        }

        $pattern = "/#\w{4,8}/i";
        $image=env("APP_BACKGROUND_URL", "/").'/public/images/backgrounds/'.$request->backgroundImage.'.jpg';
        if (preg_match($pattern, $request->backgroundImage)) {
            $col = $request->backgroundImage;
            $bg="-f lavfi -i color=c=$col:s=1280x720:r=24 ";
        } else {
            $bg = '-loop 1 -i '.$image ;
        }

        // $bg='-f lavfi -i color=c=#8f629d:s=1280x720:r=24 ';

        $image_info = getimagesize($featureImage);

        $type = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");

        $imgPath = $id.'.'.$type;
        $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $featureImage));
        file_put_contents($imgPath, $data);

`ffmpeg \
$bg \
-i $imgPath \
$audio \
-c:v libx264 \
-r $fps \
-t $duration \
-pix_fmt yuv420p \
-filter_complex \
"[1]scale=-1:560[wm];[0][wm]overlay=$ft_img_pos:[km];[km]drawtext=fontfile='$font':fontcolor=$color:x=(w-text_w)/2:y=(h-text_h)-40:\
fontsize=$upperFont:\
text='%{eif\:(mod(($seconds-t)/3600, 60))\:d\:2}\:%{eif\:(mod(($seconds-t)/60, 60))\:d\:2}\:%{eif\:(mod($seconds-t, 60))\:d\:2}$ms'" \
$name
`;
    return response()->json(
        [
            'success'=>true,
            'file_name'=> $name,
            'audio' => $audio,
            'img' => $featureImage,
            'type'=> $type,
            'imgpath' => $imgPath,
        ],
            200
        );
}
    


    
    public function createBackup(Request $request)
    {
        //this works fine
        $font = env("APP_FONT", "/").'DIGITALDREAM.ttf';

$str = Str::random(6);
$seconds = 3;
$duration = $seconds+0.05;
$mantissaDigits = 2;
$color='red';
$upperFont = 100;
$fps=25;

$ms="\:%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}";
$ms="";

`ffmpeg -f lavfi \
-i color=c='#e8e8e8':s=1280x720:r=24 \
-i ~/Pictures/biggles.jpg \
-c:v libx264 \
-r 30 \
-t $duration \
-pix_fmt yuv420p \
-filter_complex \
"[1]scale=iw*0.7:-1[wm];[0][wm]overlay=x=(W-w)/2:y=(H-h)/2:[km];[km]drawtext=fontfile='$font'fontcolor=#333333:x=(w-text_w)/2:y=(h-text_h)-40:\
text='%{eif\:(mod(($seconds-t)/3600, 60))\:d\:2}\:%{eif\:(mod(($seconds-t)/60, 60))\:d\:2}\:%{eif\:(mod($seconds-t, 60))\:d\:2}$ms'" \
things$str.mp4
`;
// text='%{eif\:($seconds-t)\:d}\:%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}'" \
// text='%{eif\:(mod(($seconds-t)/3600, 60))\:d\:2}\:%{eif\:(mod(($seconds-t)/60, 60))\:d\:2}\:%{eif\:(mod($seconds-t, 60))\:d\:2}'" \

// drawtext=fontfile='$font':\
// fontcolor=$color:\
// fontsize=$upperFont\
// :x=(w-text_w)/2:y=(h-text_h)-40:\
// text='%{eif\:($seconds-t)\:d}\:%{eif\:(mod($seconds-t, 1)*pow(10,$mantissaDigits))\:d\:$mantissaDigits}" \
return response()->json(
    [
        'success'=>true,
        'file_name'=> $name,
        'path' => $image,
        'command' => $command,
        'font' => $font
    ],
        200
    );
    }

    public function test()
    {
        return "success";
    }

    public function ffmpeg()
    {

        FFMpeg::fromDisk('public')
        ->open('images/backgrounds/1.jpg')
        ->export()
        ->asTimelapseWithFramerate(1)
        ->inFormat(new X264)
        ->save('timelapse.mp4');

        return "success";
    }
}

