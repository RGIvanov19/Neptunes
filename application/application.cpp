#include<iostream>
#include<iomanip>

using namespace std;

void displayMenu() {
	cout << endl;
	cout << endl;
	cout << setw(75) << "_____________________________________________" << endl;
	cout << setw(30) << "|" << setw(46) << "|" << endl;
	cout << setw(30) << "|" << setw(36) << "Option 1 -> Info about us" << setw(10) << "|" << endl;
	cout << setw(30) << "|" << setw(40) << "Option 1 -> Info about waters" << setw(6) << "|" << endl;
	cout << setw(30) << "|" << setw(31) << "Option 1 -> Our Idea" << setw(15) << "|" << endl;
	cout << setw(30) << "|" << setw(27) << "Option 1 -> Quit" << setw(19) << "|" << endl;
	cout << setw(76) << "|_____________________________________________|" << endl;
}

int main() {
	displayMenu();
}