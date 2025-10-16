import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');

import fs from 'node:fs';

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}


export async function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true, strict: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.log('Error writing file', error);
      throw new Error('Error writing file');
    }

  });
  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals (creator, creator_email, title, slug, summary, instructions, image)
    VALUES (
    @creator, 
    @creator_email, 
    @title, 
    @slug, 
    @summary, 
    @instructions, 
    @image
    )
  `).run(meal);

}