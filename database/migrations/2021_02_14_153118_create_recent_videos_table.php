<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecentVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recent_videos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('user_id');
            $table->longText('thumbnail');
            $table->longText('imgurl');
            $table->integer('duration');
            $table->text('definition')->nullable();
            $table->text('background');
            $table->text('audio')->nullable();
            $table->text('font');
            $table->text('hide_ms');
            $table->text('font_size');
            $table->text('font_color');
            $table->text('res');
            $table->text('vId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recent_videos');
    }
}
