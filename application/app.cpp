//Neptunes//
#include <iostream>
#include <stdlib.h>
#include <iomanip>
using namespace std;



void displayLogo()
{
    system("Color b");
 
    cout << "      _      _     _______      ________     _____________      __      __       _      _     _______       ________     " << endl;
    cout << "     | \\    | |   |  _____|    |   __   |   |_____  ______|    | |      | |     | \\    | |   |  _____|     |  ______|    " << endl;
    cout << "     |  \\   | |   | |_____     |  |__|  |        |  |          | |      | |     |  \\   | |   | |_____      | |______     " << endl;
    cout << "     | |\\ \\ | |   |  _____|    |   _____|        |  |          | |      | |     | |\\ \\ | |   | ______|     |______  |    " << endl;
    cout << "     | | \\ \\| |   | |_____     |  |              |  |          | |______| |     | | \\ \\| |   | |_____       ______| |    " << endl;
    cout << "     |_|  \\ __|   |_______|    |__|              |__|          |__________|     |_|  \\ __|   |_______|     |________|    " << endl;
}

void infoAboutUs()

{
    system("Color a");
    cout << "Raya Lilova -> RSLilova18@codingburgas.bg          | 10B |    Scrum Trainer" << endl;
    cout << "Stivan Lilov -> SSLilov18@codingburgas.bg          | 10B |    Presentation" << endl;
    cout << "Radoslav Ivanow -> RGIvanov19@codingburgas.bg      | 9V  |    c++ application" << endl;
    cout << "Georgi Kotakov -> GGKotakov20@codingburgas.bg      | 8G  |    CSS&JavaScript Developer" << endl;
    cout << "Venelin Nikolov -> VMNikolov20@codingburgas.bg     | 8G  |    Designer" << endl;
    cout << "Svetoslav Stoilov -> SDStoilov20@codingburgas.bg   | 8G  |    HTML Developer" << endl;
}


void infoAboutWaters()

{
    cout << endl;
    cout << endl;
    cout << endl;
    cout << endl;
    system("Color 4");

    cout << setw(55) << "Water" << endl;
    cout << endl;
    cout << "There are many different types of water, but the main ones are groundwater, surface water and seawater. Our planet itself is 72% water, but a small part of it is drinkable. Water is one of the most important resources for life on our planet. You often hear that the harmful effects affect all living organisms." << endl;
}

void ourIdea()
{
    cout << endl;
    cout << endl;
    cout << endl;
    cout << endl;
    system("Color b");
    cout << setw(55) << "Our Idea" << endl;
    cout << endl;
    cout << "The application is designed to monitor different water and saltwater pools. Measurement of temperature and water level as well as the condition of living organisms in it. In an emergency, the application notifies the authorities as well as rescuersand veterinarians." << endl;
}



bool showMainList()
{


    int choice;

    cout << endl;
    cout << endl;
    cout << endl;
    cout << endl;
    cout << endl;



    cout << setw(75) << "_____________________________________________" << endl;
    cout << setw(30) << "|" << setw(46) << "|" << endl;
    cout << setw(30) << "|" << setw(36) << "Option 1 -> Info about us" << setw(10) << "|" << endl;
    cout << setw(30) << "|" << setw(40) << "Option 2 -> Info about waters" << setw(6) << "|" << endl;
    cout << setw(30) << "|" << setw(31) << "Option 3 -> Our Idea" << setw(15) << "|" << endl;
    cout << setw(30) << "|" << setw(27) << "Option 4 -> Quit" << setw(19) << "|" << endl;
    cout << setw(76) << "|_____________________________________________|" << endl;

    cin >> choice;
    /*if (choice != 1 or choice != 2 or choice != 3 or choice != 4)
    {
        cout << "Incorrect input. Please try again!" << endl;
        cin >> choice;
    }*/
    switch (choice)
    {
    case 1:
        infoAboutUs();
        break;
    case 2:
        infoAboutWaters();
        break;
    case 3:
        ourIdea();
        break;
    case 4:
        exit(0);
        break;
    default:
        cout << "Incorrect input. Please try again!" << endl;
    }

}


int main()
{
    bool doShowMenu = true;
    displayLogo();
    do
    {
        showMainList();
        if (showMainList() == false)
        {
            return 0;
        }
    } while (doShowMenu);

    
}
