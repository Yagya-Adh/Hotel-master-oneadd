<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word,
            'image' => fake()->imageUrl,
            'price' => fake()->randomFloat(2, 100, 1000),
            'food_id' => \App\Models\Food::all()->random()->id,
        ];
    }
}
