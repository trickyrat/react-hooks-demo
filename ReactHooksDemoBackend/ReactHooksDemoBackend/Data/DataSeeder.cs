using Microsoft.EntityFrameworkCore;
using ReactHooksDemoBackend.Entities;

namespace ReactHooksDemoBackend.Data
{
    public static class DataSeeder
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
              serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                if (context == null || context.Books == null)
                {
                    throw new ArgumentNullException("Null ApplicationDbContext");
                }
                if (context.Books.Any())
                {
                    return;
                }

                context.Books.AddRange(
                    new Book
                    {
                        Title = "Verity",
                        Author = "Colleen Hoover",
                        Description = "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.\r\n \r\nLowen arrives at the Crawford home, ready to sort through years of Verity’s notes and outlines, hoping to find enough material to get her started. What Lowen doesn’t expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of the night her family was forever altered.\r\n \r\nLowen decides to keep the manuscript hidden from Jeremy, knowing its contents could devastate the already grieving father. But as Lowen’s feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife’s words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her.",
                    },

                    new Book
                    {
                        Title = "Ugly Love ",
                        Author = "Colleen Hoover",
                        Description = "When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction. Once their desires are out in the open, they realize they have the perfect set-up. He doesn’t want love, she doesn’t have time for love, so that just leaves the sex. Their arrangement could be surprisingly seamless, as long as Tate can stick to the only two rules Miles has for her.\r\n\r\nNever ask about the past.\r\nDon’t expect a future.\r\n\r\nThey think they can handle it, but realize almost immediately they can’t handle it at all.\r\n\r\nHearts get infiltrated.\r\nPromises get broken.\r\nRules get shattered.\r\nLove gets ugly.",
                    },

                    new Book
                    {
                        Title = "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
                        Author = "Bessel van der Kolk M.D.",
                        Description = "Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.",
                    },

                    new Book
                    {
                        Title = "I'm Glad My Mom Died",
                        Author = "Jennette McCurdy",
                        Description = "A heartbreaking and hilarious memoir by iCarly and Sam & Cat star Jennette McCurdy about her struggles as a former child actor—including eating disorders, addiction, and a complicated relationship with her overbearing mother—and how she retook control of her life.\r\n\r\nJennette McCurdy was six years old when she had her first acting audition. Her mother’s dream was for her only daughter to become a star, and Jennette would do anything to make her mother happy. So she went along with what Mom called “calorie restriction,” eating little and weighing herself five times a day. She endured extensive at-home makeovers while Mom chided, “Your eyelashes are invisible, okay? You think Dakota Fanning doesn’t tint hers?” She was even showered by Mom until age sixteen while sharing her diaries, email, and all her income.\r\n\r\nIn I’m Glad My Mom Died, Jennette recounts all this in unflinching detail—just as she chronicles what happens when the dream finally comes true. Cast in a new Nickelodeon series called iCarly, she is thrust into fame. Though Mom is ecstatic, emailing fan club moderators and getting on a first-name basis with the paparazzi (“Hi Gale!”), Jennette is riddled with anxiety, shame, and self-loathing, which manifest into eating disorders, addiction, and a series of unhealthy relationships. These issues only get worse when, soon after taking the lead in the iCarly spinoff Sam & Cat alongside Ariana Grande, her mother dies of cancer. Finally, after discovering therapy and quitting acting, Jennette embarks on recovery and decides for the first time in her life what she really wants.\r\n\r\nTold with refreshing candor and dark humor, I’m Glad My Mom Died is an inspiring story of resilience, independence, and the joy of shampooing your own hair.",
                    });
                context.SaveChanges();
            }
        }
    }
}
