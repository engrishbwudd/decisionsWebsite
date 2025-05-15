Chloe Suggestion Website - Project Plan

Overview

Create a playful, interactive website for couples (targeted at Zach & Chloe) that helps quickly decide what to do together. The site covers movies, TV shows, video games, general activities, and "sexy times," each with a smart filter or suggestion flow. Content is stored in structured JSON files.

1. Landing Screen

Centered title: "What do you autistic lovebirds feel like doing?"

Five large buttons underneath:

Movies

TV

Video Game

General

Sexy Times

2. Movies Flow

User clicks Movies

Prompts:

Genre (dropdown menu)

Length (dropdown: 1-2 hrs, 2+ hrs)

Displays a filtered, random movie suggestion from JSON list.

Movie JSON Example:

{
  "title": "Midsommar",
  "genre": ["Horror", "Drama"],
  "length": "2+hrs"
}

3. TV Shows Flow

User clicks TV

Prompts:

Genre (dropdown)

Length (dropdown: 30min, 1hr)

Displays a filtered, random show suggestion from JSON.

4. Video Games Flow

User clicks Video Game

No further input.

Instantly shows a random game title from JSON list.

5. General Activities Flow

User clicks General

No further input.

Instantly shows a random general activity.

6. Sexy Times Flow

User clicks Sexy Times

Prompts:

Intensity (dropdown/slider: e.g., Sweet, Spicy, Unhinged)

Focus (dropdown: Zach, Chloe, Both)

Toys (checkboxes: Vibrator, anal beads, butt plug, whip, fleshlight, cuffs, blindfold, nipple clamps)

Suggestion generated based on selected criteria.

7. Data Organization (JSON Examples)

Movies, TV: Objects w/ title, genre(s), length.

Games, General: Arrays of strings (or expand w/ tags later).

Sexy Times: Generate output based on selections (not static list).

8. Content Bank (Full Lists)

Movies

Everything Everywhere All At Once (Sci-Fi/Action/Comedy, 2+hrs)

I, Tonya (Biography/Drama/Comedy, 2+hrs)

Midsommar (Horror/Drama, 2+hrs)

The Favourite (Period/Drama/Comedy, 2+hrs)

Roma (Drama, 2+hrs)

A Quiet Place Part II (Horror/Thriller, 1-2hrs)

Eighth Grade (Drama/Comedy, 1-2hrs)

The Florida Project (Drama, 1-2hrs)

Moonlight (Drama, 1-2hrs)

The Lobster (Sci-Fi/Dark Comedy, 1-2hrs)

Climax (Drama/Horror/Experimental, 1-2hrs)

Us (Horror/Thriller, 2+hrs)

Suspiria (1977) (Horror, 1-2hrs)

Suspiria (2018) (Horror/Drama, 2+hrs)

Coherence (Sci-Fi/Thriller, 1-2hrs)

Okja (Adventure/Drama/Sci-Fi, 2+hrs)

Poor Things (Fantasy/Drama/Comedy, 2+hrs)

Dogtooth (Drama/Thriller, 1-2hrs)

The Killing of a Sacred Deer (Psychological Thriller/Horror, 2+hrs)

Nope (Horror/Sci-Fi, 2+hrs)

Marcel the Shell with Shoes On (Animation/Comedy/Drama, 1-2hrs)

Safety Not Guaranteed (Comedy/Sci-Fi/Romance, 1-2hrs)

Freddy Got Fingered (Comedy, 1-2hrs)

Cart Of Darkness (Documentary, 1-2hrs)

TV Shows

Severance (Sci-Fi/Drama/Thriller, 1hr)

Atlanta (Comedy/Drama, 30min)

30 Rock (Comedy, 30min)

Los Espookys (Comedy/Horror, 30min)

Pen15 (Comedy/Drama, 30min)

Castlevania (Animation/Fantasy/Action, 30min)

The Last of Us (Drama/Horror/Adventure, 1hr)

The OA (Sci-Fi/Drama/Mystery, 1hr)

Erased (Anime/Thriller/Mystery, 30min)

Last Man on Earth (Comedy/Sci-Fi, 30min)

Game of Thrones (Fantasy/Drama/Action, 1hr)

The Magicians (Fantasy/Drama, 1hr)

On Cinema (Comedy/Satire, 30min)

Saiki K (Anime/Comedy/Supernatural, 30min)

BoJack Horseman (Animation/Comedy/Drama, 30min)

Devilman Crybaby (Anime/Horror/Action, 30min)

My Hero Academia (Anime/Action/Fantasy, 30min)

The Rehearsal (Comedy/Docufiction, 30min)

Peep Show (Comedy, 30min)

Cunk on Earth (Comedy/Documentary, 30min)

Cunk on Life (Comedy/Documentary, 30min)

Veep (Comedy/Political Satire, 30min)

Ludwig (Variety/Comedy (YouTube/Twitch), 1hr+)

It’s Always Sunny in Philadelphia (Comedy, 30min)

The Trip (Comedy/Drama, 30min)

The Thick of It (Comedy/Political Satire, 30min)

Detroiters (Comedy, 30min)

Succession (Drama/Satire, 1hr)

The Bear (Drama/Comedy, 30min)

Video Games

Rocket League

Arma

Plate Up

UFC

OOTP

Don’t Look Outside

Keep Talking and Nobody Explodes

HomeSafety Hotline

Hollywood Mogul

General Activities

Chloe backrub

Zach backrub

Thumbwar

Truth

Dare

Sexy Times

Suggestions are generated based on: Intensity, Focus (Zach/Chloe/Both), Toys (Vibrator, Anal beads, Butt plug, Whip, Fleshlight, Cuffs, Blindfold, Nipple clamps)

9. Options/Notes

Duplicates can be removed or content alphabetized if needed.

Easy to expand: add moods, tag by "energy level," custom randomizer, etc.

10. Next Steps

Wireframe UI

JSON data sample/template

Stack: HTML/CSS/JS (vanilla or React), JSON for data

Implement movie/show filtering logic

Build randomizer for games, general, and sexy times



